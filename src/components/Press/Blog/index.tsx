import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/press/Right Arrow.png";
import blog1 from "@/public/images/press/approvedblog.png";
import blog2 from "@/public/images/press/blog2.png";
import blog3 from "@/public/images/press/blog3.png";
import blog4 from "@/public/images/press/blog4.png";
import blog5 from "@/public/images/press/blog5.png";
import blogb from "@/public/images/press/blogb.png";

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

            <Link
              href="/blog"
              className="text-[#000000] flex items-center mt-5"
            >
              LEARN MORE <Image src={arrow} alt="" width={18} height={18} />
            </Link>
          </div>
        </div>
        <div className="max-w-[267px] border border-[#00000026] rounded-[10px]">
          <Image src={blog2} alt="" width={267} height={192} />
          <div className="p-4">
            <Text className="text-[#000000]">Press</Text>
            <Text className="text-[#000000] text-[20px] leading-[28px] my-2">
              Innate opens office in Bellevue
            </Text>
            <Text className="text-[#000000] ">
              Innate’s new Bellevue office prioritizes people and lowers carbon
              footprint, specifically through lighting and acoustics....
            </Text>

            <Link
              href="/blog"
              className="text-[#000000] flex items-center mt-5"
            >
              LEARN MORE <Image src={arrow} alt="" width={18} height={18} />
            </Link>
          </div>
        </div>
        <div className="max-w-[267px] border border-[#00000026] rounded-[10px]">
          <Image src={blog3} alt="" width={267} height={192} />
          <div className="p-4">
            <Text className="text-[#000000]">Blog</Text>
            <Text className="text-[#000000] text-[20px] leading-[28px] my-2">
              The Cost of Architecture
            </Text>
            <Text className="text-[#000000] ">
              The cost of architecture is a contentious topic and a difficult
              one to find a consensus on. The American Institute of Architects
              suggests that....
            </Text>

            <Link
              href="/blog"
              className="text-[#000000] flex items-center mt-5"
            >
              LEARN MORE <Image src={arrow} alt="" width={18} height={18} />
            </Link>
          </div>
        </div>
        <div className="max-w-[267px] border border-[#00000026] rounded-[10px]">
          <Image src={blog4} alt="" width={267} height={192} />
          <div className="p-4">
            <Text className="text-[#000000]">Blog</Text>
            <Text className="text-[#000000] text-[20px] leading-[28px] my-2">
              Why Do I Need a Project Manager?
            </Text>
            <Text className="text-[#000000] ">
              A project manager is absolutely crucial to the construction
              process for several reasons: Coordination, budget control....
            </Text>

            <Link
              href="/blog"
              className="text-[#000000] flex items-center mt-5"
            >
              LEARN MORE <Image src={arrow} alt="" width={18} height={18} />
            </Link>
          </div>
        </div>
      </div>
      {/* row2 */}
      <div className="w-full max-w-[1200px] flex flex-wrap justify-center gap-[24px] mb-[24px] mx-auto">
        <div className="max-w-[558px] border border-[#00000026] rounded-[10px]">
          <Image src={blogb} alt="" width={558} height={294} />
          <div className="p-4">
            <Text className="text-[#000000]">Blog</Text>
            <Text className="text-[#000000] text-[20px] leading-[28px] my-2">
              Why a builder isn’t getting back to you
            </Text>
            <Text className="text-[#000000] ">
              When you reach out to a general contractor and ask for a bid, you
              may not hear back for several weeks, if at all.....
            </Text>

            <Link
              href="/blog"
              className="text-[#000000] flex items-center mt-5"
            >
              LEARN MORE <Image src={arrow} alt="" width={18} height={18} />
            </Link>
          </div>
        </div>

        <div className="max-w-[267px] border border-[#00000026] rounded-[10px]">
          <Image src={blog5} alt="" width={267} height={192} />
          <div className="p-4">
            <Text className="text-[#000000]">Press</Text>
            <Text className="text-[#000000] text-[20px] leading-[28px] my-2">
              New CRM JobSync
            </Text>
            <Text className="text-[#000000] ">
              The cost of architecture is a contentious topic and a difficult
              one to find a consensus on. The American Institute of Architects
              suggests that....
            </Text>

            <Link
              href="/blog"
              className="text-[#000000] flex items-center mt-5"
            >
              LEARN MORE <Image src={arrow} alt="" width={18} height={18} />
            </Link>
          </div>
        </div>
        <div className="max-w-[267px] border border-[#00000026] rounded-[10px]">
          <Image src={blog2} alt="" width={267} height={192} />
          <div className="p-4">
            <Text className="text-[#000000]">Press</Text>
            <Text className="text-[#000000] text-[20px] leading-[28px] my-2">
              Why Do I Need a Project Manager?
            </Text>
            <Text className="text-[#000000] ">
              A project manager is absolutely crucial to the construction
              process for several reasons:Coordination, budget control....
            </Text>

            <Link
              href="/blog"
              className="text-[#000000] flex items-center mt-5"
            >
              LEARN MORE <Image src={arrow} alt="" width={18} height={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
