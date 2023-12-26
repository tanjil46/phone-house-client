

import { Carousel } from 'flowbite-react';
import iphone from '../img/iphone-15-pro.jpg'
import galaxy from '../img/samsung-galaxy-s10-1.jpg'
import realme from '../img/Realme-C53.jpg'
import poco from '../img/poco .jpg'
import onePlus from '../img/one0-plus.jpg'
const Banner = () => {
    return (
        <div>





  
    <div className="h-[700px] w-full mx-auto my-5 p-6">
      <Carousel slideInterval={5000}>
        <img className='w-[600px]' src={iphone} alt="..." />
        <img className='w-[600px]' src={galaxy} alt="..." />
        <img className='w-[600px]' src={realme}  alt="..." />
        <img className='w-[600px]' src={poco} alt="..." />
        <img className='w-[600px] h-[600px]' src={onePlus} alt="..." />
      </Carousel>
    </div>



        </div>
    );
};

export default Banner;