import Link from "next/link";
import MainCategoryCard from "./MainCategoryCard";

type CategoriesType = Array<{ foodtype: string; startingPrice: number }>;

export default function MainCategoryMenu() {
  const categories: CategoriesType = [
    {
      foodtype: "Burger",
      startingPrice: 40,
    },
    {
      foodtype: "Pizza",
      startingPrice: 70,
    },
    {
      foodtype: "Potatoes",
      startingPrice: 15,
    },
    {
      foodtype: "Burger",
      startingPrice: 40,
    },
    {
      foodtype: "Pizza",
      startingPrice: 70,
    },
    {
      foodtype: "Potatoes",
      startingPrice: 15,
    },
    {
      foodtype: "Burger",
      startingPrice: 40,
    },
  ];
  return (
    <>
      <section className="grid grid-cols-2 w-full grid-rows-[auto_auto] gap-y-4.5 mt-8">
        <h1 className="text-[20px] text-[#32343E]">All Categories</h1>
        <Link
          href={"/food-category/burger"}
          aria-label="see all restaurants"
          className="text-[333333] p-[0px_10px] rounded-[15px] hover:bg-[#f0f0f0] active:opacity-80 active:scale-95 transition-all  flex items-center gap-2.5 justify-self-end"
        >
          See All
          <span className="border-t-2 border-r-2 border-[#A0A5BA] w-2 h-2 inline-block skew-[5deg] rotate-45"></span>
        </Link>
        <section className="col-span-2 flex gap-3.5 pb-8 sx:pl-2.5 overflow-x-scroll md:justify-center md:flex-wrap md:overflow-auto overflow-y-hidden w-[max(100%,337px)] -translate-x-2.5">
          {categories.map((el, i) => (
            <MainCategoryCard {...el} key={el.foodtype + i} />
          ))}
        </section>
      </section>
    </>
  );
}
