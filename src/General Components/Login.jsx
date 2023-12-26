import { Carousel } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import './login.css'
import iphone from '../img/apple-iphone-14-pro-max-1.jpg'
import realme from '../img/realme-c53-1.jpg'
import xaomi from '../img/Xiaomi-Redmi-Note-10-5G-Nighttime-Blue.jpg'
import galaxy from '../img/samsung-galaxy-note-10-plus.jpg' 
import poco from '../img/Xiaomi-Poco-F3-Deep-Ocean-Blue.jpg'
const Login = () => {
    const { register, handleSubmit,reset } = useForm()

 const onSubmit=async(data)=>{

 }








    return (
        <div className='flex  w-full bg-slate-700  my-12'>
            
   <div className="w-[50%] bg-white m-5">

   <Carousel>
        <div className="flex h-full items-center justify-center">
      <img className='w-[90%]' src={iphone}></img>
        </div>

        <div className="flex h-full items-center justify-center">
      <img className='w-[90%]' src={iphone}></img>
        </div>
       < div className="flex h-full items-center justify-center">
      <img className='w-[90%]' src={iphone}></img>
        </div>
        <div className="flex h-full items-center justify-center">
      <img className='w-[90%]' src={iphone}></img>
        </div>
        <div className="flex h-full items-center justify-center">
      <img className='w-[90%]' src={iphone}></img>
        </div>

      </Carousel>



   </div>



{/* SECOND DIV */}
<div className="w-[50%]  h-screen">
<p className="text-black family text-center my-6">Welcome To Phone House</p>

<form onSubmit={handleSubmit(onSubmit)}>


<div className="flex flex-col  p-4 space-y-3">
   <span className="label-text font-bold text-slate-900">Your Email</span>
   <input  className='outline-none border-none '   type="text" {...register('email',{required:true})} placeholder="Your Email" required/>
    </div>

    
<div className="flex flex-col  p-4 space-y-3">
   <span className="label-text font-bold text-slate-900">Your Password</span>
   <input className='outline-none border-none'   type="text" {...register('email',{required:true})} placeholder="Your Email" required/>
    </div>
    <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
<div className="text-center">
    <button className='bg-slate-600 text-white font-bold p-2 rounded-2xl w-[120px]' type='submit'>SING IN</button>
</div>
</form>



</div>












        </div>
    );
};

export default Login;