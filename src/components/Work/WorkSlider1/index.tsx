'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Keyboard, Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'
import Text from '@/components/ui/Text'
import arrowwhite from '@/public/images/work/Arrowwhite.png'
import '../slider.css'
import First from '../Content/DesertOasis/First'
import Second from '../Content/DesertOasis/Second'
import Third from '../Content/DesertOasis/Third'
import Fourth from '../Content/DesertOasis/Fourth'
import Fifth from '../Content/DesertOasis/Fifth'
import Sixth from '../Content/DesertOasis/Sixth'
import Seventh from '../Content/DesertOasis/Seventh'
import Eight from '../Content/DesertOasis/Eight'
import leftarrow from '@/public/images/work/Arrowleftblue.png'
import rightarrow from '@/public/images/work/Arrowrightblue.png'

function WorkSlider1() {
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
    <div className="w-full">
      <div>
        <div className="relative w-full work1-slider-parent flex justify-center items-center">
          {/* Navigation arrows */}
          <Image
            className="cards-custom-prev11"
            onClick={handleprevbtn}
            src={leftarrow}
            alt="moveprevbtn"
          />
          <Image
            className="cards-custom-next11"
            onClick={handleNextvbtn}
            src={rightarrow}
            alt="movenextbtn"
          />

          {/* Swiper Slider */}
          <Swiper
            slidesPerView={1}
            speed={2000}
            loop={true}
            navigation={{
              nextEl: '.cards-custom-next11',
              prevEl: '.cards-custom-prev11',
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

        {/* Text content */}
        <div className="absolute xl:bottom-96 md:bottom-80 sm:bottom-28 left-0 p-5 mob:p-10 w-full z-10 bg-opacity-50 text-center">
          {/* Image for "Desert Oasis" */}

          {imageLoaded && (
            <div>
              <Text
                as="h1"
                className="text-[64px] mob:text-[48px] leading-[28px] mob:leading-[56px] text-[#FFFFFF] mt-24 mob:mt-0"
              >
                Desert Oasis
              </Text>
              <Text className="text-[28px] mob:mt-3 mob:text-[20px] leading-[36.4px] text-[#FFFFFF] mb-3 flex items-center gap-1 mt-5 text-center justify-center">
                Palm Springs, California
              </Text>
              <Link
                href="/services"
                className="max-w-[126px] mx-auto flex items-center justify-center text-center gap-1 text-[16px] mob:text-[14px] font-inter text-white"
              >
                LEARN MORE{' '}
                <Image src={arrowwhite} alt="" width={18} height={18} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WorkSlider1
