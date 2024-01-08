import {loadStripe} from '@stripe/stripe-js';
import Title from '../../../General Components/Title';
import { Elements } from '@stripe/react-stripe-js';
import Checkoutform from './Checkoutform';


const stripePromise = loadStripe('pk_test_51OEAXTFSdPUsKpuTCPVL2kSpTFSpYORfZWuvoW3PeVixQF2PD8EyxYW2a51ureWZj29gE60yB5e2EkYQwCvNi7R800Yx6jtjN3');
const Payment = () => {
    





    return (
        <div>
           <Title heading={'Please Payment '} subHeading={'For Own The Phone'}></Title>
           <div className="">
            <Elements stripe={stripePromise}>
                <Checkoutform></Checkoutform>
            </Elements>
           </div>

        </div>
    );
};

export default Payment;