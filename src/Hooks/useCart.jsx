import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useNormalAxios from "./useNormalAxios";


const useCart = () => {
    const normalAxios=useNormalAxios()
    const {user}=useAuth()


    const {refetch,data:carts=[],}=useQuery({
        queryKey:['carts',user?.email],
        queryFn:async()=>{
            const res=await normalAxios.get(`/carts/${user?.email}`)
            return res.data 
        }
    })

    return [carts,refetch]
}
export default useCart;