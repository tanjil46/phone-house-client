import { useQuery} from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useNormalAxios from "../../Hooks/useNormalAxios";
import { FaMobile, FaRegMessage, FaUsers } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { Progress } from "flowbite-react";

const AdminDashboard = () => {
const {user}=useAuth()
const normalAxios=useNormalAxios()

    const{data:adminStats=[]}=useQuery({
        queryKey:['admin'],
        queryFn:async()=>{
          const res=await normalAxios.get('/admin-stats')
          return res.data
        }
      })




console.log(adminStats)



const phoneSalesPercentage=parseInt(adminStats?.totalPayments*100/adminStats?.totalPhone)
const userBuyPhonePercentage=parseInt(adminStats?.totalPayments*100/adminStats?.totalUser)

console.log(phoneSalesPercentage,userBuyPhonePercentage)




    return (
        <div>
            
            <div className="flex md:flex-row flex-col items-center gap-2">

            <div className="bg-teal-400 md:w-[180px] w-[270px] h-[170px] my-3 rounded-md md:h-[130px] space-y-3">
              <p className="text-2xl bg-white w-[50px] p-2 rounded-md mx-auto"><FaUsers className=" mx-auto "></FaUsers></p>
               <p className="text-center text-sm font-bold">Total Users</p>
               <p className="text-center text-lg font-bold">{adminStats?.totalUser}</p>
            </div>


            <div className="bg-orange-400 md:w-[180px] w-[270px] h-[170px]  my-3 rounded-md md:h-[130px] space-y-3">
              <p className="text-2xl bg-white w-[50px] p-2 rounded-md mx-auto"><FaMobile className=" mx-auto "></FaMobile></p>
               <p className="text-center text-sm font-bold">Total Phones</p>
               <p className="text-center text-lg font-bold">{adminStats?.totalPhone}</p>
            </div>



            <div className="bg-green-400 md:w-[180px] w-[270px] h-[170px] my-3 rounded-md md:h-[130px] space-y-3">
              <p className="text-2xl bg-white w-[50px] p-2 rounded-md mx-auto"><FaRegMessage className=" mx-auto "></FaRegMessage></p>
               <p className="text-center text-sm font-bold">Total Messages</p>
               <p className="text-center text-lg font-bold">{adminStats?.totalMessage}</p>
            </div>




            <div className="bg-lime-400 md:w-[180px] w-[270px] h-[170px] my-3 rounded-md md:h-[130px] space-y-3">
              <p className="text-2xl bg-white w-[50px] p-2 rounded-md mx-auto"><MdOutlinePayment className=" mx-auto "></MdOutlinePayment></p>
               <p className="text-center text-sm font-bold">Total Payments</p>
               <p className="text-center text-lg font-bold">{adminStats?.totalPayments}</p>
            </div>





            <div className="bg-fuchsia-400 md:w-[180px] w-[270px] h-[170px] my-3 rounded-md md:h-[130px] space-y-3">
              <p className="text-2xl bg-white w-[50px] p-2 rounded-md mx-auto"><FaMoneyBill className=" mx-auto "></FaMoneyBill></p>
               <p className="text-center text-sm font-bold">Revenue</p>
               <p className="text-center text-lg font-bold">{adminStats?.totalMoney}$</p>
            </div>


            </div>



               <div className="my-5 space-y-6">

              
                   
                    <div className="text-base font-medium text-yellow-700">Phone sell Percentage {phoneSalesPercentage}</div>
      <Progress progress={phoneSalesPercentage} color="yellow" />
                
               



      <div className="text-base font-medium text-cyan-700">User Buy Phone Percentage {userBuyPhonePercentage}</div>
      <Progress progress={userBuyPhonePercentage} color="cyan" />





               </div>




               <div className="stats bg-amber-400 text-primary-content my-8">
  
  <div className="stat">
    <div className="stat-title">Account balance</div>
    <div className="stat-value">{adminStats?.totalMoney}</div>
    <div className="stat-actions">
      <button className="btn btn-sm btn-success">Add funds</button>
    </div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Current balance</div>
    <div className="stat-value">{adminStats?.totalMoney}</div>
    <div className="stat-actions space-x-3">
      <button className="btn btn-sm">Withdrawal</button> 
      <button className="btn btn-sm">deposit</button>
    </div>
  </div>
  
</div>




        </div>
    );
};

export default AdminDashboard;