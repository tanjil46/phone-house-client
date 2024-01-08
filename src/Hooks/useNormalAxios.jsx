import axios from "axios";

 const normalAxios=axios.create({
    baseURL:'https://phone-server-seven.vercel.app'
 })

const useNormalAxios = () => {
    return normalAxios
};

export default useNormalAxios;