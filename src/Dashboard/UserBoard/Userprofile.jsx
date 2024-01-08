import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useNormalAxios from "../../Hooks/useNormalAxios";
import { Progress } from "flowbite-react";



const Userprofile = () => {
const{user}=useAuth()
const normalAxios=useNormalAxios()
const{data:paymnets=[]}=useQuery({
    queryKey:['payments',user?.email],
    queryFn:async()=>{
      const res=await normalAxios.get(`/payment/${user.email}`)
      return res.data
    }
  })

  const totalPayment=paymnets.reduce((pre,current)=>pre+current.totalAmount,0)
const totalPaymentS=parseInt(totalPayment)


    return (
        <div className="flex md:flex-row flex-col gap-3"> 
        <div className="">

        <div className="bg-gradient-to-t w-[300px] h-[200px] mx-auto my-3 from-pink-500 to-purple-500">
         
         <div className="pt-36">
            <img className="w-[100px] rounded-full mx-auto " src={user?.photoURL}></img>
         </div>

           </div>





          <div className="bg-slate-500 my-16 w-[180px] p-2 rounded-md shadow-2xl text-center mx-auto">
            <p className="text-lg font-bold texyt-white">{user?.displayName}</p>
          </div>








        </div>


      <div className="space-y-5">

        <div className="flex   gap-3">
    <div className="bg-cyan-500 w-[250px] h-[120px] my-3 rounded-md">
     
     <p className="text-white font-bold md:text-lg  text-center">Total Orders</p>
      <p className="bg-white text-slate-600 text-center p-2 w-[50px] rounded-lg font-bold my-4 mx-auto">{paymnets?.length}</p>

    </div>

    

    <div className="bg-yellow-500 w-[250px] h-[120px] my-3 rounded-md">
     
     <p className="text-white font-bold md:text-lg  text-center">Total Amount</p>
      <p className="bg-white text-slate-600 text-center p-2 max-w-[100px] rounded-lg font-bold my-4 mx-auto">{totalPaymentS}$</p>

    </div>


    </div>




    <div className="text-base font-medium text-green-700">Order Ratio</div>
      <Progress progress={87} color="green" />



      </div>










            
        </div>
    );
};

export default Userprofile;