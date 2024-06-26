// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import  img_1 from '../assets/asset 11.png'
import  img_2 from '../assets/asset 12.png'
import  img_3 from '../assets/asset 14.jpeg'
import  img_4 from '../assets/asset 13.png'

const Slider = () => {
  
  return (
    
     <div>
      <div className='py-4'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[530px] bg-[#f2f2f2] container"
        >
          <SwiperSlide>
            <div className='grid grid-cols-2'>
              <div className='w-[400px] ms-28 mt-[350px]'>
                <h1 className='text-3xl text-black'>THINK DEFFERENT .</h1>
                <p className='text-gray-500 mt-5'>Depot is a unique & captivating theme designed specifically for all types of shops and online stores.</p>
              </div>
              <div>
                <img className='h-[500px] w-[500px] object-cover' src={img_1} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='grid grid-cols-2'>
              <div className='w-[400px] ms-28 mt-[350px]'>
                <h1 className='text-3xl text-black'>THINK DEFFERENT</h1>
                <p className='text-gray-500 mt-5'>Depot is a unique & captivating theme designed specifically for all types of shops and online stores.</p>
              </div>
              <div className='flex'>
                <img className='h-[500px] w-[300px]' src={img_2} alt="" />
                <img className='h-[500px] w-[300px]' src={img_4} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='grid grid-cols-2'>
              <div className='w-[400px] ms-28 mt-[350px]'>
                <h1 className='text-3xl text-black'>THINK DEFFERENT</h1>
                <p className='text-gray-500 mt-5'>Depot is a unique & captivating theme designed specifically for all types of shops and online stores.</p>
              </div>
              <div>
                <img className='h-[550px] w-[500px] object-contain bottom-0 absolute' src={img_3} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

   
  )
}

export default Slider
