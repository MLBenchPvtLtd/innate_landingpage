'use client'
import Image from 'next/image'
import Link from 'next/link'
import Text from '@/components/ui/Text'
import arrowwhite from '@/public/images/work/Arrowwhite.png'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Keyboard, Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'

import '../slider.css'
import First from '../Content/GrayBathroom/First'
import Second from '../Content/GrayBathroom/Second'
import Third from '../Content/GrayBathroom/Third'
import Fourth from '../Content/GrayBathroom/Fourth'
import Fifth from '../Content/GrayBathroom/Fifth'
import Sixth from '../Content/GrayBathroom/Sixth'
import Seventh from '../Content/GrayBathroom/Seventh'
import Eight from '../Content/GrayBathroom/Eight'
import leftarrow from '@/public/images/work/Arrowleftblue.png'
import rightarrow from '@/public/images/work/Arrowrightblue.png'
import { useState } from 'react'

function WorkSlider2() {
  const [imageLoaded, setImageLoaded] = useState(false)

  const swiper = useSwiper()

  const handleprevbtn = () => {
    swiper?.slidePrev()
    console.log('slidePrev')
  }

  const handleNextvbtn = () => {
    swiper?.slideNext()
    console.log('slideNext')
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background and text content */}
      {imageLoaded && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 text-center z-10">
          <Text
            as="h1"
            className="text-[64px] mob:text-[48px] leading-[28px] mob:leading-[56px] text-[#FFFFFF] mt-24"
          >
            Gray Luxury Bathroom
          </Text>
          <Text className="text-[28px] mob:mt-3 mob:text-[20px] leading-[36.4px] text-[#FFFFFF] mb-3 flex items-center gap-1 mt-5 text-center justify-center">
            Kent, Washington
          </Text>
          <Link
            href="/services"
            className="max-w-[150px] mx-auto flex items-center justify-center text-center gap-1 text-[16px] mob:text-[14px] font-inter text-white border border-[#FFFFFF] px-[10px] py-2"
          >
            LEARN MORE <Image src={arrowwhite} alt="" width={18} height={18} />
          </Link>
        </div>
      )}

      {/* Swiper slider */}
      <div className="w-full h-full relative flex justify-center items-center">
        {/* Navigation arrows */}
        <Image
          className="cards-custom-prev2 absolute left-4 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer"
          onClick={handleprevbtn}
          src={leftarrow}
          alt="moveprevbtn"
        />
        <Image
          className="cards-custom-next2 absolute right-4 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer"
          onClick={handleNextvbtn}
          src={rightarrow}
          alt="movenextbtn"
        />

        <Swiper
          slidesPerView={1}
          speed={2000}
          loop={true}
          navigation={{
            nextEl: '.cards-custom-next2',
            prevEl: '.cards-custom-prev2',
          }}
          modules={[Keyboard, Navigation, Scrollbar, Autoplay]}
          className="w-full h-full"
        >
          <SwiperSlide>
            <First setImageLoaded={setImageLoaded} />
          </SwiperSlide>

          <SwiperSlide>
            <Second />
          </SwiperSlide>

          <SwiperSlide>
            <Third />
          </SwiperSlide>

          <SwiperSlide>
            <Fourth />
          </SwiperSlide>

          <SwiperSlide>
            <Fifth />
          </SwiperSlide>

          <SwiperSlide>
            <Sixth />
          </SwiperSlide>

          <SwiperSlide>
            <Seventh />
          </SwiperSlide>

          <SwiperSlide>
            <Eight />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default WorkSlider2
