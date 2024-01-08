import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Spinner } from "flowbite-react";


const UserPrivateRoute = ({children}) => {
const location=useLocation()
const {user,loading}=useAuth()

 if(loading){
    return  <Spinner className="h-screen flex justify-center items-center" aria-label="Large spinner example" size="lg" />
 }

if(user){
    return children
}







    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default UserPrivateRoute;