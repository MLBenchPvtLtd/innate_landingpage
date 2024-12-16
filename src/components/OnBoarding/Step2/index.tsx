import React, { useState } from "react";
import Text from "@/components/ui/Text";

import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";
import Image from "next/image";

interface Step1Props {
  onNext: () => void;
  onPrevious: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext, onPrevious }) => {
  const options = [
    "Designer",
    "Engineer",
    "General Contractor",
    "Surveyor",
    "Not sure yet",
  ];

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions(
      (prevSelected) =>
        prevSelected.includes(option)
          ? prevSelected.filter((item) => item !== option) 
          : [...prevSelected, option] 
    );
  };

  return (
    <div className="min-h-screen gradient flex items-center justify-center">
      <div className="w-full max-w-[1180px] mt-20">
        <Text as="h1" className="text-[40px]  font-firaSans font-normal mb-10">
        Got it! What professional do you need help finding?
        </Text>

        <div className="flex flex-col gap-3">
          {options.map((option, index) => (
            <label key={index} className="flex items-center gap-[14px]">
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                className="h-5 w-5 accent-blue-500"
              />
              <span className="text-[20px] text-[#D9D9D9]">{option}</span>
            </label>
          ))}
        </div>
        <div className="flex mob:flex-wrap justify-end mt-20">
        
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

export default Step1;
