import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useNormalAxios from "../../Hooks/useNormalAxios";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";


const Allreplay = () => {
const {user}=useAuth()
const normalAxios=useNormalAxios()
const [openModal, setOpenModal] = useState(false);



const{data:replays=[]}=useQuery({
    queryKey:['replays'],
    queryFn:async()=>{
      const res=await normalAxios.get('/replay')
      return res.data
    }
  })

  console.log(replays)

const findTheUser=replays.filter(replay=>replay.toEmail===user?.email)

console.log(findTheUser)





    return (
        <div>
            <p className="md:text-2xl font-bold text-center my-4">Your Replay</p>
            <div  className="my-4">
               {
                findTheUser.map((find,idx)=> <div key={idx} className="">
<div className="bg-gradient-to-t from-cyan-500 to-blue-500 p-4 my-5 rounded-xl text-white " onClick={() => setOpenModal(true)}>
 <p className="text-xl font-bold">A message Come From {find?.adminName}</p>

</div>
                <Modal  show={openModal} onClose={() => setOpenModal(false)}>
                  <Modal.Header>Terms of Service</Modal.Header>
                  <Modal.Body>
                    <div className="space-y-6">
                        <div className="">
                            <p>Date:{find?.date==true?find?.date:'2 Days Ago'}</p>
                     <p>From:{find?.adminId}</p>
                    
                     </div>

                     <div className="">
                        <p>Dear {user?.displayName}</p>
                        <p className="text-lg font-bold">{find?.replay}</p>
                     </div>



                      <div className="">
                        <p>Thanks for your Message.We will Looking forworad To your problem</p>
                        <p>Your Sincerly,</p>
                         <p>{find?.adminName}</p>
                      </div>





                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                  
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal> 


                </div> )
               }

            </div>
        </div>
    );
};

export default Allreplay;