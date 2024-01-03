import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import phoneLogo from '../img/phone-shop-logo-design-template-gadget-135331058.jpg'
import useAuth from '../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import useCart from '../Hooks/useCart';

const Header = () => {
  const auth=useAuth()
  const{user,userLogOut}=auth

const [carts]=useCart()

console.log(carts)






 const logOut=()=>{
  userLogOut()
  .then(()=>{
toast.success('Successfully LogOut')
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
        <div className="flex items-center gap-4">
        <Link >Home</Link>
        <Link to='/collection'>Collections</Link>
        <button className="btn">
  My Cart
  
  <div className="badge badge-secondary">+{carts?.length}</div>
</button>
    
    <Link to='/dashboard'>Dashbaord</Link>
    
    <Link  >Contact Us</Link>
    
{
  user?
  <Button onClick={logOut} gradientDuoTone="greenToBlue">SING OUT</Button>:<Link to='/login'>  <Button  gradientMonochrome="pink">Sign In</Button>
  </Link>
}
<Toaster/>
{
  user? <div className="avatar online placeholder">
  <div className="bg-neutral text-neutral-content rounded-full w-16">
    <img src={user?.photoURL}></img>
  </div>
</div> 
:''}

        </div>
      </Navbar.Collapse>
    </Navbar> 
        </div>
    );
};

export default Header;