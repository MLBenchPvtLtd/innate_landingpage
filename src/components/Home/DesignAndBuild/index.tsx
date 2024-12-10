import Text from "@/components/ui/Text";
import Image from "next/image";
import React from "react";

import Button from "@/components/ui/Button";

import avoid from "@/public/images/home/avoidsurprise.png";
import savetime from "@/public/images/home/savetime.png";
import stress from "@/public/images/home/avoidstress.png";
import track from "@/public/images/home/track.png";
import rightarrow from "@/public/images/press/RightArrowblue.png";

const DesignAndBuild = () => {
  return (
    <div className="w-full h-full gradient py-16 px-5">
      <Text
        as="h1"
        className="text-center mob:text-[30px] mob:leading-[33px] mob:px-5"
      >
        Design and build the Innate way
      </Text>
      {/* avoid surprise */}
      <div className="flex lg:flex-wrap gap-[47px] items-center p-[43px] mob:px-[20px] w-full min-h-[439px] mt-16 mb-8 max-w-[1140px] mx-auto rounded-[50px] mob:rounded-[19.05px]  gradient2">
        <div className="w-full max-w-[437.84px]">
          <Image src={avoid} alt="" width={437.84} height={376} />
        </div>
        <div className="">
          <Text as="h2" className="">
            Avoid Surprises
          </Text>
          <Text className="max-w-[530px] mt-3 mb-16 text-[22px] text-[#FFFFFF66] leading-[30.14px]">
            After doing an in-person site visit, we will provide an accurate,
            comprehensive and transparent bid, broken down by trade.
          </Text>
          <Button className="max-w-[202px] h-[61px] flex justify-center items-center gap-2 mt-4 text-[19.5px] bg-transparent  backdrop-blur-md  ">
            Get Started
            <Image src={rightarrow} alt="" width={18} height={18} />
          </Button>
        </div>
      </div>
      {/* save time */}
      <div className="flex lg:flex-wrap gap-[47px] items-center p-[43px] mob:px-[20px] w-full min-h-[439px]  my-8 max-w-[1140px] mx-auto rounded-[50px] mob:rounded-[19.05px] gradient2">
        <div className="">
          <Text as="h2" className="">
            Save Time
          </Text>
          <Text className="max-w-[530px] mt-3 mb-16 text-[22px] text-[#FFFFFF66] leading-[30.14px]">
            Our network of vetted architects, engineers and craftsmen save you
            the time and hassle of putting together your own team.
          </Text>
          <Button className="max-w-[202px] h-[61px] flex justify-center items-center gap-2 mt-4 text-[19.5px] bg-transparent  backdrop-blur-md  ">
            Get Started
            <Image src={rightarrow} alt="" width={18} height={18} />
          </Button>
        </div>
        <div className="w-full max-w-[431.81px]">
          <Image src={savetime} alt="" width={431.81} height={369} />
        </div>
      </div>
      {/* avoid stress */}
      <div className="flex lg:flex-wrap gap-[47px] items-center p-[43px] mob:px-[20px] w-full min-h-[439px] my-8 max-w-[1140px] mx-auto rounded-[50px] mob:rounded-[19.05px] gradient2">
        <div className="w-full max-w-[430px]">
          <Image src={stress} alt="" width={430} height={369} />
        </div>
        <div className="">
          <Text as="h2" className="">
            Avoid Stress
          </Text>
          <Text className="max-w-[530px] mt-3 mb-16 text-[22px] text-[#FFFFFF66] leading-[30.14px]">
            Our dedicated project managers attend to every detail of your
            project to make sure it get done right, on time and on budget. Our
            subcontractors are vetted, experienced and highly skilled.
          </Text>
          <Button className="max-w-[202px] h-[61px] flex justify-center items-center gap-2 mt-4 text-[19.5px] bg-transparent  backdrop-blur-md  ">
            Get Started
            <Image src={rightarrow} alt="" width={18} height={18} />
          </Button>
        </div>
      </div>
      {/* Track */}
      <div className="flex lg:flex-wrap gap-[47px] items-center p-[43px] mob:px-[20px] w-full min-h-[439px]  mt-8 max-w-[1140px] mx-auto rounded-[50px] mob:rounded-[19.05px] gradient2">
        <div className="">
          <Text as="h2" className="">
            Track Progress
          </Text>
          <Text className="max-w-[530px] mt-3 mb-16 text-[22px] text-[#FFFFFF66] leading-[30.14px]">
            Our proprietary software, JobSync, centralizes timeline progress,
            payments, budget and material selections.
          </Text>
          <Button className="max-w-[202px] h-[61px] flex justify-center items-center gap-2 mt-4 text-[19.5px] bg-transparent  backdrop-blur-md  ">
            Get Started
            <Image src={rightarrow} alt="" width={18} height={18} />
          </Button>
        </div>
        <div className="w-full max-w-[448px]">
          <Image src={track} alt="" width={448} height={369} />
        </div>
      </div>
    </div>
  );
};

export default DesignAndBuild;
