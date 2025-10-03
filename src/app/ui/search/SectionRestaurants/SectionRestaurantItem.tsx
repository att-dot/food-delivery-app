import Image from "next/image";

export interface RestaurantView {
  name: string;
  rating: number;
  imgURL: string;
}

export default function SectionRestaurantItem({
  restaurant,
}: {
  restaurant: RestaurantView;
}) {
  return (
    <article
      key={restaurant.name}
      className="flex border-b hover:scale-105 transition-[scale_opacity] active:opacity-90 cursor-pointer border-[#EBEBEB] pb-3.5 not-first:mt-3.5"
    >
      <Image
        src={restaurant.imgURL}
        width={375}
        height={321}
        alt="restaurant preview image"
        className="w-[60] h-[50px] rounded-[8px] mr-2.5"
      />
      <div className="grid grid-rows-2 grid-cols-[15px_auto] items-center gap-x-0.5">
        <p className="font-normal col-span-2 text-[16px] tracking-[-0.33px] text-[#32343E]">
          {restaurant.name}
        </p>
        <Image
          src={"/main/Star.png"}
          width={20}
          height={20}
          alt="rating"
          className="w-[15px] h-[15px]"
        />
        <p className="font-normal text-[16px] text-[#181C2E]">
          {restaurant.rating}
        </p>
      </div>
    </article>
  );
}
