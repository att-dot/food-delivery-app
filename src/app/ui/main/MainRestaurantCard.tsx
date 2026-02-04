import Image from "next/image";
import Link from "next/link";
import ThreeDetails from "../ThreeDetails";

export interface Restaurant {
  name: string;
  tags: string[];
  deliveryTime: number;
  deliveryPrice: string | number;
  grade: number;
  imgURL: string;
}

export default function MainRestaurantCard({
  name,
  tags,
  deliveryPrice,
  deliveryTime,
  grade,

}: Restaurant) {
  return (
    <>
      <Link
        href={`/restaurants/${name}`}
        className="h-57 w-[min(100%,327px)] cursor-pointer hover:scale-105 active:scale-95 active:opacity-90 transition-all"
      >
        <div className="h-34.25 relative size-81.75">
          <Image
            src={"/main/RestaurantBG.png"}
            fill
            alt="restaurant picture"
            sizes="375px"
            className="relative object-cover rounded-[10px] "
          />
        </div>
        <p className="text-[#181C2E] text-[20px] mt-2 leading-6">
          {name}
        </p>

        <div className="text-[#A0A5BA] text-[14px] mt-1.25 leading-4">
          {tags.join(" - ")}
        </div>
        
        <ThreeDetails
          deliveryPrice={deliveryPrice}
          deliveryTime={deliveryTime}
          grade={grade}
          className="mt-3.5"
        />
      </Link>
    </>
  );
}
