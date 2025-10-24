import Image from "next/image";
import Link from "next/link";

export default function RestaurantBtn({restaNameURL}: {restaNameURL: string}) {
  return (
    <div className="flex gap-3 justify-center items-center border rounded-4xl border-[#E9E9E9] w-fit h-[47px] p-[13px_20px] box-border">
      <Image
        src={"/FoodPage/logoResta.png"}
        width={512}
        height={512}
        alt=""
        className=" size-[21px] "
      />
      <Link
        href={`/restaurants/${restaNameURL}`}
        className="font-normal text-[14px] text-[#181C2E] "
      >
        Uttora Coffe House
      </Link>
    </div>
  );
}
