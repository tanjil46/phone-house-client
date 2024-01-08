
import { FaTrash } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import { Link } from "react-router-dom";
import useNormalAxios from "../../Hooks/useNormalAxios";
import Swal from "sweetalert2";

import { useEffect, useState } from "react";






const Mycart = () => {
 const[carts,refetch]=useCart()
const normalAxios=useNormalAxios()
const[disabled,setDisabled]=useState(false)
const totalPrice=carts.reduce((prevPrice,currentPrice)=>prevPrice+currentPrice.phonePrice, 0)
const totalPriceNumber=parseInt(totalPrice)
const atLastPrice=totalPriceNumber+60;

useEffect(()=>{
if(totalPrice==0){
    setDisabled(true)
}

},[totalPrice])

const deleteCartHandler=(cart)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            normalAxios.delete(`/carts/${cart._id}`)
            .then(res=>{
                console.log(res.data)
                if(res.data.deletedCount>0){
refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
                }
            })


        }
      })








     


   
    


}









    return (
        <div>
            <p className="text-center my-8 text-3xl font-bold">Your cart({carts?.length} Items)</p>
           
           <div className="">
            {
                carts.map((cart,idx)=> <div key={idx} className="flex   my-4 justify-between items-center rounded-xl w-full bg-gradient-to-t from-pink-500 to-orange-500 p-4" >

               <img className="md:w-[90px] w-[40px] rounded-lg" src={cart?.phoneImage}></img>
               <div className="">
                <p className="md:text-2xl text-sm font-bold">{cart?.phoneName}</p>
                <p className="md:text-2xl text-sm font-bold">{cart?.brandName}</p>
               </div>
                
                <h1 className="md:text-2xl text-sm font-bold " >{cart?.phonePrice}$</h1>
              

                <button onClick={()=>deleteCartHandler(cart)} className="md:text-xl"><FaTrash></FaTrash></button> 

                </div> )
            }

          
















           </div>
           
<div className="text-end space-y-5 my-4">
<p className="md:text-xl font-bold">SubTotal:{totalPriceNumber}$</p>
<p className="md:text-xl font-bold">Online Tax:60$</p>
<p className="md:text-xl font-bold"> OverallPrice:{totalPriceNumber===0 ?totalPriceNumber:atLastPrice}$</p>
<div className="">
   <button disabled={disabled} className="btn bg-cyan-500 hover:bg-teal-500"> <Link  to='/dashboard/payment' >CHECK OUT</Link></button>
</div>
</div>


        </div>
    );
};

export default Mycart;