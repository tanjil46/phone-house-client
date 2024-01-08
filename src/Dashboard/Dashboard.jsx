import { Sidebar } from "flowbite-react";
import {  HiChartPie, HiInbox, HiShoppingBag, HiUser } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import useCart from "../Hooks/useCart";
import { FaHistory, FaHome, FaReply} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6"
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../img/phone-shop-logo-design-template-gadget-135331058.jpg'
import useNormalAxios from "../Hooks/useNormalAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
const Dashboard = () => {
  const[carts]=useCart()
  const normalAxios=useNormalAxios()
const {user}=useAuth()

  const{data:admins=[]}=useQuery({
    queryKey:['admin',user?.email],
    queryFn:async()=>{
      const res=await normalAxios.get(`/users/admin/${user?.email}`)
      return res.data
    }
  })










const admin=admins.admin



const{data:messages=[]}=useQuery({
  queryKey:['message'],
  queryFn:async()=>{
    const res=await normalAxios.get('/message')
    return res.data
  }
})



const{data:replays=[]}=useQuery({
  queryKey:['replays'],
  queryFn:async()=>{
    const res=await normalAxios.get('/replay')
    return res.data
  }
})







    return (
        <div>
           
            <div className="md:grid md:grid-cols-12 flex flex-col items-center justify-center">
          <div className="md:col-span-3  ">
          <div className="">
              <img className="w-[180px]" src={logo}></img>
            </div>
          {
             admin?<Sidebar aria-label="Default sidebar example">
             <Sidebar.Items>
               <Sidebar.ItemGroup>
                 <Sidebar.Item href="#" icon={HiChartPie}>
                 <NavLink
  to='/dashboard/admin'
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-500 p-2 font bold rounded-xl text-white" : ""
  }
>
  Dashboard
</NavLink>
            
                 </Sidebar.Item>
                 
                 <Sidebar.Item href="#" icon={HiInbox} label={messages?.length}>
                 <NavLink
  to='/dashboard/inbox'
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-500 p-2 font bold rounded-xl text-white" : ""
  }
>
  Inbox
</NavLink>
            
                 </Sidebar.Item>
                 <Sidebar.Item href="#" icon={HiUser}>
                 <NavLink
  to='/dashboard/users'
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-500 p-2 font bold rounded-xl text-white" : ""
  }
>
  All Users
</NavLink>
            
                 </Sidebar.Item>
                 <Sidebar.Item href="#" icon={HiShoppingBag}>
          <NavLink
  to='/dashboard/product'
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-500 p-2 font bold rounded-xl text-white" : ""
  }
>
  Add Product
</NavLink>
                 </Sidebar.Item>
                
               </Sidebar.ItemGroup>
             </Sidebar.Items>
           </Sidebar>:<Sidebar aria-label="Default sidebar example">
             <Sidebar.Items>
               <Sidebar.ItemGroup>
                 <Sidebar.Item href="#" icon={CgProfile}>
                
<NavLink
  to="/dashboard/profile"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-500 p-2 font bold rounded-xl text-white" : ""
  }
>
  Profile
</NavLink>
                 </Sidebar.Item>
               
                 <Sidebar.Item href="#" icon={HiInbox} label={carts?.length}>

                 <NavLink
  to='/dashboard/cart'
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-500 p-2 font bold rounded-xl text-white" : ""
  }
>
  My Cart
</NavLink>

                   
                 </Sidebar.Item>
                 <Sidebar.Item href="#" icon={FaHistory}>
                 <NavLink
  to='/dashboard/history'
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-500 p-2 font bold rounded-xl text-white" : ""
  }
>
 Payment History
</NavLink>
                 </Sidebar.Item>
                 <Sidebar.Item href="#" icon={FaMessage} >
                 
                 <NavLink
  to='/dashboard/message'
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-500 p-2 font bold rounded-xl text-white" : ""
  }
>
  Meesage Us
</NavLink>
                 </Sidebar.Item>
                





                 <Sidebar.Item href="#" icon={FaReply} label={replays?.length} >
                 
                 <NavLink
  to='/dashboard/adminReplay'
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-500 p-2 font bold rounded-xl text-white" : ""
  }
>
 Admin Replay
</NavLink>
                 </Sidebar.Item>
                





               </Sidebar.ItemGroup>
             </Sidebar.Items>
           </Sidebar>



          } 
          
            <Link className="flex items-center my-4 text-2xl " to='/'><FaHome></FaHome><p>Home</p></Link>
         
          </div>
         
          <div className="md:col-span-9">
            <Outlet></Outlet>
          </div>
          </div>
        </div>
    );
};

export default Dashboard;