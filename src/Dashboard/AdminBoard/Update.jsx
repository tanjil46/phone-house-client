import { useForm } from "react-hook-form";
import useNormalAxios from "../../Hooks/useNormalAxios";
import Title from "../../General Components/Title";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


const bbImage_hosting_key='6d2bae620663c80614c87636edfc98c3';
const bbImage_hosting_api=`https://api.imgbb.com/1/upload?key=${bbImage_hosting_key}`
const Update = () => {

    const { register, handleSubmit,reset } = useForm()
    const normalAxios=useNormalAxios()
   const {id}=useParams()





    const{data:phones=[]}=useQuery({
        queryKey:['phones'],
        queryFn:async()=>{
          const res=await normalAxios.get('/phones')
          return res.data
        }
      })

const matchTheId=phones.find(phone=>phone._id===id)



  









    const onSubmit=async(data)=>{
        const imageUrl={image:data.image[0]}
            
        const res=await normalAxios.post(bbImage_hosting_api,imageUrl,{
          headers:{
            'content-Type':'multipart/form-data'
          }
          
        })
      const image=res.data.data.image.url
      const phone_name=data.name 
      const brand_name=data.brand 
      const price=data.price 
      const rating=data.rating 
      const displaySize=data.display 
      const storage=data.storage 
      const sensors=data.sensors 
      const release_date=data.date
      const bluetooth=data.bluetooth
      const usb=data.usb 
      const android_version=data.version
      
      const updatePhoneInfo={image,phone_name,brand_name,price,rating,displaySize,storage,sensors,release_date,bluetooth,usb,android_version}

 normalAxios.put(`/phones/${matchTheId?._id}`,updatePhoneInfo)
 .then(res=>{
    console.log(res.data)
 })





    }


    return (
        <div>
        <Title heading={'Hello Admin'} subHeading={'Update Your Mobile Info'}></Title>
        <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
  
  <div className="flex gap-4">

  <div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Phone Name*</span>

</label>
<input {...register('name',{required:true})} defaultValue={matchTheId?.phone_name} type="text" placeholder="Phone name" className="input input-bordered w-full " />

</div>




  <div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Rating*</span>

</label>
<input {...register('rating',{required:true})} defaultValue={matchTheId?.rating} type="text" placeholder="Rating" className="input input-bordered w-full " />

</div>



</div>


<div className="flex gap-4">

<div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Brand Name*</span>

</label>


<select  {...register('brand',{required:true} )} defaultValue={matchTheId?.brand_name}    className="select select-bordered w-full ">
<option disabled value='default'>Selete A category</option>
<option value="apple">Apple</option>
<option value="realme">Realme</option>
<option value="galaxy">Galaxy</option>
<option value="poco">Poco</option>
<option value="oneplus">One Plus</option>
</select> 

</div>




<div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Price*</span>

</label>
<input {...register('price',{required:true})} type="number" defaultValue={matchTheId?.price}   placeholder="Price" className="input input-bordered w-full " />

</div>











</div>







<div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Release Date*</span>

</label>
<input {...register('date',{required:true})} type="date" defaultValue={matchTheId?.release_date}   placeholder="date" className="input input-bordered w-full " />

</div>













<div className="my-6">

<input type="file" {...register('image',{required:true} )} defaultValue={matchTheId?.image}   className="file-input file-input-bordered w-full max-w-xs" />


</div>



<div className="flex gap-4">



<div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Disaplay Size*</span>

</label>
<input {...register('display',{required:true})} type="text" defaultValue={matchTheId?.displaySize}   placeholder="Display Size" className="input input-bordered w-full " />

</div>



<div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Storage*</span>

</label>
<input {...register('storage',{required:true})} type="text" defaultValue={matchTheId?.storage}   placeholder="Storage" className="input input-bordered w-full " />

</div>
</div>



<div className="flex gap-4">



<div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Sensors*</span>

</label>
<input {...register('sensors',{required:true})} defaultValue={matchTheId?.sensors}   type="text" placeholder="Mobile Sensors" className="input input-bordered w-full " />

</div>



<div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Bluetooth*</span>

</label>
<input {...register('bluetooth',{required:true})} defaultValue={matchTheId?.bluetooth}   type="text" placeholder="Bluetooth" className="input input-bordered w-full " />

</div>
</div>




<div className="flex gap-4">



<div className="form-control w-full my-6">
<label className="label">
<span className="label-text">USB*</span>

</label>
<input {...register('usb',{required:true})} type="text" defaultValue={matchTheId?.usb}   placeholder="Usb" className="input input-bordered w-full " />

</div>



<div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Android Version*</span>

</label>
<input {...register('version',{required:true})} type="text" defaultValue={matchTheId?.android_version}   placeholder="version" className="input input-bordered w-full " />

</div>
</div>




<div className="my-4 text-center">
<button className="btn  bg-slate-500" type="submit">Update Item</button>

</div>

 
</form>
        </div>
    </div>
    );
};

export default Update;