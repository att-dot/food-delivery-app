"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavMenu from "../NavMenu";

export default function MainHeader() {
  const n = 2;
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <>
      <header className="grid">
        <div className="absolute">
          {/* <Link href={'./search'}>Search</Link> */}
        </div>
        <div className="relative grid w-[327px] h-[49px] grid-cols-[63px_1fr_45px]">
          <label
            htmlFor="menuButton"
            className=" hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            <Image
              src={"/main/Menu.png"}
              width={45}
              height={45}
              alt="menu button"
            />
            <input
              id="menuButton"
              hidden
              className="peer"
              type="checkbox"
              checked={showNavMenu}
              onChange={(e) => {
                setShowNavMenu(!showNavMenu);
                console.log(e.currentTarget.checked);
              }}
            />
            {/* {showNavMenu && */}
            <NavMenu
              onClose={() => setShowNavMenu(false)}
              isClosed={!showNavMenu}
            />
            {/* } */}
            {/* <div className="peer-checked:flex hidden absolut fixed top-[0px] w-full h-full  backdrop-blur-2xl z-50 flex-col justify-center items-center gap-7">
              <Link
                href={"./search"}
                className="text-7xl drop-shadow-xl font-extrabold text-[#111]"
              >
                Search
              </Link>
              <Link
                href={"./search"}
                className="text-7xl drop-shadow-xl font-extrabold text-[#111]"
              >
                Search
              </Link>
              <Link
                href={"./search"}
                className="text-7xl drop-shadow-xl font-extrabold text-[#111]"
              >
                Search
              </Link>
              <Link
                href={"./search"}
                className="text-7xl drop-shadow-xl font-extrabold text-[#111]"
              >
                Search
              </Link>
            </div> */}
          </label>

          <div className="flex flex-col gap-[3px] w-fit">
            <p className="text-[#FC6E2A] font-bold text-[12px] ">DELIVER TO</p>
            <div className=" flex  items-center gap-2 ">
              <p className="text-[#676767] text-[14px]">Halal Lab office</p>
              <Image
                src={"/main/arrow-down.png"}
                width={120}
                height={90}
                className="w-2.5 h-2"
                alt="choose location"
              />
            </div>
          </div>
          <div className="relative w-[45px] h-[45px]">
            <Image
              src={"/main/Cart.png"}
              width={45}
              height={45}
              alt="cart button"
            />
            <div className="absolute bg-[#FF7622]  box-border h-[25px] w-[25px] rounded-2xl text-center top-[-4px] right-0">
              <div className="text-white font-bold text-[16px]">{n}</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
