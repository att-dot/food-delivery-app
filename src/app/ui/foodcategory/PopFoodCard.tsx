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
      className="  w-[147px] h-[182px]  drop-shadow-xl rounded-3xl relative flex flex-col items-center justify-end cursor-pointer hover:scale-105 active:scale-95 active:opacity-90 transition-all"
    >
      <div className="category-bg bg-[#ffffff] w-[153px] h-[130px] flex items-end justify-self-">
        <div className="flex flex-col grid-cols-[1fr_1fr] w-full box-border p-[0px_12px_15px_12px]">
          <p className="text-[15px] text-[#32343E] font-bold col-span-2 tracking-[-0.33px]">
            {food}
          </p>
          <p className="text-[13px] text-[#646982]">
            {foodCategory + " restaurant"}
          </p>
          <div className=" flex justify-between items-center">
            <p className="text-[16px] text-[#32343E] tracking-[-0.33px] font-black">
              ${Math.floor(Math.random() * 100)}
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
                className="size-[30px]"
                onClick={(e) => {
                e.stopPropagation();
                console.log(9347892)
                
              }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="w-[122px] h-[84px] absolute top-[0]">
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
