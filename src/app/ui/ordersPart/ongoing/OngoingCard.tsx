import Link from "next/link";
import Button from "../../onboarding/Button";

export default function OngoingCard({
  type,
  restaurantName,
  items,
  code,
  price,
  pictureURl,
}: {
  type: string;
  restaurantName: string;
  items: string;
  code: string;
  price: string;
  pictureURl: string;
}) {
  return (
    <article className="w-full not-first:mt-[24px] ">
      <h2 className="font-normal text-[14px] text-[#181C2E]">{type}</h2>
      <hr className="m-[16px_0px]" style={{ color: "#EEF2F6" }} />
      <section
        aria-label={restaurantName + " order details"}
        className="w-full grid grid-cols-[auto_3fr_1fr] grid-rows-[auto_auto] gap-y-[24px]"
      >
        {/* <Image /> */}
        <div className="size-[60px] bg-[#98A8B8] rounded-[8px]"></div>

        <div className="ml-[14px]">
          <Link
            href={`/restaurants/${restaurantName}`}
            className=" text-[14px] font-bold text-[#181C2E] "
          >
            {restaurantName}
          </Link>
          <p className=" text-[14px] font-bold text-[#181C2E] flex items-center mt-[10px] ">
            <span className="pr-[14px] leading-[17px] border-2 border-white border-r-[2px] border-r-[#CACCDA]">
              {price}
            </span>

            <span className="ml-[14px] text-[12px] text-[#6B6E82] font-normal">
              {items} items
            </span>
          </p>
        </div>
        <p className="text-[#6B6E82] text-[14px] justify-self-end underline">{code}</p>

        <div className="flex justify-between w-full col-span-3 ">
          <Button
            textContent="Track Order"
            className="w-[139px] h-[38px] rounded-[8px] text-[12px] font-bold bg-[#FF7622]"
            functionalCSS=" active:bg-white active:text-[#FF7622] transition-all active:border-[#FF7622] active:border-[1px]"
          />
          <Button
            textContent="Cancel"
            textColorCSS="text-[#FF7622]"
            className="w-[139px] h-[38px] rounded-[8px]  text-[12px] font-bold bg-transparent border-[1px] border-[#FF7622] "
            functionalCSS=" active:bg-[#FF7622] active:text-white transition-all "
          />
        </div>
      </section>
    </article>
  );
}
