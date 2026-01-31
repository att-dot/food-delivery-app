"use client";

import Image from "next/image";
import GoBack from "../ui/GoBack";
// import { usePathname } from "next/navigation";
import OrdersNavLink from "../ui/ordersPart/OrdersNavLink";
import "./orders.css";

export default function layout({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname();
  // console.log(pathname);
  return (
    <>
      <header className=" grid grid-cols-2 grid-rows-2 border-b-[1px]  border-b-[#CED7DF] w-[100vw] md-line-bg md:border-b-transparent md:w-[768px] pr-[24px] pl-[24px] box-border">
        <div className="flex gap-[min(5%,16px)] items-center ">
          <GoBack />
          <h1 className="leading-[22px] font-normal text-[17px] text-[#181C2E] ">
            My orders
          </h1>
        </div>
        <button
          type="button"
          title="more options"
          tabIndex={0}
          onClick={() => {}}
          className="w-[45px] h-[45px] bg-[#ECF0F4] justify-self-end rounded-4xl flex justify-center items-center cursor-pointer hover:scale-110 active:scale-95 transition-transform"
        >
          <Image src={"/restaurants/More.png"} width={16} height={2} alt="" />
        </button>

        <OrdersNavLink className="col-span-2 self-end" />
      </header>
      <main className="w-full pt-[32px] max-w-[700px] mb-[50px]">
        {children}
      </main>
    </>
  );
}
