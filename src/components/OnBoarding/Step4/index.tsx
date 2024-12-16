import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";
import range from "@/public/images/onboarding/range image.png";

interface Step4Props {
  onNext: () => void;
  onPrevious: () => void;
}

const Step4: React.FC<Step4Props> = ({ onNext, onPrevious }) => {
  return (
    <div className=" gradient flex py-20 items-center justify-center px-5">
      <div className="max-w-[1140px] w-full ">
        <div className="">
          <Text className="text-[20px]  font-firaSans font-normal mb-2 ">
            OPTIONAL
          </Text>
          <Text
            as="h1"
            className="text-[40px]  font-firaSans font-normal mb-5 "
          >
            What’s your budget range?
          </Text>
          <Image src={range} alt="" width={1140} height={278} />
        </div>

        <div className="flex mob:flex-wrap justify-end mt-5">
          <div className="flex gap-5 mt-6">
            <button
              onClick={onPrevious}
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[126px]      bg-transparent   h-[50px] text-[16px] text-white leading-[22.4px]"
            >
              Previous
              <Image src={arrow} alt="" width={24} height={24} />
            </button>
            <button
              onClick={onNext}
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[116px]     bg-transparent   h-[50px] text-[16px] text-white leading-[22.4px]"
            >
              Next
              <Image src={arrow} alt="" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
