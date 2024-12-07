import React from "react";
import Image from "next/image";

import Text from "../ui/Text";

import logo from "@/public/logo-innate.png";
import insta from "@/public/instagaram.svg";
import fb from "@/public/facebook.svg";
import linkedin from "@/public/linkedin.svg";

const Footer = () => {
  return (
    <div className="bg-[#141414] pt-16 pb-12 mob:pt-12 px-5">
    <div className="mx-auto w-full max-w-[1140px] flex tab:flex-wrap tab:gap-[20px] justify-between ">
      <div className="">
        <Image src={logo} alt="" width={222.17} height={48} />
      </div>
      <div className="max-w-[160px] mob:max-w-full">
        <Text>Northwest</Text>
        <Text className="text-[#D9D9D9] mt-3">
          12819 SE 38th St #340 Bellevue, WA 98006 (425) 866-5206
        </Text>
      </div>
      <div className="max-w-[142px] mob:max-w-full">
        <Text>Northwest</Text>
        <Text className="text-[#D9D9D9] mt-3">
          12819 SE 38th St #340 Bellevue, WA 98006 (425) 866-5206
        </Text>
      </div>
      <div className="">
        <div className="flex gap-4 ml-3">
            <Image src={insta} alt="" width={32} height={32}/>
            <Image src={fb} alt="" width={32} height={32}/>
            <Image src={linkedin} alt="" width={32} height={32}/>
        </div>
        <Text className="text-[#D9D9D9] mt-3">© Innate NW, LLC</Text>
      </div>
    </div>
    </div>
  );
};

export default Footer;
