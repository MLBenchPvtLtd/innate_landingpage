import React from "react";
import rightarrow from "@/public/images/press/RightArrowblue.png";
import Image from "next/image";
const Form = () => {
  return (
    <form className="w-full max-w-[611px]">
      <input
        type="text"
        placeholder="Name"
        className="w-full py-2 mb-6 border-b-2 border-[#0000003D] focus:outline-none text-[16px] text-black placeholder-black"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full py-2 mb-6 border-b-2 border-[#0000003D] focus:outline-none text-[16px] text-black placeholder-black"
      />
      <input
        type="number"
        placeholder="Phone"
        className="w-full py-2 mb-6 border-b-2 border-[#0000003D] focus:outline-none text-[16px] text-black placeholder-black"
      />
      <input
        type="text"
        placeholder="Project Address"
        className="w-full py-2 mb-6 border-b-2 border-[#0000003D] focus:outline-none text-[16px] text-black placeholder-black"
      />
      <select className="w-full py-2 mb-6 border-b-2 border-[#0000003D] focus:outline-none text-[16px] text-black bg-transparent placeholder-black">
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
        className="w-full py-2 mb-9 border-b-2 border-[#0000003D] focus:outline-none text-[16px] text-black placeholder-black"
      />
      <button
        type="submit"
        className="w-[130.63px] h-[50px] border border-black text-black text-[16px] font-medium flex items-center justify-center gap-1"
      >
        Submit
        <Image src={rightarrow} alt="" width={18} height={18}/>
      </button>
    </form>
  );
};

export default Form;