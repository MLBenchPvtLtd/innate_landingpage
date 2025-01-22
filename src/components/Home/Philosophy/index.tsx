import React from 'react'

import Text from '@/components/ui/Text'

import rightimg from '@/public/images/home/collective.png'
import Image from 'next/image'
const Philosophy = () => {
  return (
    <>
      <div className="flex justify-center items-center py-20 mob:my-12 px-14 mob:py-0 mob:px-0">
        <div className="w-[84%] flex mob:flex-col items-center justify-center mob:w-[100%]">
          <div className="w-[80%] mob:px-0 mob:w-[90%]">
            <Text className="text-[32px] text-white font-semibold leading-[41.2px] mt-3 mb-4 mob:text-[28px]">
              When design is both functional and beautiful,
              <span className="block lg:inline">
                it has the most impact on people's lives.
              </span>
            </Text>
          </div>
          <div className=" mob:px-0 justify-items-center aspect-[7/5] relative overflow-hidden w-1/5 mob:w-4/5">
            <Image
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="mr-24 mob:mr-0 object-cover"
              src={rightimg}
              alt="rightimg"
              fill
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Philosophy
