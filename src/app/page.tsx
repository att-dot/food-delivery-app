"use client";

import Input from "./ui/Input";
import MainHeader from "./ui/main/MainHeader";

export default function Page({}) {
  return (
    <>
      <div className="flex flex-col w-[375px]">
        <MainHeader />
        <p className="text-[16px]">
          Hey Halal, <span className="font-bold">Good Afternoon!</span>
        </p>
        <Input />
        <div className="grid grid-cols-2 w-[327px] grid-rows-[auto_auto] gap-y-[56px]">
          <h1 className="text-[20px] text-[#32343E]">All Categories</h1>
          <p className="text-[333333] flex items-center gap-2.5 justify-self-end">
            See All
            <span className="border-t-2 border-r-2 border-[#A0A5BA] w-2 h-2 inline-block skew-[5deg] rotate-45"></span>
          </p>
          <div className="col-span-2 flex gap-[14px] ">
            <div className=" w-[147px] h-[144px] drop-shadow-xl rounded-3xl relative flex flex-col items-center">
              <div className="category-bg bg-[#ffffff] w-[147px] h-[144px]"></div>
              <div className="w-[122px] h-[104px] bg-[#98A8B8] opacity-75 rounded-2xl absolute top-[-28] "></div>
            </div>
            <div className=" w-[147px] h-[144px] drop-shadow-xl rounded-3xl relative flex flex-col items-center">
              <div className="category-bg bg-[#ffffff] w-[147px] h-[144px]"></div>
              <div className="w-[122px] h-[104px] bg-[#98A8B8] opacity-75 rounded-2xl absolute top-[-28] "></div>
            </div>
            <div className=" w-[147px] h-[144px] drop-shadow-xl rounded-3xl relative flex flex-col items-center">
              <div className="category-bg bg-[#ffffff] w-[147px] h-[144px]"></div>
              <div className="w-[122px] h-[104px] bg-[#98A8B8] opacity-75 rounded-2xl absolute top-[-28] "></div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
