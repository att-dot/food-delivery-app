"use client";

import Input from "./ui/Input";
import MainHeader from "./ui/main/MainHeader";
import MainRestaurantMenu from "./ui/main/MainRestaurantMenu";
import MainCategoryMenu from "./ui/main/MainCategoryMenu";
import MainMain from "./ui/main/MainMain";
import Link from "next/link";

export default function Page({}) {
  const tags = ["Burger", "Chiken", "Riche", "Wings"];
  return (
    <>
      <div className=" hidden absolute top-[0px] w-full h-full  backdrop-blur-2xl z-50 flex flex-col justify-center items-center gap-7">
        <Link href={"./search"} className="text-7xl drop-shadow-xl font-extrabold text-[#111]">Search</Link>
        <Link href={"./search"} className="text-7xl drop-shadow-xl font-extrabold text-[#111]">Search</Link>
        <Link href={"./search"} className="text-7xl drop-shadow-xl font-extrabold text-[#111]">Search</Link>
        <Link href={"./search"} className="text-7xl drop-shadow-xl font-extrabold text-[#111]">Search</Link>
      </div>
      <div className="grid w-[375px] overflow-hidden justify-self-center box-border pl-6 pt-[5px] mt-[50px]">
        <MainHeader />

        <MainMain />
      </div>
    </>
  );
}
