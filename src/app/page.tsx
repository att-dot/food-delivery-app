"use client";

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

        <MainCategoryMenu />
        <MainRestaurantMenu />
      </div>
    </>
  );
}
