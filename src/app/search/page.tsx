"use client";
import Input from "../ui/Input";
import SearchHeader from "../ui/search/SearchHeader";
import SectionKeywords from "../ui/search/SectionKeywords/SectionKeywords";
import SectionRestaurants from "../ui/search/SectionRestaurants/SectionRestaurants";
import SectionPopFood from "../ui/search/SectionPopFood/SectionPopFood";
import { useState } from "react";

export default function Page({}) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="flex flex-col w-[327px] mt-[50px] justify-self-center">
      <SearchHeader />

      <Input
        className="m-[24px_0px]"
        value={inputValue}
        setValue={setInputValue}
      />
      <main>
        <SectionKeywords
          onKeywordClicked={(keyword: string) => setInputValue(keyword)}
        />
        <SectionRestaurants />
        <SectionPopFood />
      </main>
    </div>
  );
}
