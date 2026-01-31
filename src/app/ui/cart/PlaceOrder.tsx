"use client";

import { MouseEvent, useState } from "react";
import Button from "../onboarding/Button";
import { useRouter } from "next/navigation";


export default function PlaceOrder({}) {
  const [address, setAddress] = useState("2118 Thornridge Cir. Syracuse");
  const router = useRouter();
  const sum = "96";
  return (
    <section className="fixed w-[375px] box-border p-[24px] self-center bottom-0 grid gap-y-[30px] grid-cols-[1fr_1fr] bg-white rounded-[24px_24px_0px_0px]">
      <div className="grid-cols-subgrid grid col-span-2 row-span-2 gap-y-2.5">
        <p className="text-[14px] leading-[24px] font-normal text-[#A0A5BA] grid-">
          DELIVERY ADDRESS
        </p>
        <button
          type="button"
          title="edit address"
          className=" underline text-[#FF7622] text-[14px] leading-[24px] font-normal justify-self-end hover:scale-105 transition-all active:scale-95 cursor-pointer"
        >
          EDIT
        </button>
        <label className="bg-[#F0F5FA] col-span-2 rounded-[10px] p-[22px] text-[#32343E50] text-[16px] tracking-normal font-normal">
          <input
            hidden
            value={address}
            type="text"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          {address}
        </label>
      </div>
      <p className="text-[#A0A5BA] font-normal leading-[24px] text-[14px] flex gap-[12px]">
        TOTAL:{" "}
        <span className="text-[30px] text-[#181C2E] font-normal tracking-normal">
          ${sum}
        </span>
      </p>
      <button
        type="button"
        title="see items"
        className="justify-self-end text-[#FF7622] font-normal text-[14px] leading-[auto] tracking-normal hover:scale-105 transition-all active:scale-95 cursor-pointer "
      >
        Breakdown{" "}
        <span className="border-t-2 border-r-2 border-[#A0A5BA] w-2 h-2 inline-block skew-[5deg] rotate-45"></span>
      </button>
      <Button
        className="col-span-2 text-[14px] leading-[auto] tracking-normal"
        textContent="PLACE ORDER"
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          router.push("/payment");
        }}
      />
      {/* <Link
        href={"/payment"}
        className="col-span-2 text-[14px] leading-[auto] tracking-normal"
      >
        PLACE ORDER
      </Link> */}
    </section>
  );
}
