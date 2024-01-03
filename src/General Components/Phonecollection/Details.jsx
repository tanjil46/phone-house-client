
import { useEffect, useState } from "react";
import useNormalAxios from "../../Hooks/useNormalAxios";
import { Link, useParams } from "react-router-dom";
import Title from "../Title";
import { Button, Table } from "flowbite-react";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { RxUpdate } from "react-icons/rx";

const Details = () => {
const normalAxios=useNormalAxios()
const[phones,setPhones]=useState([])
const{id}=useParams()
const{user}=useAuth()
useEffect(()=>{
normalAxios.get('/phones')
.then(res=>setPhones(res.data))


},[normalAxios])


const findSameId=phones.find(phone=>phone._id===id)
console.log(findSameId)


const{data:admins=[]}=useQuery({
  queryKey:['admin',user?.email],
  queryFn:async()=>{
    const res=await normalAxios.get(`/users/admin/${user?.email}`)
    return res.data
  }
})

const cartHandler=(findSameId)=>{


    const cartInfo={
        phoneName:findSameId?.phone_name,
        brandName:findSameId?.brand_name,
        phoneImage:findSameId?.image,
        phonePrice:findSameId?.price,
        phoneId:findSameId?._id,
        email:user?.email
    }

    normalAxios.post('/carts',cartInfo)
    .then(res=>{
       console.log(res.data)
       if(res.data.insertedId){
           Swal.fire({
               position: "top-end",
               icon: "success",
               title: `${findSameId?.phone_name} successfully added`,
               showConfirmButton: false,
               timer: 2500
             }); 
       }
    })



}













    return (
        <div>
            <Title heading={'Get Your'}subHeading={'Own Phone'} ></Title>
          <div className="my-8 p-12">
            <img className="md:w-[800px] w-[full] mx-auto" src={findSameId?.image}></img>
          </div>
          <div className="">
            <h1 className="text-bold md:text-5xl  text-center">{findSameId?.phone_name} full Specifications</h1>
            <Table striped>
       
            
      
        <Table.Body className="divide-y text-center">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
           Realease Date
          </Table.Cell>
            <Table.Cell>   {findSameId?.release_date }</Table.Cell>
           
          
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             Brand Name
            </Table.Cell>
            <Table.Cell>{findSameId?.brand_name}</Table.Cell>
           
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Price</Table.Cell>
            <Table.Cell>{findSameId?.price}$</Table.Cell>
           
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
           DisplaySize
            </Table.Cell>
            <Table.Cell>{findSameId?.displaySize}</Table.Cell>
            
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Storage</Table.Cell>
            <Table.Cell>{findSameId?.storage}</Table.Cell>
           
          </Table.Row>


        
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Sensors</Table.Cell>
            <Table.Cell>{findSameId?.sensors}</Table.Cell>
           
          </Table.Row>



        
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Bluetooth</Table.Cell>
            <Table.Cell>{findSameId?.bluetooth}</Table.Cell>
           
          </Table.Row>


        
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">USB</Table.Cell>
            <Table.Cell>{findSameId?.usb}</Table.Cell>
           
          </Table.Row>


        
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Android Version</Table.Cell>
            <Table.Cell>{findSameId?.android_version?findSameId?.android_version:'11'}</Table.Cell>
           
          </Table.Row>
        </Table.Body>
      </Table>
          </div>
          <div className="my-10 flex">
          {
            admins.admin==true?
            <Link to={`/update/${findSameId?._id}`} className="mx-auto"> <Button outline gradientDuoTone="cyanToBlue" className="">
              <RxUpdate></RxUpdate>
               Update Now
             </Button></Link>:
          <Button onClick={()=>cartHandler(findSameId)} outline gradientDuoTone="greenToBlue" className="mx-auto">
         <FaShoppingCart></FaShoppingCart>
        Add To Cart
      </Button>

          }





          </div>
        </div>
    );
};

export default Details;