import SectionKeywordsItem from "../search/SectionKeywords/SectionKeywordsItem";

export default function FoodMenu({
  cFood,
  setCFood,
}: {
  cFood: string;
  setCFood: (keyword: string) => void;
}) {
  const arr: string[] = [
    "Sandwich",
    "Burgers",
    "Potatoes and snacks",
    "Drinks",
    "Pizza",
    "Suchi",
  ];
  return (
    <section className=" h-[62px] w-[327px] gap-2.5 flex overflow-x-auto whitespace-nowrap mt-3">
      {arr.map((keyword) => (
        <SectionKeywordsItem
          keyword={keyword}
          isSelected={keyword === cFood}
          key={keyword}
          onClick={(keyword) => {
            setCFood(keyword);
          }}
        />
      ))}
    </section>
  );
}
