import SectionKeywordsItem from "./SectionKeywordsItem";

export default function SectionKeywords({
  onKeywordClicked,
}: {
  onKeywordClicked: (keyword: string) => void;
}) {
  const arr: string[] = [
    "Sandwich",
    "Burgers",
    "Potatoes and snacks",
    "Drinks",
    "Pizza",
    "Suchi","Sandwich",
    "Burgers",
    "Potatoes and snacks",
    "Drinks",
    "Pizza",
    "Suchi",
  ];
  return (
    <section className="relative min-h-[100px] w-full">
      <h1 className="text-[20px] font-normal leading-6 text-[#32343E] select-none">
        Recent Keywords
      </h1>

      <section className=" min-h-[62px] w-full sx:flex-wrap sx:overflow-visible gap-2.5 flex overflow-x-auto whitespace-nowrap mt-3">
        {arr.map((keyword, i) => (
          <SectionKeywordsItem
            keyword={keyword}
            key={keyword + i}
            onClick={onKeywordClicked}
          />
        ))}
      </section>
    </section>
  );
}
