"use client";

import ThreeDetails from "../ThreeDetails";
import { restaurants } from "../main/MainRestaurantMenu";
import PizzaForm from "./PizzaForm";
import Ingridients from "./Ingridients";
import AddToCart from "./AddToCart";

import FoodPicture from "./FoodPicture";

import RestaurantBtn from "./RestaurantBtn";
import { useRef, useState } from "react";

export default function FoodPageMain() {
  const { deliveryPrice, deliveryTime, grade } = restaurants[0];
  const restaNameURL = "uttora-coffe-house";
  const [PFormData, setPFormData] = useState<FormData | undefined>(undefined);
  const ref = useRef(null);

  return (
    <main className="flex flex-col mt-[44px] gap-6">
      <FoodPicture />
      <RestaurantBtn restaNameURL={restaNameURL} />
      <div>
        <h1 className="font-bold text-[20px] text-[#181C2E]">
          Pizza calzone european
        </h1>
        <p className="text-[14px] font-normal leading-6 text-[#A0A5BA] w-[307px]">
          Prosciutto e funghi is a pizza variety that is topped with tomato
          sauce.
        </p>
      </div>
      <ThreeDetails
        deliveryPrice={deliveryPrice}
        deliveryTime={deliveryTime}
        grade={grade}
      />
      <form
        ref={ref}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(new FormData(e.currentTarget));
          for (let [k, v] of new FormData(e.currentTarget).entries()) {
            console.log(k, v);
          }
        }}
      >
        <PizzaForm ref={ref} setPFormData={setPFormData} />
        <Ingridients />
        <AddToCart disabled={PFormData?.has("size") ? false : true} />
      </form>
    </main>
  );
}
