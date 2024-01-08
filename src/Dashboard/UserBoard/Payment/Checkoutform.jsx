import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";
import useNormalAxios from "../../../Hooks/useNormalAxios";
import { useState } from "react";
import { Button } from "flowbite-react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";



const Checkoutform = () => {
const normalAxios=useNormalAxios()
const {user}=useAuth()
const[carts]=useCart()
const stripe=useStripe()
const elements=useElements()

const[clientSecret,setSecretClient]=useState('')


const totalPrice=carts.reduce((pre,current)=>pre+current.phonePrice,0)
const afterTaxPrice=totalPrice+60
normalAxios.post('/create-payment-intent',{price:afterTaxPrice})
.then(res=>{
  
   setSecretClient(res.data.clientSecret)
})



const formHandler=async(event)=>{
event.preventDefault()
if(!stripe || !elements) {
    return
 }

const card=elements.getElement(CardElement)

if(card==null){
    return
}

const{error,paymentMethod}=await stripe.createPaymentMethod({
    type:'card',
    card
})

if(error){
   
  
    toast.error(error.message)
}

else{
    console.log('payment Method',paymentMethod)
  
}

const{paymentIntent,error:confrimPaymentError}=await stripe.confirmCardPayment(clientSecret,{
     payment_method:{
        card:card,
        billing_details:{
            name:user?.displayName,
            email:user?.email
        }
     }



})

if(confrimPaymentError){
  
    toast.error(confrimPaymentError.message)
}

else{
    console.log('Confrim Payment intent',paymentIntent)
     if(paymentIntent.status==='succeeded'){
          toast.success(`Your Transition Id ${paymentIntent.id}`) 
            
         const paymentInfo={

         email:user?.email, 
         paymentrorName:user?.displayName,
         transitionId:paymentIntent.id,
         totalAmount:afterTaxPrice,
         date:new Date(),
         paymentorCartId:carts.map(cart=>cart._id)

      }


     const res=await normalAxios.post('/payment',paymentInfo)
                     console.log(res.data)
                                   

            if(res.data.paymentData.insertedId){

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Payment completed",
                    showConfirmButton: false,
                    timer: 1500
                  })



            }






     }

}












}
















    return (
        <div className="my-5">
            <form onSubmit={formHandler}>
<CardElement className="bg-slate-500 p-10 w-full h-[200px] rounded-lg"
  options={{
    style: {
      base: {
        fontSize: '16px',
        color: 'text-white',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }}

  />
  <Button className="my-3" type="submit" gradientMonochrome="teal" disabled={!stripe || !clientSecret }>
        Pay
      </Button>
<Toaster/>






            </form>
        </div>
    );
};

export default Checkoutform;