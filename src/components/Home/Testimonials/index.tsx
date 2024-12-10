import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import test1 from "@/public/images/home/testimonial1.png";
import test2 from "@/public/images/home/testimonial2 (2).png";
import profile1 from "@/public/images/home/profile.png";
import profile2 from "@/public/images/home/profile (1).png";
import profile3 from "@/public/images/home/profile (2).png";

const Testimonials = () => {
  return (
    <div className="max-w-[1140px] w-full mx-auto py-16 tab:px-5">
      <Text as="h1" className="text-black font-medium  mb-12">
        Testimonials
      </Text>

      <div className="flex flex-wrap justify-center gap-[20px]">
        <div className="w-full max-w-[364px] border border-[#0000001A] rounded-[10px]">
          <Image src={test1} alt="" width={364} height={213} />
          <div className="p-4">
            <div className="flex gap-[11px] items-center  0">
              <Image src={profile1} alt="" width={48} height={48} />
              <div className="">
                <Text className=" text-[20px]  leading-[28px] text-black">
                Pellegrino Remodel
                </Text>
                <Text className="mt-1 text-black/60">
                CEO at TechCorp
                </Text>
              </div>
            </div>
            <Text className="text-black/60 mt-3 ">This service is amazing!</Text>
          </div>
        </div>
        <div className="w-full max-w-[364px] border border-[#0000001A] rounded-[10px]">
          <Image src={test2} alt="" width={364} height={213} />
          <div className="p-4">
            <div className="flex gap-[11px] items-center  0">
              <Image src={profile2} alt="" width={48} height={48} />
              <div className="">
                <Text className=" text-[20px]  leading-[28px] text-black">
                Norman Remodel
                </Text>
                <Text className="mt-1 text-black/60">
                CEO at TechCorp
                </Text>
              </div>
            </div>
            <Text className="text-black/60 mt-3 ">This service is amazing!</Text>
          </div>
        </div>
        <div className="w-full max-w-[364px] border border-[#0000001A] rounded-[10px]">
          <Image src={test1} alt="" width={364} height={213} />
          <div className="p-4">
            <div className="flex gap-[11px] items-center  0">
              <Image src={profile3} alt="" width={48} height={48} />
              <div className="">
                <Text className=" text-[20px]  leading-[28px] text-black">
                Eleanor Pena
                </Text>
                <Text className="mt-1 text-black/60">
                CEO at TechCorp
                </Text>
              </div>
            </div>
            <Text className="text-black/60 mt-3 ">This service is amazing!</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
