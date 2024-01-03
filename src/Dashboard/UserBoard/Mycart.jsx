
import { FaTrash } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import { Link } from "react-router-dom";
import useNormalAxios from "../../Hooks/useNormalAxios";
import Swal from "sweetalert2";





const Mycart = () => {
 const[carts,refetch]=useCart()
const normalAxios=useNormalAxios()

const totalPrice=carts.reduce((prevPrice,currentPrice)=>prevPrice+currentPrice.phonePrice, 0)
const totalPriceNumber=parseInt(totalPrice)
const atLastPrice=totalPriceNumber-120;

const deleteCartHandler=(cart)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            normalAxios.delete(`/carts/${cart._id}`)
            .then(res=>{
                console.log(res.data)
                if(res.data.deletedCount>0){
refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
                }
            })


        }
      })








     


   
    


}









    return (
        <div>
            <p className="text-center my-8 text-3xl font-bold">Your cart({carts?.length} Items)</p>
           
           <div className="">
            {
                carts.map((cart,idx)=> <div key={idx} className="flex   my-4 justify-between items-center rounded-xl w-full bg-gradient-to-t from-pink-500 to-orange-500 p-4"data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500" >

               <img className="w-[90px] rounded-lg" src={cart?.phoneImage}></img>
               <div className="">
                <p className="md:text-2xl font-bold">{cart?.phoneName}</p>
                <p className="md:text-2xl font-bold">{cart?.brandName}</p>
               </div>
                
                <h1 className="md:text-2xl font-bold " >{cart?.phonePrice}$</h1>
              

                <button onClick={()=>deleteCartHandler(cart)} className="text-xl"><FaTrash></FaTrash></button> 

                </div> )
            }
           </div>
           
<div className="text-end space-y-5 my-4">
<p className="text-xl font-bold">SubTotal:{totalPriceNumber}$</p>
<p className="text-xl font-bold">Online Tax:120$</p>
<p className="text-xl font-bold"> OverallPrice:{atLastPrice}$</p>
<div className="">
    <Link className="btn bg-slate-500 hover:bg-gradient-to-tr from-pink-500 to-purple-500" >CHECK OUT</Link>
</div>
</div>


        </div>
    );
};

export default Mycart;