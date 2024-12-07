import React from 'react'
import Image from 'next/image'
import rightarrow from "@/public/images/press/RightArrowblue.png";


const Form = () => {
  return (
    <>
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
    </>
  )
}

export default Form
