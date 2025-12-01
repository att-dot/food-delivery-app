import Image from "next/image";
import FavouriteBtn from "../foodpage/FavouriteBtn";
import ThreeDetails from "../ThreeDetails";
import { restaurants } from "../main/MainRestaurantMenu";

export default function RestaurantDescription() {
    const { deliveryPrice, deliveryTime, grade } = restaurants[0];
  return (
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
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        </p>
      </div>
      <ThreeDetails
        deliveryPrice={deliveryPrice}
        deliveryTime={deliveryTime}
        grade={grade}
      />
    </section>
  );
}
