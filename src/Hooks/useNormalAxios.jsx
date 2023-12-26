import axios from "axios";

 const normalAxios=axios.create({
    baseURL:'http://localhost:5000'
 })

const useNormalAxios = () => {
    return normalAxios
};

export default useNormalAxios;