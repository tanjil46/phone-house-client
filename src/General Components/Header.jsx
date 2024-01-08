import { Button,  Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import phoneLogo from '../img/phone-shop-logo-design-template-gadget-135331058.jpg'
import useAuth from '../Hooks/useAuth';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../Hooks/useCart';
import { useQuery } from '@tanstack/react-query';
import useNormalAxios from '../Hooks/useNormalAxios';
import { IoIosLogOut } from "react-icons/io";
import Swal from 'sweetalert2';
const Header = () => {
  const auth=useAuth()
  const{user,userLogOut}=auth
  const normalAxios=useNormalAxios()
const [carts]=useCart()


const{data:admins=[]}=useQuery({
  queryKey:['admin',user?.email],
  queryFn:async()=>{
    const res=await normalAxios.get(`/users/admin/${user?.email}`)
    return res.data
  }
})







 const logOut=()=>{
  userLogOut()
  .then(()=>{
Swal.fire(
  'success',
  'Successfully LogOut ',
  'success'
)
  })
  .catch(error=>console.log(error.message))
 }




    return (
        <div>
            <Navbar fluid rounded>
            <Navbar.Brand>
        <img src={phoneLogo} className="w-[70px]" alt="Phone logo" />

        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PHone House</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <div className="flex md:flex-row text-center flex-col items-center gap-4">
        <Link className='hover:border-b-2 hover:border-yellow-500' to='/' >Home</Link>
        <Link  className='hover:border-b-2 hover:border-yellow-500' to='/collection'>Collections</Link>
        <div className="indicator">
  <span className="indicator-item badge badge-secondary">{carts?.length}+</span> 
  <button className="text-xl btn"><FaShoppingCart></FaShoppingCart></button>
</div>

  
   
    
{
  user?'':<Link to='/login'>  <Button  gradientMonochrome="pink">Sign In</Button>
  </Link>
}
 


{
  user? <div className="dropdown">
  <div tabIndex={0} role="button" className=" m-1"><div className="avatar online placeholder">
  <div className="bg-neutral text-neutral-content rounded-full w-16">
    <img src={user?.photoURL}></img>
  </div>
</div></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 space-y-4 shadow bg-slate-500 rounded-box w-52">
    

  {
      admins.admin===true? <Link className='font-bold  text-white' to='/dashboard/admin'>Dashbaord</Link>:<Link fclassName='font-bold  text-white' to='/dashboard/profile'>Dashbaord</Link>
    }
   
 
  <button className='text-3xl mx-auto hover:bg-white hover:p-2 hover:rounded-md' onClick={logOut}>
 <IoIosLogOut></IoIosLogOut>

  </button>
   
 
   
  </ul>
</div>
  
  
  
:''}

        </div>
      </Navbar.Collapse>
    </Navbar> 
        </div>
    );
};

export default Header;

