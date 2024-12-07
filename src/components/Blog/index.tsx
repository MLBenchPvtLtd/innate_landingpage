import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import share from "@/public/images/blog/mdi_instagram.png";
import fb from "@/public/images/blog/iconoir_facebook.png";
import linkedin from "@/public/images/blog/basil_linkedin-outline.png";
import frame1 from "@/public/images/blog/fram1.png";
import frame2 from "@/public/images/blog/Frame2.png";
import carbon from "@/public/images/blog/carbon.png";
import heritage from "@/public/images/blog/heritage.png";
import resilient from "@/public/images/blog/resilient.png";
import native from "@/public/images/blog/native.png";
const Blog = () => {
  return (
    <>
      <div className="w-full max-w-[1203px] flex gap-[90px] lg:flex-wrap lg:gap-[50px] mx-auto pt-28 lg:px-5">
        <div className="w-full max-w-[770px]">
          <Text as="h2" className="text-[40px] font-medium leading-[52px] mob:text-[35px]">
            The Positive Impact of Carbon Credits on Indigenous Communities
          </Text>
          <div className="flex tab:flex-wrap tab:gap-3 justify-between mt-6 mb-4">
            <Text className="text-[20px] text-[#D9D9D9]">
              Published: 11 December, 2023
            </Text>
            <div className="flex gap-3">
              <Image src={share} alt="" width={32} height={32} />
              <Image src={fb} alt="" width={32} height={32} />
              <Image src={linkedin} alt="" width={32} height={32} />
            </div>
          </div>
          <Image
            className="mb-4"
            src={frame1}
            alt=""
            width={770}
            height={400.48}
          />
          <Text className="mb-4">
            Lorem ipsum dolor sit amet consectetur. In amet leo dictum quis
            morbi id. Ultrices dictum eget orci odio proin ut imperdiet duis.
            Aliquet elit porta orci eget sollicitudin vulputate diam faucibus
            mauris. Lacinia mauris urna vulputate feugiat quis tellus id id
            nullam. Lectus ut nec sit orci egestas nullam cras in arcu. Ultrices
            aliquam sed ac sapien mauris felis vulputate. Lacus tincidunt mattis
            venenatis cras ut cursus.
          </Text>
          <Text className="mb-4">
            Sed proin eget nec quam pretium ornare eu est. Quisque facilisi non
            pellentesque convallis. Pulvinar accumsan nunc integer lectus metus
            fames vitae montes sit. Non mi tristique purus fames consequat.
          </Text>
          <Text className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Auctor enim nec posuere
            augue eu varius auctor. Vitae diam adipiscing faucibus tellus. Urna
            maecenas faucibus aliquet sit augue id. Nunc sit faucibus nam purus
            eget ultrices. Ipsum imperdiet odio orci odio a. Sed amet id
            lobortis pellentesque nibh tempus nunc magna. Iaculis tortor
            faucibus in laoreet maecenas. Fringilla dui volutpat lobortis non
            nec aliquam. Sit leo magna vel ullamcorper quisque amet velit sapien
            turpis. Et vehicula dui pellentesque augue vitae egestas feugiat
            morbi Ac sociis in in sit. Suspendisse vitae lacus tortor blandit
            vivamus. Velit amet dignissim mauris quam et.
          </Text>
          <Text className="text-[30px] font-semibold leading-[42px] mt-6 mb-4">
            Lorem ipsum dolor sit amet con
          </Text>
          <Image
            className="mb-4"
            src={frame2}
            alt=""
            width={770}
            height={400.48}
          />
          <Text className="mb-4">
            Lorem ipsum dolor sit amet consectetur. In amet leo dictum quis
            morbi id. Ultrices dictum eget orci odio proin ut imperdiet duis.
            Aliquet elit porta orci eget sollicitudin vulputate diam faucibus
            mauris. Lacinia mauris urna vulputate feugiat quis tellus id id
            nullam. Lectus ut nec sit orci egestas nullam cras in arcu. Ultrices
            aliquam sed ac sapien mauris felis vulputate. Lacus tincidunt mattis
            venenatis cras ut cursus.
          </Text>
          <Text className="mb-4">
            Sed proin eget nec quam pretium ornare eu est. Quisque facilisi non
            pellentesque convallis. Pulvinar accumsan nunc integer lectus metus
            fames vitae montes sit. Non mi tristique purus fames consequat.
          </Text>
          <Text className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Auctor enim nec posuere
            augue eu varius auctor. Vitae diam adipiscing faucibus tellus. Urna
            maecenas faucibus aliquet sit augue id. Nunc sit faucibus nam purus
            eget ultrices. Ipsum imperdiet odio orci odio a. Sed amet id
            lobortis pellentesque nibh tempus nunc magna. Iaculis tortor
            faucibus in laoreet maecenas. Fringilla dui volutpat lobortis non
            nec aliquam. Sit leo magna vel ullamcorper quisque amet velit sapien
            turpis. Et vehicula dui pellentesque augue vitae egestas feugiat
            morbi Ac sociis in in sit. Suspendisse vitae lacus tortor blandit
            vivamus. Velit amet dignissim mauris quam et.
          </Text>
        </div>
        {/* right */}
        <div className="w-full max-w-[340px]">
          <Text className="text-[18px] mb-3">In this article</Text>
          <div className="pl-3">
            <Text className="text-[18px] mb-3">
              Empowering Indigenous Voices through Sustainable Projects
            </Text>
            <Text className="text-[#D9D9D9] mb-3">
              The Role of Indigenous Knowledge in Climate Action
            </Text>
            <Text className="text-[#D9D9D9] mb-3">
              Carbon Markets and Biodiversity Protection
            </Text>
            <Text className="text-[#D9D9D9] mb-3">
              Community-Driven Climate Solutions
            </Text>
            <Text
              as="h2"
              className="text-[30px] leading-[42px] font-semibold mt-[40px] mb-[34px]"
            >
              You May Like
            </Text>

            <div className="flex items-center gap-[16px] mb-[28px]">
              <Image className="" src={carbon} alt="" width={99} height={98} />
              <div className="">
                <button className="px-2 py-1 rounded-[50px] text-[14px] font-inter bg-[#d9d9d931] border border-[#D9D9D94D]">
                  Carbon Economy
                </button>
                <Text className="text-[14px] leading-[21px] mt-[10px]">
                  Empowering Indigenous Economies through Carbon.
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-[16px] mb-[28px]">
              <Image
                className=""
                src={heritage}
                alt=""
                width={99}
                height={98}
              />
              <div className="">
                <button className="px-2 py-1 rounded-[50px] text-[14px] font-inter bg-[#d9d9d931] border border-[#D9D9D94D]">
                  Heritage Sustained
                </button>
                <Text className="text-[14px] leading-[21px] mt-[10px]">
                  Preserving Culture, Heritage, and Land.
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-[16px] mb-[28px]">
              <Image
                className=""
                src={resilient}
                alt=""
                width={99}
                height={98}
              />
              <div className="">
                <button className="px-2 py-1 rounded-[50px] text-[14px] font-inter bg-[#d9d9d931] border border-[#D9D9D94D]">
                  Resilient Growth
                </button>
                <Text className="text-[14px] leading-[21px] mt-[10px]">
                  Climate Resilience and Community Growth.
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-[16px] mb-[28px]">
              <Image className="" src={native} alt="" width={99} height={98} />
              <div className="">
                <button className="px-2 py-1 rounded-[50px] text-[14px] font-inter bg-[#d9d9d931] border border-[#D9D9D94D]">
                  Native Stewardship
                </button>
                <Text className="text-[14px] leading-[21px] mt-[10px]">
                  Biodiversity Protection through Indigenous Stewardship.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
