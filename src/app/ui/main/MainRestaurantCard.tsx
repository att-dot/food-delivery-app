import Image from "next/image";

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
  imgURL,
}: Restaurant) {
  return (
    <>
      <article className="h-[228px] w-full">
        <div className="w-full h-[137px] relative">
          <Image
            src={"/main/RestaurantBG.png"}
            fill
            alt="restaurant picture"
            sizes="375px"
            className="relative object-cover rounded-[10px]"
          />
        </div>
        <p className="text-[#181C2E] text-[20px] mt-[8px] leading-[24px]">
          {name}
        </p>

        <div className="text-[#A0A5BA] text-[14px] mt-[5px] leading-4">
          {tags.join(" - ")}
        </div>
        <div className="flex gap-6 mt-[14px]">
          <div className="text-[16px] font-bold text-[#181C2E] flex gap-[4px] items-center">
            <Image
              src={"/main/Star.png"}
              width={20}
              height={20}
              alt="restaurant rating"
              className="w-[20px] h-[20px]"
            />
            <span>{grade}</span>
          </div>

          <div className="text-[16px] font-bold text-[#181C2E] flex gap-[9px] items-center">
            <Image
              src={"/main/car.png"}
              width={23}
              height={16}
              alt="restaurant delivery cost"
              className="w-[23px] h-4"
            />
            <span className="text-[14px] font-normal">{typeof deliveryPrice === "string"? deliveryPrice: "$" + deliveryPrice}</span>
          </div>

          <div className="text-[16px] font-bold text-[#181C2E] flex gap-[9px] items-center">
            <Image
              src={"/main/Clock.png"}
              width={20}
              height={20}
              alt="Time"
              className="h-5 w-5"
            />
            <span className="text-[14px] font-normal">
              {Math.floor(deliveryTime / 60)} min
            </span>
          </div>
        </div>
      </article>
    </>
  );
}
