"use client";

import Link from "next/link";
import { createPortal } from "react-dom";

import { ReactNode } from "react";

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
    cart: "/cart",
    history: "/orders/history",
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
    <dialog
      className={
        "nav-menu flex fixed transition-all duration-500  top-[0px] w-full h-full  backdrop-blur-2xl bg-[#ffffff80]  z-50 flex-col pt-[50px] items-start  gap-7 translate-x-[-100vw] " +
        (isClosed ? "translate-x-[-100vw] " : " translate-x-[0px] ")
      }
      onScroll={() => {}}
      aria-modal="true"
      role="dialog"
      // tabIndex={-1}
    >
      <div className="pl-[70px] flex gap-[18px] items-center">
        <button
          type="button"
          title="close nav menu"
          onClick={onClose}
          {...(isClosed ? { tabIndex: -1 } : { tabIndex: 0 })}
          className=" hover:scale-105 active:scale-95 focus:outline-2 outline-[#222] outline-offset-2 transition-all size-[45px] bg-[#ffffff] rounded-3xl backdrop-blur-3xl backdrop-invert-50 backdrop-opacity-75"
        >
          <span className="border-t-2 border-r-2 ml-1 border-[#181C2E] w-2 h-2 inline-block skew-[5deg] rotate-[-135deg]"></span>
        </button>
        <span className=" text-2xl">Close</span>
      </div>
      {(function (): ReactNode {
        return Object.entries(links).map(([name, link]) => (
          <Link
            key={name}
            onClick={onClose}
            href={link}
            {...(isClosed ? { tabIndex: -1 } : { tabIndex: 0 })}
            // tabIndex={0}
            className="text-2xl drop-shadow-xl font-normal hover:font-bold active:font-bold active:bg-[#FF7622] active:text-white hover:bg-[#FF7622] active:scale-95 hover:scale-105 active:saturate-[90%]  hover:text-white transition-all box-border w-full  p-[15px_0px] pl-[70px] text-[#111]"
          >
            {name}
          </Link>
        ));
      })()}
    </dialog>,
    document.body,
  );
}

export function PCNavMenu({}) {
  const links = {
    main: "/",
    food: "/food-category/Burgers",
    search: "/search",
    history: "/orders/history",
  };
  return (
    <nav className="grid grid-cols-4 justify-items-center items-center relative">
      {(function (): ReactNode {
        return Object.entries(links).map(([name, link]) => (
          <Link
            key={name}
            href={link}
            // tabIndex={0}
            className=" justify-self-center text-center text-lg hover:font-bold active:font-bold active:bg-[#FF7622] active:text-white hover:bg-[#FF7622] active:scale-95 hover:scale-105 active:saturate-90 font-semibold hover:text-white transition-all w-full leading-14 h-full text-[#353535]"
          >
            {name}
          </Link>
        ));
      })()}
    </nav>
  );
}
