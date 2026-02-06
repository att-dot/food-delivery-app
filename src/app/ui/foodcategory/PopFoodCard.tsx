import Image from "next/image";
import Link from "next/link";

export default function PopFoodCard({
  food,
  foodCategory,
}: {
  food: string;
  foodCategory: string;
}) {
  return (
    <Link
      onClick={(e) => {
        console.log(e);
      }}
      href={`/food/${food}`}
      className="  w-36.75 h-45.5  drop-shadow-xl rounded-3xl relative flex flex-col items-center justify-end cursor-pointer hover:scale-105 active:scale-95 active:opacity-90 transition-all"
    >
      <div className="category-bg bg-[#ffffff] w-38.25 h-32.5 flex items-end justify-self-">
        <div className="flex flex-col grid-cols-[1fr_1fr] w-full box-border p-[0px_12px_15px_12px]">
          <p className="text-[15px] text-[#32343E] font-bold col-span-2 tracking-[-0.33px]">
            {food.substring(0, 14).trim() + (food.length > 13 ? "..." : "")}
          </p>
          <p className="text-[13px] text-[#646982]">
            {(foodCategory + " restaurant").substring(0, 14).trim() +
              ((foodCategory + " restaurant").length > 13 ? "..." : "")}
          </p>
          <div className=" flex justify-between items-center">
            <p className="text-[16px] text-[#32343E] tracking-[-0.33px] font-black">
              ${100}
            </p>
            <button
              type="submit"
              onClick={(e) => {
                e.stopPropagation();
              }}
              className=""
            >
              <Image
                src={"/foodcategory/Add.png"}
                height={30}
                width={30}
                alt="add to the cart"
                className="size-7.5"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(9347892);
                }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="w-30.5 h-21 absolute top-0">
        <Image
          src={"/main/CategoryBG.jpg"}
          sizes="640px"
          fill
          alt="category picture"
          className="relative object-cover rounded-2xl"
        />
      </div>
    </Link>
  );
}
