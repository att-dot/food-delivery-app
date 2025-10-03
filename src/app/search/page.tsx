"use client";
import Input from "../ui/Input";
import SearchHeader from "../ui/search/SearchHeader";
import SectionKeywords from "../ui/search/SectionKeywords/SectionKeywords";
import SectionRestaurants from "../ui/search/SectionRestaurants/SectionRestaurants";
import SectionPopFood from "../ui/search/SectionPopFood/SectionPopFood";

export default function Page({}) {
  return (
    <div className="flex flex-col w-[327px] mt-[50px] justify-self-center">
      <SearchHeader />
      <Input className="m-[24px_0px]" />
      <main>
        <SectionKeywords />
        <SectionRestaurants />
        <SectionPopFood />
      </main>
    </div>
  );
}
