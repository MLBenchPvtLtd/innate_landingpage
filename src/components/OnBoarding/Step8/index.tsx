import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";

interface Step8Props {
  onNext: () => void;
  onPrevious: () => void;
}

const Step8: React.FC<Step8Props> = ({ onNext, onPrevious }) => {
  return (
    <div className=" gradient flex items-center justify-center px-5">
      <div className="max-w-[1140px] w-full py-20">
        <div className="">
          <Text
            as="h1"
            className="text-[40px]  font-firaSans font-normal mb-3 "
          >
           Almost Done!
          </Text>
          <Text>
          We’ll use this info to get in touch with you to schedule a consultation or send a rough bid.
          </Text>
          <input
            placeholder="Address"
            type="text"
            name=""
            id=""
            className="pl-4 mt-7 w-full max-w-[900px] h-[60px] border border-[#FFFFFF3D] bg-transparent outline-none text-white text-[16px] placeholder:text-[16px] placeholder:text-white"
          />
          <input
            placeholder="Phone"
            type="number"
            name=""
            id=""
            className="pl-4 mt-3 w-full max-w-[900px] h-[60px] border border-[#FFFFFF3D] bg-transparent outline-none text-white text-[16px] placeholder:text-[16px] placeholder:text-white"
          />
       
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

export default Step8;
