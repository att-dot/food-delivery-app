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
    <div className="flex flex-col items-center w-[max(327px,_min(768px,_100%))] mt-[50px] justify-self-center">
      <SearchHeader />

      <Input
        className="m-[24px_0px]"
        value={inputValue}
        setValue={setInputValue}
      />
      <main className="w-full">
        <SectionKeywords
          onKeywordClicked={(keyword: string) => setInputValue(keyword)}
        />
        <SectionRestaurants />
        <SectionPopFood />
      </main>
    </div>
  );
}
