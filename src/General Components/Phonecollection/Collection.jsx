import { useQuery } from "@tanstack/react-query";
import useNormalAxios from "../../Hooks/useNormalAxios";
import Title from "../Title";
import { useEffect, useState } from "react";
import ShowCollections from "./ShowCollections";


const Collection = () => {
const normalAxios=useNormalAxios()
const[inputValues,setInputValues]=useState('')
const [matchValues,setMatchValues]=useState([])
const {data:phones=[]}=useQuery({
    queryKey:['phones'],
    queryFn:async()=>{
        const res=await normalAxios.get('/phones')
        return res.data
    }
})


console.log(inputValues)


useEffect(()=>{

    const findTheValue=phones.filter(phone=>phone.brand_name.includes(inputValues))

 setMatchValues(findTheValue)




},[inputValues,phones])

console.log(matchValues)

    return (
        <div>
          <Title heading={'Get The '} subHeading={'Lateast Collections'}></Title>
          <div className="my-5">
 
          <input onChange={(e)=>setInputValues(e.target.value)} className="py-2 px-10 w-full outline-none border-b-4  border-red-500" type="text"  placeholder="Your Post" ></input> 
 <button   className="btn my-3 btn-error">Search</button>




          </div>


<div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 my-7">
    {
        matchValues.map((phone,idx)=><ShowCollections key={idx} phone={phone}></ShowCollections>)
    }
</div>


        </div>
    );
};

export default Collection;