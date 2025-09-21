"use client";

import Image from "next/image";
import Input from "../ui/Input";

export default function Page({}) {
  const n = 2;
  const arr = [
    "Sandwich",
    "Burgers",
    "Potatoes and snacks",
    "Drinks",
    "Pizza",
    "Suchi",
  ];
  return (
    <div className="grid w-[327px] mt-[50px] grid-rows-[50px_110px_114px] justify-self-center">
      <div className="grid w-[327px] grid-cols-[min-content_1fr_2fr] justify-center items-center">
        <div className="w-[45px] h-[45px] bg-[#ECF0F4] rounded-4xl flex justify-center items-center">
          <span className="border-t-2 border-r-2 ml-1 border-[#181C2E] w-2 h-2 inline-block skew-[5deg] rotate-[-135deg]"></span>
        </div>
        <p className="text-[17px] font-normal leading-[22px] gap-11 justify-self-center">
          Search
        </p>
        <div className="relative w-[45px] h-[45px] justify-self-end">
          <Image
            src={"/main/Cart.png"}
            width={45}
            height={45}
            alt="cart button"
          />
          <div className="absolute bg-[#FF7622]  box-border h-[25px] w-[25px] rounded-2xl text-center top-[-4px] right-0">
            <div className="text-white font-bold text-[16px]">{n}</div>
          </div>
        </div>
      </div>
      <Input className="m-[24px_0px]" />
      <div className="relative">
        <h1 className="text-[20px] font-normal leading-6">Recent Keywords</h1>

        <div className=" h-[62px] w-[327px] gap-2.5 flex overflow-x-auto whitespace-nowrap mt-3">
          {arr.map((el) => (
            <div
              className="p-[14px_20px] leading-5 box-border h-[46px] border w-max border-[#EDEDED] rounded-4xl  origin-left flex items-center"
              key={el}
            >
              {el}
            </div>
          ))}

          {/* <button
            type="button"
            title="scroll recent keywords"
            onClick={() => {}}
            className="w-7 h-7 bg absolute right-0 bg-[#ECF0F4] text-center flex items-center justify-center rounded-2xl hover:scale-150 hover:drop-shadow-2xl backdrop-blur-3xl border-[#858585] transition-all"
          >
            <span className="border-t-2 border-r-2  border-[#181C2E] w-2 h-2 inline-block skew-[5deg] rotate-[45deg]"></span>
          </button> */}
        </div>
      </div>
    </div>
  );
}
