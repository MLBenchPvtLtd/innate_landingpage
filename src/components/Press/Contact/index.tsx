import Text from "@/components/ui/Text";
import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="py-16 px-5">
      <div className="mx-auto w-full max-w-[1140px] flex justify-center lg:flex-wrap gap-[200px] lg:gap-[50px]">
        <div className="">
          <Text as="h1" className="text-[40px] font-medium text-white">
            CONTACT
          </Text>
          <Text className="max-w-[329px] mt-4 text-white">
            Want to learn more? Send us a message and we’ll be in touch
          </Text>
        </div>
        {/* right form */}
        <Form/>
      </div>
    </div>
  );
};

export default Contact;
