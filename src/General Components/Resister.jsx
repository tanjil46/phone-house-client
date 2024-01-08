
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import useNormalAxios from "../Hooks/useNormalAxios";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const bbImage_hosting_key='6d2bae620663c80614c87636edfc98c3';
const bbImage_hosting_api=`https://api.imgbb.com/1/upload?key=${bbImage_hosting_key}`
const Resister = () => {
    const { register, handleSubmit,reset } = useForm()
    const normalAxios=useNormalAxios()
    const auth=useAuth()
    const {profileUser,createUser}=auth



    const onSubmit=async(data)=>{
        const imageUrl={image:data.photo[0]}
      
        const res=await normalAxios.post(bbImage_hosting_api,imageUrl,{
          headers:{
            'content-Type':'multipart/form-data'
          }
          
        })


  const name=data.name 
  const photo=res.data.data.display_url
  const email=data.email 
  const password=data.password

const userInfo={name,photo,email}

console.log(userInfo)


if(password.length<6){
    return Swal.fire(
        'Warning!',
        'Your Password Must be  Minimum Six characters',
        'warning'
    ) 
    }
    else if(!/[A-Z]/.test(password)){
        return Swal.fire(
            'Warning!',
            'There Must Be a Capital latter',
            'warning'
        )

  
    }
    else if(!/[@$!%*?&]/.test(password)){
        return Swal.fire(
            'Warning!',
            'There Must Be a Special latter',
            'warning'
        )

        


    }
    

createUser(email,password)
.then((result)=>{
    console.log(result)


profileUser(name,photo)
.then((result)=>{
    console.log(result)
  normalAxios.post('/users',userInfo)
  .then(res=>{
    console.log(res.data)
     
if(res.data.insertedId){
    reset()
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "SuccesFully Sing Up",
        showConfirmButton: false,
        timer: 1500
      });
    }
  })

  


})




}).catch(error=>{
    console.log(error.message)
})




    }
    
      
      

    return (
        <div className='flex  w-full my-12'>
            
   <div className="w-[50%] bg-white m-5">

<div className="bg-gradient-to-t from-pink-500 to-fuchsia-500 h-screen" >




<div className="text-center space-y-5 py-10">
 <h1 className="text-5xl text-cyan-500">LIVING</h1> 
 <h1 className="text-5xl text-green-500">LIFE</h1> 
 <h1 className="text-5xl text-yellow-500">ON THE </h1> 
 <h1 className="text-5xl text-teal-500">EDGE</h1> 
 </div>
 
 
 
 
 


</div>
 

   </div>



{/* SECOND DIV */}
<div className="w-[50%]  h-screen">
<p className="text-slate-700 family text-center my-6">Welcome To 
<br></br>Phone House</p>

<form onSubmit={handleSubmit(onSubmit)}>

<div className="flex flex-col  p-4 space-y-3">
   <span className="label-text font-bold ">Your Name</span>
   <input  className='outline-none border-none '   type="text" {...register('name',{required:true})} placeholder="Name" required/>
    </div>

<div className="flex flex-col  p-4 space-y-3">
   <span className="label-text font-bold ">Your Email</span>
   <input  className='outline-none border-none '   type="text" {...register('email',{required:true})} placeholder="Your Email" required/>
    </div>



    <div className="flex flex-col  p-4 space-y-3">
   <span className="label-text font-bold ">Your Photo</span>
   <input type="file" {...register('photo',{required:true})}  className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
    </div>


    
<div className="flex flex-col  p-4 space-y-3">
   <span className="label-text font-bold ">Your Password</span>
   <input className='outline-none border-none'   type="password" {...register('password',{required:true})} placeholder="Your password" required/>
    </div>
   

<div className="text-center">
    <button className='bg-slate-600 text-white font-bold p-2 rounded-2xl w-[120px] hover:bg-white hover:text-black' type='submit'>SING IN</button>
</div>
</form>

<div className="">
  <p className='text-black '>Have an Account! <Link className='text-lg text-blue-500' to='/login'>Login</Link></p>
</div>


</div>









 


        </div>
    );
};

export default Resister;