import React from "react";
import Image from "next/image";

import roofing from "@/public/images/home/roofing.png";

const Services = () => {
  return (
    <div className="">
      <div className="flex flex-wrap justify-center w-full  mx-auto">
        <div className="w-[33%] tab:w-full group">
          <div className="overflow-hidden">
            <Image
              src={roofing}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 w-full max-h-[484px]"
            />
          </div>
        </div>
        <div className="w-[33%] tab:w-full group">
          <div className="overflow-hidden">
            <Image
              src={roofing}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 w-full max-h-[484px]"
            />
          </div>
        </div>
        <div className="w-[33%] tab:w-full group">
          <div className="overflow-hidden">
            <Image
              src={roofing}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 w-full max-h-[484px]"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-wrap justify-center w-full   mx-auto">
        <div className="w-[49.5%] tab:w-full group">
          <div className="overflow-hidden">
            <Image
              src={roofing}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 w-full max-h-[484px] object-cover"
            />
          </div>
        </div>
       
        <div className="w-[49.5%] tab:w-full group">
          <div className="overflow-hidden">
            <Image
              src={roofing}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 w-full max-h-[484px]  object-cover"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-wrap justify-center w-full   mx-auto">
        <div className="w-[33%] tab:w-full group">
          <div className="overflow-hidden">
            <Image
              src={roofing}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 w-full max-h-[484px]"
            />
          </div>
        </div>
        <div className="w-[33%] tab:w-full group">
          <div className="overflow-hidden">
            <Image
              src={roofing}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 w-full max-h-[484px]"
            />
          </div>
        </div>
        <div className="w-[33%] tab:w-full group">
          <div className="overflow-hidden">
            <Image
              src={roofing}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105 w-full max-h-[484px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
