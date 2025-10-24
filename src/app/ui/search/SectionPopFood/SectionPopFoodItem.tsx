import Image from "next/image";

export default function SectionPopFoodItem({
  food,
}: {
  food: {
    type: string;
    restaurant: string;
  };
}) {
  return (
    <article className=" w-[153px] h-[102px] drop-shadow-xl rounded-3xl relative flex flex-col items-center hover:scale-105 cursor-pointer active:opacity-90 active:scale-95 transition-transform">
      <div className="category-bg bg-[#ffffff] w-[147px] h-[144px] flex items-end">
        <div className="w-full box-border p-[0px_12px_15px_12px]">
          <p className="text-[15px] tracking-[-0.33px] text-[#32343E] font-bold">
            {food.type}
          </p>
          <p className="text-[13px] tracking-[-0.33px] text-[#646982] font-normal">
            {food.restaurant}
          </p>
        </div>
      </div>
      <div className="w-[122px] h-[84px] absolute top-[-42px] ">
        <Image
          src={"/main/CategoryBG.jpg"}
          sizes="640px"
          fill
          alt="category picture"
          className="relative object-fill rounded-2xl"
        />
      </div>
    </article>
  );
}
