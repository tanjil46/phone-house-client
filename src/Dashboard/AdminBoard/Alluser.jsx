import { useQuery } from "@tanstack/react-query";
import useNormalAxios from "../../Hooks/useNormalAxios";
import { Button, Card } from "flowbite-react";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { MdAdminPanelSettings } from "react-icons/md";

const Alluser = () => {

const normalAxios=useNormalAxios()



const{data:users=[]}=useQuery({
    queryKey:['users'],
    queryFn:async()=>{
      const res=await normalAxios.get('/users')
      return res.data
    }
  })
  

const giveRoleHandler=(user)=>{
normalAxios.patch(`/users/admin/${user?._id}`)
.then(res=>{
    console.log(res.data)
    if(res.data.modifiedCount>0){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user?.name} is Admin Now`,
            showConfirmButton: false,
            timer: 1500
          });
    }
})

}

















    return (
        <div>
          <Card className="max-w-sm">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        
        
        <p>Customer Role</p>
      </div>
     {
        users.map((user,idx)=> <div key={idx} className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img className="w-[90px] h-[70px] rounded-xl" src={user?.photo}></img>
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{user?.name}</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"><button className="">{user?.role=='admin'?<MdAdminPanelSettings></MdAdminPanelSettings>:<FaUser></FaUser>}</button>
              
              </div>
              <div className="">
            {
                user?.role==='admin'? '':<Button onClick={()=>giveRoleHandler(user)} gradientMonochrome="info">Give Role</Button>
            }
              </div>
            </div>
          </li>
         
        </ul>
      </div> )
     }
    </Card>  
        </div>
    );
};

export default Alluser;