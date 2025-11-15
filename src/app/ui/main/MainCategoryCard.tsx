import Image from "next/image";
import Link from "next/link";

export default function MainCategoryCard({
  foodtype,
  startingPrice,
}: {
  foodtype: string;
  startingPrice: number;
}) {
  return (
    <>
      <Link href={`/food-category/${foodtype}`} className="  w-[147px] h-[182px] pt-[px] drop-shadow-xl rounded-3xl relative flex flex-col items-center justify-end first:ml-[10px] last:mr-[15px] cursor-pointer hover:scale-105 active:scale-95 active:opacity-90 transition-all">
        <div className="category-bg bg-[#ffffff] w-[147px] h-[144px] flex items-end justify-self-">
          <div className="grid grid-cols-[1fr_1fr] w-full box-border p-[0px_12px_15px_12px]">
            <p className="text-[18px] text-[#32343E] font-bold col-span-2">
              {foodtype}
            </p>
            <p className="text-[14px] text-[#646982]">Starting</p>
            <p className="text-[16px] text-[#32343E] tracking-[-0.33px] justify-self-end">
              ${startingPrice}
            </p>
          </div>
        </div>
        <div className="w-[122px] h-[104px] absolute top-[10] ">
          <Image
            src={"/main/CategoryBG.jpg"}
            sizes="640px"
            fill
            alt="category picture"
            className="relative object-cover rounded-2xl"
          />
        </div>
      </Link >
    </>
  );
}
