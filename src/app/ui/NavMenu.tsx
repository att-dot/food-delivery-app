"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { restaurants } from "./main/MainRestaurantMenu";
import { ReactNode, useEffect, useRef } from "react";

export default function NavMenu({
  onClose,
  isClosed,
  
}: {
  onClose: () => void;
  isClosed: boolean;
}) {
  const links = {
    search: "/search",
    food: "/food-category/Burgers",
    main: "/",
  };

  // const px: { current: string } = useRef("");
  // console.log(px);
  // if (!isClosed) {
  //   px.current = scrollY + "px";
  //   document.body.style.height = "100vh";
  // } else {
  //   document.body.style.height = "100%";
  //   document.body.style.top = px.current;
  // }

  return createPortal(
    <div
      className={
        "flex fixed absolut transition-all duration-500  top-[0px] w-full h-full  backdrop-blur-2xl bg-[#ffffff80]  z-50 flex-col justify-center items-center gap-7 translate-x-[-100vw] " +
        (isClosed ? "translate-x-[-100vw] " : " translate-x-[0px] ")
      }
      onScroll={(e) => {}}
    >
      <button
        type="button"
        title="close nav menu"
        onClick={onClose}
        className="hover:scale-105 active:scale-95 focus:outline-2 outline-[#222] outline-offset-2 transition-all size-[45px] bg-[#ffffff] rounded-3xl backdrop-blur-3xl backdrop-invert-50 backdrop-opacity-75"
      >
        <span className="border-t-2 border-r-2 ml-1 border-[#181C2E] w-2 h-2 inline-block skew-[5deg] rotate-[-135deg]"></span>
      </button>
      {(function (): ReactNode {
        return Object.entries(links).map(([name, link]) => (
          <Link
            key={name}
            onClick={onClose}
            href={link}
            className="text-2xl drop-shadow-xl font-normal hover:font-bold active:font-bold active:bg-[#FF7622] active:text-white hover:bg-[#FF7622] active:scale-95 hover:scale-105 active:saturate-[90%]  hover:text-white transition-all box-border w-full text-center p-[15px_0px]  text-[#111]"
          >
            {name}
          </Link>
        ));
      })()}
    </div>,
    document.body
  );
}
