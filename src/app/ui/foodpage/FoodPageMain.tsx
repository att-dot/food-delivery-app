import ThreeDetails from "../ThreeDetails";
import { restaurants } from "../main/MainRestaurantMenu";
import PizzaForm from "./PizzaForm";
import Ingridients from "./Ingridients";
import AddToCart from "./AddToCart";

import FoodPicture from "./FoodPicture";

import RestaurantBtn from "./RestaurantBtn";

export default function FoodPageMain() {
  const { deliveryPrice, deliveryTime, grade } = restaurants[0];
  const restaNameURL = "uttora-coffe-house";
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
      <form>
        <PizzaForm />
        <Ingridients />
        <AddToCart />
      </form>
    </main>
  );
}
