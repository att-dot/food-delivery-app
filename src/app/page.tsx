"use client";

import Input from "./ui/Input";
import MainHeader from "./ui/main/MainHeader";
import MainRestaurantMenu from "./ui/main/MainRestaurantMenu";
import MainCategoryMenu from "./ui/main/MainCategoryMenu";
import MainMain from "./ui/main/MainMain";

export default function Page({}) {
  const tags = ["Burger", "Chiken", "Riche", "Wings"];
  return (
    <>
      <div className="grid w-[375px] overflow-hidden justify-self-center box-border pl-6 pt-[5px] mt-[50px]">
        <MainHeader />
        
        <MainMain />
      </div>
    </>
  );
}
