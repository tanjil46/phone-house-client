import { Button } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useNormalAxios from "../Hooks/useNormalAxios";

const GoogleLogin = () => {


     const location=useLocation()
     const navigate=useNavigate()
    const{googleLogIn}=useAuth()
   
    const normalAxios=useNormalAxios()
        const googleLogInHanler=()=>{
    
            googleLogIn()
            .then((result)=>{
              console.log(result.user)
              const userInfo={
                email:result.user.email,
                name:result.user.displayName,
                photo:result.user.photoURL
              }
    
            normalAxios.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
            })
    
    
            navigate(location?.state?location.state:'/')
    
    
            })
            .catch(error=>console.log(error.message))
            
            
            }
    







    return (
        <div className="my-8 ">
            <Button onClick={googleLogInHanler} className="text-xl text-center">
        <FaGoogle className="text-xl"></FaGoogle>
        Sing In With Google
      </Button>
        </div>
    );
};

export default GoogleLogin;