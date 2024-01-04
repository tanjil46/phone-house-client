import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useNormalAxios from "../../Hooks/useNormalAxios";
import { useParams } from "react-router-dom";


const Replay = () => {
const{user}=useAuth()
const normalAxios=useNormalAxios()
const {messengerEmail}=useParams()

const formHandler=e=>{
    e.preventDefault()
    const adminName=e.target.name.value 
   const toEmail=e.target.toEmail.value
    const replay=e.target.message.value
    const date=e.target.date.value
    const adminImage=user?.photoURL
    const adminId=user?.reloadUserInfo.createdAt
    const replayInfo={
        adminName,date,adminImage,adminId,replay,toEmail
    }
    
 
    normalAxios.post('/replay',replayInfo)
    .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
            
            Swal.fire(
                'success',
                'Replay Succesfully sent',
                'success'
            )
        }
       
    })
    
    
    
    
    }


    return (
        <div>
             <div className="my-4">
           <form  onSubmit={formHandler} className="max-w-3xl mx-auto my-12">

<div className="form-control w-full my-6">
<label className="label">
<span className=" font-bold">Admin Name</span>

</label>
<input  type="text" name="name" defaultValue={user?.displayName} className="input  input-bordered input-primary w-full " />

</div>

<div className="form-control w-full my-6">
<label className="label">
<span className=" font-bold">Date</span>

</label>
<input  type="date" name="date"  className="input  input-bordered input-primary w-full " />

</div>




<div className="form-control w-full my-6">
<label className="label">
<span className=" font-bold">To</span>

</label>
<input  type="email" name="toEmail" defaultValue={messengerEmail}  className="input  input-bordered input-primary w-full " />

</div>



<div className="form-control">
<label className="label">
<span className=" font-bold">Admin Replay</span>

</label>
<textarea name="message" placeholder="Exaplain Your Problem" className="textarea textarea-bordered h-24" ></textarea>

</div>

<button type="submit" className="btn bg-pink-600 font-bold text-white hover:bg-slate-500 input  input-bordered input-primary w-full my-6">Send</button>



</form>
            </div> 
        </div>
    );
};

export default Replay;