"use client";

import Image from "next/image";
import Input from "./ui/Input";
import MainHeader from "./ui/main/MainHeader";
import MainRestaurantMenu from "./ui/main/MainRestaurantMenu";
import MainCategoryMenu from "./ui/main/MainCategoryMenu";

export default function Page({}) {
  const tags = ["Burger", "Chiken", "Riche", "Wings"];
  return (
    <>
      <div className="grid w-[375px] overflow-hidden justify-self-center box-border pl-6 pt-[5px] mt-[50px]">
        <MainHeader />
        <p className="text-[16px] mt-6">
          Hey Halal, <span className="font-bold">Good Afternoon!</span>
        </p>
        <Input className={"mt-4"} />
        {/* <section className="grid grid-cols-2 w-[327px] grid-rows-[auto_auto] gap-y-[56px] mt-8">
          <h1 className="text-[20px] text-[#32343E]">All Categories</h1>
          <p className="text-[333333] flex items-center gap-2.5 justify-self-end">
            See All
            <span className="border-t-2 border-r-2 border-[#A0A5BA] w-2 h-2 inline-block skew-[5deg] rotate-45"></span>
          </p>
          <section className="col-span-2 flex gap-[14px] ">
            <article className=" w-[147px] h-[144px] drop-shadow-xl rounded-3xl relative flex flex-col items-center">
              <div className="category-bg bg-[#ffffff] w-[147px] h-[144px] flex items-end">
                <div className="grid grid-cols-[1fr_1fr] w-full box-border p-[0px_12px_15px_12px]">
                  <p className="text-[18px] text-[#32343E] font-bold col-span-2">
                    Burger
                  </p>
                  <p className="text-[14px] text-[#646982]">Starting</p>
                  <p className="text-[16px] text-[#32343E] tracking-[-0.33px] justify-self-end">
                    $40
                  </p>
                </div>
              </div>
              <div className="w-[122px] h-[104px] bg-[#98A8B8] opacity-75 rounded-2xl absolute top-[-28] "></div>
            </article>
            <article className=" w-[147px] h-[144px] drop-shadow-xl rounded-3xl relative flex flex-col items-center">
              <div className="category-bg bg-[#ffffff] w-[147px] h-[144px] flex items-end">
                <div className="grid grid-cols-[1fr_1fr] w-full box-border p-[0px_12px_15px_12px]">
                  <p className="text-[18px] text-[#32343E] font-bold col-span-2">
                    Pizza
                  </p>
                  <p className="text-[14px] text-[#646982]">Starting</p>
                  <p className="text-[16px] text-[#32343E] tracking-[-0.33px] justify-self-end">
                    $70
                  </p>
                </div>
              </div>
              <div className="w-[122px] h-[104px] bg-[#98A8B8] opacity-75 rounded-2xl absolute top-[-28] "></div>
            </article>
            <article className=" w-[147px] h-[144px] drop-shadow-xl rounded-3xl relative flex flex-col items-center">
              <div className="category-bg bg-[#ffffff] w-[147px] h-[144px] flex items-end">
                <div className="grid grid-cols-[1fr_1fr] w-full box-border p-[0px_12px_15px_12px]">
                  <p className="text-[18px] text-[#32343E] font-bold col-span-2">
                    Pizza
                  </p>
                  <p className="text-[14px] text-[#646982]">Starting</p>
                  <p className="text-[16px] text-[#32343E] tracking-[-0.33px] justify-self-end">
                    $70
                  </p>
                </div>
              </div>
              <div className="w-[122px] h-[104px] bg-[#98A8B8] opacity-75 rounded-2xl absolute top-[-28] "></div>
            </article>
          </section>
        </section> */}

        {/* <section className="grid grid-cols-[2fr_1fr] w-[327px] grid-rows-[auto_auto] gap-y-[20px] mt-8">
          <h1 className="text-[20px] text-[#32343E]">Open Restaurants</h1>
          <p className="text-[333333] flex items-center gap-2.5 justify-self-end">
            See All
            <span className="border-t-2 border-r-2 border-[#A0A5BA] w-2 h-2 inline-block skew-[5deg] rotate-45"></span>
          </p>
          <article className="col-span-2 h-[228px]">
            <div className="w-full h-[137px] rounded-[10px] bg-[#98A8B8] opacity-35"></div>
            <p className="text-[#181C2E] text-[20px] mt-[8px] leading-[24px]">
              Rose Garden Restaurant
            </p>

            <div className="text-[#A0A5BA] text-[14px] mt-[5px] leading-4">
              {tags.join(" - ")}
            </div>
            <div className="flex gap-6 mt-[14px]">
              <div className="text-[16px] font-bold text-[#181C2E] flex gap-[4px]">
                <Image
                  src={"/main/Star.png"}
                  width={20}
                  height={20}
                  alt="restaurant rating"
                  className="w-[20px] h-[20px]"
                />
                4.7
              </div>

              <div className="text-[16px] font-bold text-[#181C2E] flex gap-[9px] items-center">
                <Image
                  src={"/main/Car.png"}
                  width={23}
                  height={16}
                  alt="restaurant delivery cost"
                  className="w-[23px] h-4"
                />
                <span>Free</span>
              </div>

              <div className="text-[16px] font-bold text-[#181C2E] flex gap-[9px] items-center">
                <Image
                  src={"/main/Clock.png"}
                  width={20}
                  height={20}
                  alt="Time"
                  className="h-5 w-5"
                />
                <span>20 min</span>
              </div>
            </div>
          </article>
        </section> */}
        <MainCategoryMenu />
        <MainRestaurantMenu />
      </div>
    </>
  );
}
