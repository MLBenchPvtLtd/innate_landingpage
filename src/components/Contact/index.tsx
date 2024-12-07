import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import rightarrow from "@/public/images/press/RightArrowblue.png";

const Contact = () => {
  return (
    <div className="bg-black pb-16 pt-44 px-5">
      <div className="mx-auto w-full max-w-[1140px] flex justify-center lg:flex-wrap gap-[200px] lg:gap-[50px]">
        <div className="max-w-[444px]">
          <Text as="h1" className="text-[40px] text-white font-medium ">
            CONTACT
          </Text>
          <Text className=" mt-4 text-[#D9D9D9]">
            If you’re looking for an architect, engineer or builder to help with
            your project, this form is the best way to reach us. We are based in
            Bellevue, Washington but are open to working with clients both near
            and far.
          </Text>
          <Text className=" mt-4 text-[#D9D9D9]">
            To determine whether your project might be a good fit for us, please
            briefly describe the scope, timing, location and other relevant
            details in the form and we’ll be in touch shortly to review your
            project in detail.
          </Text>
          <Text className=" mt-4 text-[#D9D9D9]">
            Alternatively, if you are only interested in getting a rough
            estimate, follow the link below and fill in your project details to
            receive a rough AI generated estimate.
          </Text>
          <button
            type="submit"
            className="w-[172.63px] h-[50px] mt-8 border border-white text-white text-[16px] font-medium flex items-center justify-center gap-1"
          >
            Start project
            <Image src={rightarrow} alt="" width={18} height={18} />
          </button>
        </div>
        {/* right form */}
        <form className="w-full max-w-[611px]">
          <input
            type="text"
            placeholder="Name"
            className="w-full py-2 mb-9 border-b-2 border-[#FFFFFF3D] focus:outline-none text-[16px] text-white placeholder-white bg-transparent"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full py-2 mb-9 border-b-2 border-[#FFFFFF3D] focus:outline-none text-[16px] text-white placeholder-white bg-transparent"
          />
          <input
            type="number"
            placeholder="Phone"
            className="w-full py-2 mb-9 border-b-2 border-[#FFFFFF3D] focus:outline-none text-[16px] text-white placeholder-white bg-transparent"
          />
          <input
            type="text"
            placeholder="Project Address"
            className="w-full py-2 mb-9 border-b-2 border-[#FFFFFF3D] focus:outline-none text-[16px] text-white placeholder-white bg-transparent"
          />
          <select className="w-full py-2 mb-9 border-b-2 border-[#FFFFFF3D] focus:outline-none text-[16px] text-white  placeholder-white bg-black/85">
            <option value="" disabled selected hidden>
              Project Type
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <input
            type="text"
            placeholder="Message"
            className="w-full py-2 mb-9 border-b-2 border-[#FFFFFF3D] focus:outline-none text-[16px] text-white placeholder-white bg-transparent"
          />
          <button
            type="submit"
            className="w-[130.63px] h-[50px] border border-white text-white text-[16px] font-medium flex items-center justify-center gap-1"
          >
            Submit
            <Image src={rightarrow} alt="" width={18} height={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
