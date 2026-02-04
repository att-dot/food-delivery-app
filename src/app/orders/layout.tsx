"use client";

import Image from "next/image";
import GoBack from "../ui/GoBack";
// import { usePathname } from "next/navigation";
import OrdersNavLink from "../ui/ordersPart/OrdersNavLink";
import "@/app/ui/orders.css";

export default function layout({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname();
  // console.log(pathname);
  return (
    <>
      <header className=" grid grid-cols-2 grid-rows-2 border-b  border-b-[#CED7DF] w-screen md-line-bg md:border-b-transparent md:w-3xl pr-6 pl-6 box-border">
        <div className="flex gap-[min(5%,16px)] items-center ">
          <GoBack />
          <h1 className="leading-5.5 font-normal text-[17px] text-[#181C2E] ">
            My orders
          </h1>
        </div>
        <button
          type="button"
          title="more options"
          tabIndex={0}
          onClick={() => {}}
          className="w-11.25 h-11.25 bg-[#ECF0F4] justify-self-end rounded-4xl flex justify-center items-center cursor-pointer hover:scale-110 active:scale-95 transition-transform"
        >
          <Image src={"/restaurants/More.png"} width={16} height={2} alt="" />
        </button>

        <OrdersNavLink className="col-span-2 self-end" />
      </header>
      <main className="w-full pt-8 max-w-175 mb-12.5">
        {children}
      </main>
    </>
  );
}
