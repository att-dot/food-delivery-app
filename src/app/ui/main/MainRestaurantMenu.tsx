import Link from "next/link";
import MainRestaurantCard, { Restaurant } from "./MainRestaurantCard";

export default function MainRestaurantMenu() {
  const restaurants: Restaurant[] = [
    {
      name: "Rose Garden Restaurant",
      tags: ["Burger", "Chiken", "Riche", "Wings"],
      deliveryTime: 20 * 60,
      deliveryPrice: "Free",
      grade: 4.7,
      imgURL: "",
    },
    {
      name: "Spicy Burger Shop",
      tags: ["Burger", "Chiken", "Riche", "Wings"],
      deliveryTime: 10 * 60,
      deliveryPrice: 100,
      grade: 4.3,
      imgURL: "",
    },
    {
      name: "Cafenio Coffee Club",
      tags: ["Burger", "Chiken", "Riche", "Wings"],
      deliveryTime: 34 * 60,
      deliveryPrice: 300,
      grade: 4,
      imgURL: "",
    },
  ];

  return (
    <>
      <section className="grid grid-cols-[2fr_1fr] w-[327px] grid-rows-[auto_auto] gap-y-[20px] mt-8">
        <h1 className=" text-[20px] text-[#32343E]">Open Restaurants</h1>
        <Link
          className="p-[0px_10px] rounded-[15px] hover:bg-[#f0f0f0] active:opacity-80 active:scale-95 transition-all text-[333333] flex items-center gap-2.5 justify-self-end"
          href={""}
        >
          See All
          <span className="border-t-2 border-r-2 border-[#A0A5BA] w-2 h-2 inline-block skew-[5deg] rotate-45"></span>
        </Link>
        <section className="col-span-2 flex gap-[28px] flex-col">
          {restaurants.map((restaurant) => (
            <MainRestaurantCard {...restaurant} key={restaurant.name} />
          ))}
        </section>
      </section>
    </>
  );
}
