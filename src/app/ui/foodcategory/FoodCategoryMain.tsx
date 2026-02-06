"use client";

import MainRestaurantMenu from "../main/MainRestaurantMenu";
import PopFoodCard from "./PopFoodCard";

export default function FoodCategoryMain({
  foodCategory,
}: {
  foodCategory: string;
}) {
  const arr = ["Chef burger", "Chicken burger", "Beef burger", "Grand burger"];
  if (foodCategory.includes("%20")) {
    foodCategory = foodCategory.split("%20").join(" ");

  }
  return (
    <main className="mt-6">
      <section className="flex flex-col">
        <h1 className="mb-6 text-[20px] font-normal">Popular {foodCategory}</h1>
        <section className=" flex flex-wrap gap-5 w-[max(327px,100%)] justify-center">
          {arr.map((food, i) => (
            <PopFoodCard
              food={food}
              foodCategory={foodCategory}
              key={food + i}
            />
          ))}
        </section>
      </section>
      <MainRestaurantMenu seeAllVisible={false} />
    </main>
  );
}
