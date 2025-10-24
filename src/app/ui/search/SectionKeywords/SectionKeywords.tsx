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
    "Suchi",
  ];
  return (
    <section className="relative h-[100px]">
      <h1 className="text-[20px] font-normal leading-6 text-[#32343E] select-none">
        Recent Keywords
      </h1>

      <section className=" h-[62px] w-[327px] gap-2.5 flex overflow-x-auto whitespace-nowrap mt-3">
        {arr.map((keyword) => (
          <SectionKeywordsItem
            keyword={keyword}
            key={keyword}
            onClick={onKeywordClicked}
          />
        ))}
      </section>
    </section>
  );
}
