import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import rightarrow from "@/public/images/press/RightArrowblue.png";
import Form from "./Form";

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
       <Form/>
      </div>
    </div>
  );
};

export default Contact;