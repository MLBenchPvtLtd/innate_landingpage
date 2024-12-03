import React from "react";
import Image from "next/image";

import slide from "@/public/images/home/slide1.png";
import topdark from "@/public/images/home/topdark.png";
import bottomdark from "@/public/images/home/bottomdark.png";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
const Hero = () => {
  return (
    <div className="relative h-screen min-h-[757px] flex justify-center items-center">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={slide}
        alt=""
        width={1440}
        height={757}
      />
      <Image
        className="absolute top-0 left-0 w-full  object-cover z-0"
        src={topdark}
        alt=""
        width={1440}
        height={757}
      />
      <Image
        className="absolute bottom-0 left-0 w-full h-full object-cover z-0"
        src={bottomdark}
        alt=""
        width={1440}
        height={757}
      />
      <div className="w-full max-w-[1203.5px] relative z-10 xl:px-5">
        <Text className="text-accent text-[18px]">LOREM IPSUM</Text>
        <Text as="h1" className="my-3">
          Great Smiles
          <br />
          Great Experiences
        </Text>
        <Text>Feel Great About Your Smile And Your Dentist</Text>

        <div className="flex gap-5 mt-6">
            <Button className="w-[197px]">Book Appointment</Button>
            <Button className="text-accent bg-transparent border-none max-w-[227px] text-[18px] font-medium">Call Us +1 (301) 431-6883</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
