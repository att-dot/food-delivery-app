import Image from "next/image";
import Link from "next/link";

export default function FoodCategoryHeader({
  foodCategory,
}: {
  foodCategory: string;
}) {
  const categories = [
    "Pizza",
    "Snacks",
    "Drinks",
    "Burgers",
    "Ice creams",
    "Boxes",
  ];
  foodCategory.includes("%20")
    ? (foodCategory = foodCategory.split("%20").join(" "))
    : "";
  return (
    <header className="flex ">
      <Link
        href={"/"}
        className="w-[45px] h-[45px] mr-[17px] bg-[#ECF0F4] rounded-4xl flex justify-center items-center cursor-pointer hover:scale-110 active:scale-95 transition-transform"
      >
        <span className="border-t-2 border-r-2 ml-1 border-[#181C2E] w-2 h-2 inline-block skew-[5deg] rotate-[-135deg]"></span>
      </Link>

      <label
        htmlFor="select-food-category"
        className="flex justify-between relative group  mr-[61px] active: items-center gap-[7px] w-[102px] h-[45px] box-border p-[16px_17px] rounded-4xl border border-[#ECF0F4] text-[12px] font-bold text-[#181C2E] select-none"
      >
        <input
          type="checkbox"
          className="hidden peer"
          id="select-food-category"
        />
        {foodCategory.length > 7
          ? foodCategory.substring(0, 6).toUpperCase() + "..."
          : foodCategory.toUpperCase()}

        <div className="group-hover:border-l-[#c2813b] h-0 rotate-[-90deg] inline-block peer-checked:rotate-[90deg] border-[6px_0px_6px_7px] border-l-[#F58D1D] border-transparent w-2"></div>
        <section className="z-50 absolute top-[50] box-border p-[18px_0px] left-0 h-auto w-[200px] peer-checked:block hidden bg-[#98a8b836] rounded-4xl overflow-hidden backdrop-blur-2xl">
          {categories.map((category) => (
            <Link
              href={`./${category}`}
              className={
                "text-xl hover:bg-[#77849136] p-[5px_18px] block " +
                (category.toLowerCase() === foodCategory.toLowerCase()
                  ? "bg-[#42678d36]"
                  : "")
              }
              key={category}
            >
              {category.toUpperCase()}
            </Link>
          ))}
        </section>
      </label>

      <Image
        src={"/foodcategory/SearchBlackbg.png"}
        width={46}
        height={46}
        alt="search"
        className="mr-[10px]"
      />
      <Image
        src={"/foodcategory/Filter.png"}
        width={46}
        height={46}
        alt="search"
      />
    </header>
  );
}
