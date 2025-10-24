"use client";

export default function SectionKeywordsItem({
  keyword,
  onClick,
}: {
  keyword: string;
  onClick: (keyword: string) => void;
}) {
  return (
    <article
      className="p-[14px_20px] leading-5 box-border h-[46px] border w-max border-[#EDEDED] rounded-4xl
                origin-left flex items-center
                cursor-pointer hover:bg-[#FF7622] active:bg-[#bd5a1c] active:text-white hover:text-white hover:text-[20px] transition-all "
      key={keyword}
      onClick={() => {
        onClick(keyword);
      }}
    >
      {keyword}
    </article>
  );
}
