"use client";

import Link from "next/link";
import GoBack from "../GoBack";

export default function CartHeader({
  isEditing = false,
}: {
  isEditing?: boolean;
}) {
  const linkclass =
    " select-none underline text-[14px] leading-[24px] justify-self-end hover:scale-105 transition-all active:scale-95 cursor-pointer " +
    (isEditing ? " text-greeeen " : " text-[#FF7622] ");
  return (
    <header className="flex items-center w-[327px] mb-[24px] justify-between">
      <div className="flex gap-[18px] items-center">
        <GoBack arrow=" border-[#FFFFFF] " bg=" bg-[#FFFFFF10] "></GoBack>
        <h1 className="text-white text-[17px] leading-[22px] font-normal   mr-[145px]">
          Cart
        </h1>
      </div>
      <Link
        href={isEditing ? "/cart" : "/cart/edit"}
        className={linkclass + ""}
      >
        {isEditing ? "DONE" : "EDIT ITEMS"}
      </Link>
    </header>
  );
}
