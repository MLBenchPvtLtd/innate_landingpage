import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/press/Right Arrow.png";
import blog1 from "@/public/images/press/approvedblog.png";
import blog2 from "@/public/images/press/blogb.png";

const Blog = () => {
  return (
    <div className="bg-white pt-16">
      <div className="w-full max-w-[1200px] flex flex-wrap justify-center gap-[24px] mb-[44px] mob:mb-[24px] mx-auto">
        <div className="max-w-[267px] border border-[#00000026] rounded-[10px]">
          <Image src={blog1} alt="" width={267} height={192} />
          <div className="p-4">
            <Text className="text-[#000000]">Blog</Text>
            <Text className="text-[#000000] text-[20px] leading-[28px] my-2">
              Do I Need a Permit?
            </Text>
            <Text className="text-[#000000] ">
              Understanding the city’s zoning regulations is essential for a
              smooth and compliant construction process.....
            </Text>

            <Link href="/blog" className="text-[#000000] flex items-center mt-5">
              LEARN MORE <Image src={arrow} alt="" width={18} height={18} />
            </Link>
          </div>
        </div>
        <div className="max-w-[267px] border border-[#00000026] rounded-[10px]">
          <Image src={blog1} alt="" width={267} height={192} />
          <div className="p-4">
            <Text className="text-[#000000]">Blog</Text>
            <Text className="text-[#000000] text-[20px] leading-[28px] my-2">
              Do I Need a Permit?
            </Text>
            <Text className="text-[#000000] ">
              Understanding the city’s zoning regulations is essential for a
              smooth and compliant construction process.....
            </Text>

            <Link href="/blog" className="text-[#000000] flex items-center mt-5">
              LEARN MORE <Image src={arrow} alt="" width={18} height={18} />
            </Link>
          </div>
        </div>
        <div className="max-w-[267px] border border-[#00000026] rounded-[10px]">
          <Image src={blog1} alt="" width={267} height={192} />
          <div className="p-4">
            <Text className="text-[#000000]">Blog</Text>
            <Text className="text-[#000000] text-[20px] leading-[28px] my-2">
              Do I Need a Permit?
            </Text>
            <Text className="text-[#000000] ">
              Understanding the city’s zoning regulations is essential for a
              smooth and compliant construction process.....
            </Text>

            <Link href="/blog" className="text-[#000000] flex items-center mt-5">
              LEARN MORE <Image src={arrow} alt="" width={18} height={18} />
            </Link>
          </div>
        </div>
        <div className="max-w-[267px] border border-[#00000026] rounded-[10px]">
          <Image src={blog1} alt="" width={267} height={192} />
          <div className="p-4">
            <Text className="text-[#000000]">Blog</Text>
            <Text className="text-[#000000] text-[20px] leading-[28px] my-2">
              Do I Need a Permit?
            </Text>
            <Text className="text-[#000000] ">
              Understanding the city’s zoning regulations is essential for a
              smooth and compliant construction process.....
            </Text>

            <Link href="/blog" className="text-[#000000] flex items-center mt-5">
              LEARN MORE <Image src={arrow} alt="" width={18} height={18} />
            </Link>
          </div>
        </div>
      </div>
      {/* row2 */}
      <div className="w-full max-w-[1200px] flex flex-wrap justify-center gap-[24px] mb-[24px] mx-auto">
        <div className="max-w-[558px] border border-[#00000026] rounded-[10px]">
          <Image src={blog2} alt="" width={558} height={294} />
          <div className="p-4">
            <Text className="text-[#000000]">Blog</Text>
            <Text className="text-[#000000] text-[20px] leading-[28px] my-2">
            Why a builder isn’t getting back to you
            </Text>
            <Text className="text-[#000000] ">
            When you reach out to a general contractor and ask for a bid, you may not hear back for several weeks, if at all.....
            </Text>

            <Link href="/blog" className="text-[#000000] flex items-center mt-5">
              LEARN MORE <Image src={arrow} alt="" width={18} height={18} />
            </Link>
          </div>
        </div>
    
        <div className="max-w-[267px] border border-[#00000026] rounded-[10px]">
          <Image src={blog1} alt="" width={267} height={192} />
          <div className="p-4">
            <Text className="text-[#000000]">Blog</Text>
            <Text className="text-[#000000] text-[20px] leading-[28px] my-2">
              Do I Need a Permit?
            </Text>
            <Text className="text-[#000000] ">
              Understanding the city’s zoning regulations is essential for a
              smooth and compliant construction process.....
            </Text>

            <Link href="/blog" className="text-[#000000] flex items-center mt-5">
              LEARN MORE <Image src={arrow} alt="" width={18} height={18} />
            </Link>
          </div>
        </div>
        <div className="max-w-[267px] border border-[#00000026] rounded-[10px]">
          <Image src={blog1} alt="" width={267} height={192} />
          <div className="p-4">
            <Text className="text-[#000000]">Blog</Text>
            <Text className="text-[#000000] text-[20px] leading-[28px] my-2">
              Do I Need a Permit?
            </Text>
            <Text className="text-[#000000] ">
              Understanding the city’s zoning regulations is essential for a
              smooth and compliant construction process.....
            </Text>

            <Link href="/blog" className="text-[#000000] flex items-center mt-5">
              LEARN MORE <Image src={arrow} alt="" width={18} height={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
