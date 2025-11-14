"use client";

import PopFoodCard from "@/app/ui/foodcategory/PopFoodCard";
import FavouriteBtn from "@/app/ui/foodpage/FavouriteBtn";
import GoBack from "@/app/ui/GoBack";
import { restaurants } from "@/app/ui/main/MainRestaurantMenu";
import Filter from "@/app/ui/restaurantPage/Filter";
import SectionKeywordsItem from "@/app/ui/search/SectionKeywords/SectionKeywordsItem";
import ThreeDetails from "@/app/ui/ThreeDetails";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  //   {
  //   params,
  // }: {
  //   params: Promise<{ restaurantName: string }>;
  // }
  // const { restaurantName } = await params;
  const { deliveryPrice, deliveryTime, grade } = restaurants[0];

  const arr: string[] = [
    "Sandwich",
    "Burgers",
    "Potatoes and snacks",
    "Drinks",
    "Pizza",
    "Suchi",
  ];

  const arr1 = ["Chef", "Chicken", "Beef", "Grand"];
  const [cFood, setCFood] = useState(arr[0]);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-[327px] scroll-p-0">
      {showModal && (
        <Filter
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
      <header className="flex justify-between items-center self-start">
        <GoBack />

        <h2 className="text-[17px] leading-[22px] tracking-normal mr-[60px]">
          Restaurant View
        </h2>
        <button
          type="button"
          title="more options"
          tabIndex={0}
          onClick={() => {
            setShowModal(true);
          }}
          className="w-[45px] h-[45px] bg-[#ECF0F4] justify-self-end rounded-4xl flex justify-center items-center cursor-pointer hover:scale-110 active:scale-95 transition-transform"
        >  
          <Image
            src={"/restaurants/More.png"}
            width={16}
            height={2}
            alt=""
            className=" "
          />
        </button>
      </header>
      <main className="flex flex-col mt-[24px] gap-6">
        <section className=" flex flex-col gap-[24px]">
          <div className="relative h-[150px] w-[327px] ">
            <Image
              src={"/main/RestaurantBG.png"}
              fill
              sizes="327px"
              className="object-cover rounded-4xl "
              alt="food image"
              priority={true}
            />

            <FavouriteBtn />
          </div>

          <div>
            <h1 className="font-bold text-[20px] text-[#181C2E]">
              Spicy restaurant
            </h1>
            <p className="text-[14px] font-normal leading-6 text-[#A0A5BA] w-[307px]">
              Maecenas sed diam eget risus varius blandit sit amet non magna.
              Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet.
            </p>
          </div>
          <ThreeDetails
            deliveryPrice={deliveryPrice}
            deliveryTime={deliveryTime}
            grade={grade}
          />
        </section>
        <section className=" h-[62px] w-[327px] gap-2.5 flex overflow-x-auto whitespace-nowrap mt-3">
          {arr.map((keyword) => (
            <SectionKeywordsItem
              keyword={keyword}
              isSelected={keyword === cFood}
              key={keyword}
              onClick={(keyword) => {
                setCFood(keyword);
              }}
            />
          ))}
        </section>

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
    </div>
  );
}
