import Text from "@/components/ui/Text";
import Image from "next/image";
import React from "react";

import avoid from "@/public/images/home/avoidsurprise.png";
import Button from "@/components/ui/Button";
const DesignAndBuild = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#141E4C] via-[#00000040] to-[#0f1015] py-16">
      <Text as="h1" className="text-center">Design and build the Innate way</Text>
      <div className="flex lg:flex-wrap gap-[47px] items-center p-[43px] w-full min-h-[439px] mt-16 mb-8 max-w-[1140px] mx-auto rounded-[50px] bg-gradient-to-r from-[#141E4C] via-[#00000040] to-[#03040B]">
<div className="w-full max-w-[437.84px]">
  <Image src={avoid} alt="" width={437.84} height={376} />
</div>
<div className="">
  <Text as="h2" className="">Avoid Surprises</Text>
  <Text  className="max-w-[530px] mt-3 mb-16 text-[22px] text-[#FFFFFF66] leading-[30.14px]">After doing an in-person site visit, we will provide an accurate, comprehensive and transparent bid, broken down by trade.</Text>
<Button className="max-w-[202px] h-[61px] mt-4 text-[19.5px] bg-[#0f1015] backdrop-blur-md  ">Get Started</Button>
</div>
      </div>
    </div>
  );
};

export default DesignAndBuild;
