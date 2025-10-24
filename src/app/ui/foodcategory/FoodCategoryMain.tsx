"use client";

import MainRestaurantMenu from "../main/MainRestaurantMenu";
import PopFoodCard from "./PopFoodCard";

export default function FoodCategoryMain({
  foodCategory,
}: {
  foodCategory: string;
}) {
  const arr = ["Chef burger", "Chicken burger", "Beef burger", "Grand burger"];
  console.log(window.history)
  return (
    <main className="mt-[24px]">
      <section>
        <h1 className="mb-6 text-[20px] font-normal">Popular {foodCategory}</h1>
        <section className=" flex flex-wrap gap-5 w-[327px]">
          {arr.map((food) => (
            <PopFoodCard food={food} foodCategory={foodCategory} key={food}/>
          ))}
        </section>
      </section>
      <MainRestaurantMenu seeAllVisible={false} />
    </main>
  );
}
