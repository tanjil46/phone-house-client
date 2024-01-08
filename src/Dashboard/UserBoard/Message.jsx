import Swal from "sweetalert2";
import Title from "../../General Components/Title";
import useAuth from "../../Hooks/useAuth";
import useNormalAxios from "../../Hooks/useNormalAxios";
import { useNavigate } from "react-router-dom";


const Message = () => {
const{user}=useAuth()
const normalAxios=useNormalAxios()
const navigate=useNavigate()
const formHandler=e=>{
e.preventDefault()
const messagerName=e.target.name.value 
const messengerEmail=e.target.email.value 
const message=e.target.message.value
const dateTime=e.target.date.value
const userImage=user?.photoURL
const messageInfo={
    messagerName,messengerEmail,message,dateTime,userImage
}

normalAxios.post('/message',messageInfo)
.then(res=>{
    console.log(res.data)
    if(res.data.insertedId){
        
        Swal.fire(
            'success',
            'Message Succesfully sent',
            'success'
        )
    }
    navigate('/dashboard/message')
})




}

    return (
        <div>
            <Title  heading={'Need Help!'} subHeading={'Meesage Us'}></Title>
           <div className="my-4">
           <form  onSubmit={formHandler} className="max-w-3xl mx-auto my-12">

<div className="form-control w-full my-6">
<label className="label">
<span className=" font-bold">Your Name</span>

</label>
<input  type="text" name="name" defaultValue={user?.displayName} className="input  input-bordered input-primary w-full " />

</div>

<div className="form-control w-full my-6">
<label className="label">
<span className=" font-bold">Date</span>

</label>
<input  type="datetime-local" name="date"  className="input  input-bordered input-primary w-full " />

</div>
<div className="form-control w-full my-6">
<label className="label">
<span className=" font-bold">Your Email</span>

</label>
<input   type="email" name="email" defaultValue={user?.email} className="input  input-bordered input-primary w-full " />

</div>





<div className="form-control">
<label className="label">
<span className=" font-bold">Your Message</span>

</label>
<textarea name="message" placeholder="Exaplain Your Problem" className="textarea textarea-bordered h-24" ></textarea>

</div>

<button type="submit" className="btn bg-pink-600 font-bold text-white hover:bg-slate-500 input  input-bordered input-primary w-full my-6">Send</button>



</form>
            </div> 
        </div>
    );
};

export default Message;