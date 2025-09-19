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
  ];
  return (
    <>
      <section className="grid grid-cols-2 w-[327px] grid-rows-[auto_auto] gap-y-[56px] mt-8">
        <h1 className="text-[20px] text-[#32343E]">All Categories</h1>
        <p className="text-[333333] flex items-center gap-2.5 justify-self-end">
          See All
          <span className="border-t-2 border-r-2 border-[#A0A5BA] w-2 h-2 inline-block skew-[5deg] rotate-45"></span>
        </p>
        <section
          className="col-span-2 flex gap-[14px] pb-8"
        >
          {categories.map((el) => (
            <MainCategoryCard {...el} key={el.foodtype} />
          ))}
        </section>
      </section>
    </>
  );
}
