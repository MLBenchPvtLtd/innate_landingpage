'use client'
import Image from 'next/image'
// import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import {
  Keyboard,
  Navigation,
  Scrollbar,
  Autoplay,
  // Pagination,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'
import Text from '@/components/ui/Text'
import arrowwhite from '@/public/images/work/Arrowwhite.png'
import '../slider.css'
import First from '../Content/kirkLand/First'
import Second from '../Content/kirkLand/Second'
import Third from '../Content/kirkLand/Third'
import Fourth from '../Content/kirkLand/Fourth'
import Fifth from '../Content/kirkLand/Fifth'
import leftarrow from '@/public/images/work/Arrowleftblue.png'
import rightarrow from '@/public/images/work/Arrowrightblue.png'
import { useState } from 'react'

function WorkSlider3() {
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
      {/* Centered Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 bg-opacity-50 text-center">
        {imageLoaded && (
          <div>
            <Text
              as="h1"
              className="text-[64px] mob:text-[40px] leading-[28px] mob:leading-[52px] text-[#FFFFFF] mt-24"
            >
              Wheat Ridge ADU
            </Text>
            <Text className="text-[28px] mob:mt-3 mob:text-[20px] leading-[36.4px] text-[#FFFFFF] mb-3 flex items-center gap-1 mt-5 text-center justify-center">
              Kirkland, Washington
            </Text>
            <Link
              href="/services"
              className="max-w-[150px] mx-auto flex items-center justify-center text-center gap-1 text-[16px] mob:text-[14px] font-inter text-white border border-[#FFFFFF] px-[10px] py-2"
            >
              LEARN MORE{' '}
              <Image src={arrowwhite} alt="" width={18} height={18} />
            </Link>
          </div>
        )}
      </div>

      {/* Slider and Arrows */}
      <div className="w-full h-full flex justify-center items-center relative">
        <Image
          className="cards-custom-prev4 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={handleprevbtn}
          src={leftarrow}
          alt="moveprevbtn"
        />
        <Image
          className="cards-custom-next4 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={handleNextvbtn}
          src={rightarrow}
          alt="movenextbtn"
        />
        <Swiper
          slidesPerView={1}
          speed={2000}
          loop={true}
          navigation={{
            nextEl: '.cards-custom-next4',
            prevEl: '.cards-custom-prev4',
          }}
          modules={[Keyboard, Navigation, Scrollbar, Autoplay]}
          className="mySwiper"
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
        </Swiper>
      </div>
    </div>
  )
}

export default WorkSlider3
