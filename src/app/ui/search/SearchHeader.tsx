"use client";

import Image from "next/image";
import Link from "next/link";

export default function SearchHeader() {
  const n = 2;
  return (
    <header className="grid w-full grid-cols-[min-content_1fr_2fr] justify-center items-center">
      <Link
        href={"./"}
        className="w-[45px] h-[45px] bg-[#ECF0F4] rounded-4xl flex justify-center items-center cursor-pointer hover:scale-110 active:scale-95 transition-transform"
      >
        <span className="border-t-2 border-r-2 ml-1 border-[#181C2E] w-2 h-2 inline-block skew-[5deg] rotate-[-135deg]"></span>
      </Link>
      <p className="text-[17px] font-normal leading-[22px] gap-11 justify-self-center select-none">
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
    </header>
  );
}
