import Title from "../General Components/Title";
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';


import { Pagination } from 'swiper/modules';
 import slider1 from '../phone-15-pro-.jpg'
 import slider2 from '../oneplus-6-amber-red.jpg'
 import slider3 from '../poco-x3_006.jpg'
 import slider4 from '../Realme-C17.jpg'
 import slider5 from '../samsung-galaxy-a13-1.jpg'
const Swipers = () => {
    return (
        <div>
            <Title heading={'Dont Late'} subHeading={'Get Our New Collections'}></Title>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-24"
      >
        <SwiperSlide><img className="w-[290px] h-[250px]"  src={slider1}></img>
        <p className='text-2xl '>Ipnone 15 Pro Max</p>

        </SwiperSlide>
        <SwiperSlide><img  className="w-[290px] h-[250px]" src={slider2}></img>
        <p className=' text-2xl  '>One Plus 6</p>

        </SwiperSlide>
        <SwiperSlide><img className="w-[290px] h-[250px]"  src={slider3}></img>
        <p className=' text-2xl  '>Poco X3</p>

        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[290px] h-[250px]"   src={slider4}></img>
        <p className=' text-2xl'>Realme C17</p>
 </SwiperSlide>
 <SwiperSlide>
          <img className="w-[290px] h-[250px]" src={slider5}></img>
        <p className=' text-2xl  '>Galaxy S13</p>
 </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Swipers;