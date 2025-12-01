"use client";

import { useState } from "react";
import PopFoodCard from "../foodcategory/PopFoodCard";
import FoodMenu from "./FoodMenu";
import RestaurantDescription from "./RestaurantDescription";

export default function RestPageMain() {
  const [cFood, setCFood] = useState("Sandwich");
  const arr1 = ["Chef", "Chicken", "Beef", "Grand"];
  return (
    <main className="flex flex-col mt-[24px] gap-6">
      <RestaurantDescription />
      <FoodMenu cFood={cFood} setCFood={setCFood} />
      <section>
        <h2 className="font-normal text-[20px] text-[#181C2E] mb-[19px]">
          {cFood} ({arr1.length})
        </h2>
        <section className="flex flex-wrap gap-[21px] ">
          {arr1.map((food) => (
            <PopFoodCard
              food={food + " " + cFood}
              foodCategory={cFood}
              key={food}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
