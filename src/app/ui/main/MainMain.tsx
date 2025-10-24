import { ChangeEvent, useState } from "react";
import Input from "../Input";
import MainCategoryMenu from "./MainCategoryMenu";
import MainRestaurantMenu from "./MainRestaurantMenu";

export default function MainMain({}) {
  const [inputValue, setInputValue] = useState("");
  return (
    <main>
      <p className="text-[16px] mt-6">
        Hey Halal, <span className="font-bold">Good Afternoon!</span>
      </p>
      <Input
        className={"mt-4"}
        value={inputValue}
        setValue={setInputValue}
        
      />

      <MainCategoryMenu />
      <MainRestaurantMenu seeAllVisible/>
    </main>
  );
}
