import Image from "next/image";

export default function ThreeDetails({
  grade,
  deliveryPrice,
  deliveryTime,
  className = "",
}: {
  deliveryTime: number;
  deliveryPrice: string | number;
  grade: number;
  className?: string;
}) {
  return (
    <div className={"flex gap-6 " + className}>
      <div className="text-[16px] font-bold text-[#181C2E] flex gap-[4px] items-center">
        <Image
          src={"/main/Star.png"}
          width={20}
          height={20}
          alt="restaurant rating"
          className="w-[20px] h-[20px]"
        />
        <span>{(grade + "").length === 1 ? grade + ".0" : grade}</span>
      </div>

      <div className="text-[16px] font-bold text-[#181C2E] flex gap-[9px] items-center">
        <Image
          src={"/main/car.png"}
          width={23}
          height={16}
          alt="restaurant delivery cost"
          className="w-[23px] h-4"
        />
        <span className="text-[14px] font-normal">
          {typeof deliveryPrice === "string"
            ? deliveryPrice
            : "$" + deliveryPrice}
        </span>
      </div>

      <div className="text-[16px] font-bold text-[#181C2E] flex gap-[9px] items-center">
        <Image
          src={"/main/Clock.png"}
          width={20}
          height={20}
          alt="Time"
          className="h-5 w-5"
        />
        <span className="text-[14px] font-normal">
          {Math.floor(deliveryTime / 60)} min
        </span>
      </div>
    </div>
  );
}
