import { useQuery } from "@tanstack/react-query";
import useNormalAxios from "../../Hooks/useNormalAxios";
import Title from "../../General Components/Title";
import { Button, Card, Dropdown,  Modal } from "flowbite-react";
import { useState } from "react";

import Swal from "sweetalert2";
import { Link} from "react-router-dom";


const Inbox = () => {
const normalAxios=useNormalAxios()

const [openModal, setOpenModal] = useState(false);


    const{data:messages=[],refetch}=useQuery({
        queryKey:['messages'],
        queryFn:async()=>{
          const res=await normalAxios.get('/message')
          return res.data
        }
      })



   const deleteHandler=(mess)=>{
    normalAxios.delete(`/message/${mess._id}`)
    .then(res=>{
        console.log(res.data)
        if(res.data.deletedCount>0){
            refetch()
            Swal.fire(
              'success',
              'Message Succesfully deleted',
              'success'
            )
        }
    })
   }














    return (
        <div>
            <Title heading={'Admin Watch'} subHeading={'Your Customer Problems'}></Title>
             <div className="grid md:grid-cols-4 grid-cols-1">
                {
                    messages.map((mess,idx)=><Card key={idx} className="max-w-sm">
                    <div className="flex justify-end px-4 pt-4">
                      <Dropdown inline label="">
                        <Dropdown.Item>
                       <Link to={`/dashboard/replay/${mess?.messengerEmail}`}>  <Button gradientMonochrome="teal">Replay</Button></Link>
                        </Dropdown.Item>
                      
                        <Dropdown.Item>
                        <Button onClick={()=>deleteHandler(mess)} className="text-red-500" gradientMonochrome="teal">Delete</Button>
                        </Dropdown.Item>
                      </Dropdown>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                     <img className="w-[90px] rounded-full" src={mess?.userImage}></img>
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{mess?.messagerName }</h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{mess?.messengerEmail }</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{mess?.dateTime }</span>
                      <div className="mt-4 flex space-x-3 lg:mt-6">
                      <Button onClick={() => setOpenModal(true)}>Read Message</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>User Meesage</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p>{mess?.message}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
         
          <Button color="gray" onClick={() => setOpenModal(false)}>
           Close
          </Button>
        </Modal.Footer>
      </Modal>
                      </div>
                    </div>
                  </Card> )
                }
             </div>





        </div>
    );
};

export default Inbox;