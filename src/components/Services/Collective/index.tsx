import React from "react";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

import rightimg from "@/public/images/home/collective.png";
import Image from "next/image";
const Collective = () => {
  return (
    <div className="flex justify-center items-center pt-20 mob:my-12 mob:px-5 bg-white">
      <div className="w-full max-w-[1203px] flex mob:flex-wrap items-center justify-between">
        <div className="max-w-[517px]">
          <Text className="text-[24px] text-[#000000] font-medium leading-[31.2px] mb-4">
            We are a collective of architects, engineers and craftsmen
            collaborating to create beautiful spaces and structures that meet
            the unique needs of our clients.
          </Text>
          <Text className="text-[#00000091]">
            Innate is an architecture, engineering and construction firm capable
            of handling the entire project from permit to build. Our approach
            focuses on quality design and construction that will stand the test
            of time. In order to do this, we handpick craftsman and
            subcontractors who share our values. Detailed, beautiful work is
            often expensive, and so we are typically not the cheapest bid.
          </Text>
          <Button className="max-w-[137px] text-black border-[black] h-[50px] text-[16px] font-normal mt-7">
            Learn More
          </Button>
        </div>
        <div className="mob:mt-5">
          <Image className="mr-8 mob:mr-0" src={rightimg} alt="rightimg" width={339} height={222} />
        </div>
      </div>
    </div>
  );
};

export default Collective;