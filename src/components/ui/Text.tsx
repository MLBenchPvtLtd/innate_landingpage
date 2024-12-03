import React, { forwardRef } from "react";

import { cn } from "@/libs/utils/twMerge";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => void;
  id?:string
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, as, onClick,id="" } = props;

    if (as === "h1") {
      return (
        <h1
          ref={ref}
          className={cn(
            "font-bold  text-[64px] leading-[120%] text-[#FFFFFF] font-inter   ",
            className
          )}
          onClick={onClick}
          id={id}
        >
          {children}
        </h1>
      );
    }

    if (as === "h2") {
      return (
        <h2
          ref={ref}
          className={cn(
            "font-bold font-inter text-[40px] leading-[123%] text-[#FFFFFF]  ",
            className
          )}
          id={id}
          onClick={onClick}
        >
          {children}
        </h2>
      );
    }

    return (
      <p
        ref={ref}
        className={cn(
          "   text-[#FFFFFF] text-[16.56px] font-normal leading-[168%] font-inter  ",
          className
        )}
        onClick={onClick}
        id={id}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

export default Text;