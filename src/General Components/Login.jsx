import { Carousel } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import './login.css'
import iphone from '../img/apple-iphone-14-pro-max-1.jpg'
import realme from '../img/realme-c53-1.jpg'
import xaomi from '../img/Xiaomi-Redmi-Note-10-5G-Nighttime-Blue.jpg'
import galaxy from '../img/samsung-galaxy-note-10-plus.jpg' 
import poco from '../img/Xiaomi-Poco-F3-Deep-Ocean-Blue.jpg'
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import GoogleLogin from './GoogleLogin';
import Swal from 'sweetalert2';
const Login = () => {
    const { register, handleSubmit,reset } = useForm()
   
    const auth=useAuth()
    const{userSingIn}=auth
 const onSubmit=async(data)=>{
 const email=data.email
 const password=data.password

 userSingIn(email,password)
 .then((result)=>{
  console.log(result.user)
  reset()
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "SuccesFully Sing In",
    showConfirmButton: false,
    timer: 1500
  });
 })
.catch(error=>{
  console.log(error.message)
  Swal.fire({
    position: "top-end",
    icon: "error",
    title: `${error.message}`,
    showConfirmButton: false,
    timer: 1500
  });
})


 }








    return (
        <div className='flex  w-full bg-slate-700  my-12'>
            
   <div className="w-[50%] bg-white m-5">

   <Carousel>
        <div className="flex h-full items-center justify-center">
      <img className='w-[80%]' src={iphone}></img>
        </div>

        <div className="flex h-full items-center justify-center">
      <img className='w-[80%]' src={realme}></img>
        </div>
       < div className="flex h-full items-center justify-center">
      <img className='w-[80%]' src={xaomi}></img>
        </div>
        <div className="flex h-full items-center justify-center">
      <img className='w-[80%]' src={galaxy}></img>
        </div>
        <div className="flex h-full items-center justify-center">
      <img className='w-[80%]' src={poco}></img>
        </div>

      </Carousel>



   </div>



{/* SECOND DIV */}
<div className="w-[50%]  h-screen">
<p className="text-white family text-center my-6">Welcome To 
<br></br>Phone House</p>

<form onSubmit={handleSubmit(onSubmit)}>


<div className="flex flex-col  p-4 space-y-3">
   <span className="label-text font-bold text-slate-300">Your Email</span>
   <input  className='outline-none border-none '   type="text" {...register('email',{required:true})} placeholder="Your Email" required/>
    </div>

    
<div className="flex flex-col  p-4 space-y-3">
   <span className="label-text font-bold text-slate-300">Your Password</span>
   <input className='outline-none border-none'   type="password" {...register('password',{required:true})} placeholder="Your password" required/>
    </div>
    <label className="label">
            <a href="#" className="label-text-alt text-white link link-hover">Forgot password?</a>
          </label>
<div className="text-center">
    <button className='bg-slate-600 text-white font-bold p-2 rounded-2xl w-[120px] hover:bg-white hover:text-black' type='submit'>SING IN</button>
</div>
</form>

<div className="">
  <p className='text-white '>New Here! <Link className='text-lg text-blue-500' to='/resister'>Resister</Link></p>
</div>

<div className="">
  <GoogleLogin></GoogleLogin>
</div>
</div>









 


        </div>
    );
};

export default Login;