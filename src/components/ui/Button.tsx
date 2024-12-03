import React from "react";

import { cn } from "@/libs/utils/twMerge";
interface ButtonProps {
  text?: string;
  children?: React.ReactNode; // Add children prop
  className?: string;

}

const Button: React.FC<ButtonProps> = ({ text = "Explore Music", children, className }) => {
  return (
    <>
     
      <button className={cn(" w-full rounded-[150px] bg-[#20B4CE] border-[#20B4CE] border text-[16px] font-inter font-bold leading-[25.5px] text-[#FFFFFF] h-[39px]",  className)}>
        {children || text} {/* Use children if available, otherwise use text */}
      </button>
    </>
  );
};

export default Button;
