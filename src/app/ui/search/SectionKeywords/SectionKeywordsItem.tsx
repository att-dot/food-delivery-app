"use client";

export default function SectionKeywordsItem({
  keyword,
  onClick,
  isSelected = false,
}: {
  keyword: string;
  onClick: (keyword: string) => void;
  isSelected?: boolean
}) {
  return (
    <article
      className={"p-[14px_20px] leading-5 box-border h-[46px] border w-max border-[#EDEDED] rounded-4xl origin-left flex items-center cursor-pointer hover:bg-[#f39836] active:bg-[#bd5a1c] active:text-white hover:text-white hover:text-[16px] hover:font-normal transition-all " + (isSelected? ' text-[16px] bg-[#F58D1D] font-normal text-white': '')}
      key={keyword}
      onClick={() => {
        onClick(keyword);
      }}
    >
      {keyword}
    </article>
  );
}
