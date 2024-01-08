import { useQuery } from "@tanstack/react-query";
import useNormalAxios from "../../../Hooks/useNormalAxios";
import useAuth from "../../../Hooks/useAuth";


const PaymentHistory = () => {
const normalAxios=useNormalAxios()
const{user}=useAuth()

    const{data:paymnets=[]}=useQuery({
        queryKey:['payments',user?.email],
        queryFn:async()=>{
          const res=await normalAxios.get(`/payment/${user.email}`)
          return res.data
        }
      })

console.log(paymnets)



    return (
        <div>
            <p className="md:text-2xl text-center font-bold my-4">Your Transition History</p>
            <div className="">
                {
                   paymnets.map((pay,idx)=> <div key={idx} className="bg-slate-500 w-[450px] mx-auto md:w-full p-6 rounded-lg flex items-center justify-between">
                   
                   <div className="space-y-3">
                    <p className="text-white md:text-xl text-sm font-bold">Total Amount:{pay?.totalAmount}</p>
            <p className="md:text-xl text-sm font-bold text-white">Transitions Id:<span className="md:text-2xl text-green-500 text-sm">{pay?.transitionId}</span></p>
                   </div>
                  
                 <p className="text-white md:text-xl text-sm ">{pay?.date}</p>


                   </div> )
                }
            </div>

            
        </div>
    );
};

export default PaymentHistory;