import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";
import s1 from "@/public/images/onboarding/s1.png";
import s2 from "@/public/images/onboarding/s2.png";
import s3 from "@/public/images/onboarding/s3.png";
import s4 from "@/public/images/onboarding/s4.png";
import s5 from "@/public/images/onboarding/s5.png";
import s6 from "@/public/images/onboarding/s6.png";

interface Step1Props {
  onNext: () => void;
  onPrevious: () => void;
}

const Step5: React.FC<Step1Props> = ({ onNext, onPrevious }) => {

    const styles = [
        {
          id: 1,
          imageSrc: s1,
          title: "Modern",
          description: "Streamlined, functional spaces with sleek materials",
        },
        {
          id: 2,
          imageSrc: s2,
          title: "Mid-Century",
          description: "Streamlined, functional spaces with sleek materials",
        },
        {
          id: 3,
          imageSrc: s3,
          title: "Spanish",
          description: "Streamlined, functional spaces with sleek materials",
        },
        {
          id: 4,
          imageSrc: s4,
          title: "Coastal",
          description: "Cozy spaces and beachy vibes",
        },
        {
          id: 5,
          imageSrc: s5,
          title: "Farmhouse",
          description: "Rustic Materials",
        },
        {
          id: 6,
          imageSrc: s6,
          title: "Other",
          description: "Share your vision",
        },
      ];

  return (
    <div className=" gradient flex items-center justify-center px-5">
      <div className="max-w-[1140px] w-full py-20">
            <Text
              as="h1"
              className="text-[40px]  font-firaSans font-normal mb-8 "
            >
              What style best fits your vision?
            </Text>
            <div className="flex flex-wrap gap-5">
            {styles.map(({ id, imageSrc, title, description }) => (
        <div
          key={id}
          className="flex items-center justify-center gap-[15px] w-[364px] h-[154px] border border-[#FFFFFF3D] rounded-[10px] p-[16px]"
        >
          <Image src={imageSrc} alt="" width={128} height={128} />
          <div>
            <Text className="text-[20px] leading-[28px] mb-1">{title}</Text>
            <Text>{description}</Text>
          </div>
        </div>
      ))}
            </div>

        <div className="flex mob:flex-wrap justify-end mt-10">
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

export default Step5;