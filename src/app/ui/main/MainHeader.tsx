"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavMenu, { PCNavMenu } from "../NavMenu";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("./MainHeader"), {
  ssr: false,
});

export default function MainHeader() {
  const n = 2;
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [documentMounted, setDocumentMounted] = useState(false);
  const px: { current: number } = useRef(0);
  if (documentMounted) {
    const bodyStyle = document.body.style;
    if (showNavMenu) {
      bodyStyle.position = "relative";
      bodyStyle.top = "-" + px.current + "px";

      bodyStyle.height = "100vh";
    } else {
      bodyStyle.height = "100%";
      bodyStyle.position = "static";
      bodyStyle.top = "0px";
      scrollTo(0, px.current);
    }
  }

  useEffect(() => {
    setDocumentMounted(true);
  }, []);
  if (documentMounted && showNavMenu) {
    console.log(
      document.body.querySelector("div.nav-menu")?.querySelector("button")
        ?.parentElement,
    );

    const navMenu = document.body.querySelector(
      "dialog.nav-menu",
    ) as HTMLDialogElement;
    navMenu.focus();
  }
  return (
    <>
      <DynamicComponentWithNoSSR />
      <header className="w-full  bg-[#f3f3f3]">
        {/* <div className="absolute"></div> */}
        <div className="relative grid w-[max(100%,_327px)] sx:grid-cols-[5fr_3fr_1fr] items-center  h-[55px] grid-cols-[2fr_6fr_1fr]">
          {(function () {
            if (documentMounted) {
              if (screen.width >= 450) {
                return <PCNavMenu />;
              }
            }
            return (
              <label
                htmlFor="menuButton"
                aria-expanded="false"
                className=" hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                tabIndex={0}
                onFocus={(ev) => {
                  ev.target.addEventListener(
                    "keydown",
                    function g(e: KeyboardEvent) {
                      if (e.key === "Enter") {
                        if (ev.target instanceof HTMLLabelElement) {
                          setShowNavMenu(() => {
                            ev.target.ariaExpanded = "true";
                            return true;
                          });
                        }
                      }

                      if (e.key === "Tab") {
                        console.log(showNavMenu);

                        ev.target.removeEventListener("keydown", g);
                      }
                    },
                  );
                }}
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
                  onChange={() => {
                    setShowNavMenu(!showNavMenu);
                    px.current = scrollY;
                  }}
                />
                {documentMounted && (
                  <NavMenu
                    onClose={() => setShowNavMenu(false)}
                    isClosed={!showNavMenu}
                  />
                )}
              </label>
            );
          })()}
          <div className="flex flex-col gap-[3px] w-fit sx:justify-self-center">
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
          <Link
            href={"/cart"}
            className="relative w-[45px] h-[45px] hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            <Image
              src={"/main/Cart.png"}
              width={45}
              height={45}
              alt="cart button"
            />
            <div className="absolute bg-[#FF7622]  box-border h-[25px] w-[25px] rounded-2xl text-center top-[-4px] right-0">
              <div className="text-white font-bold text-[16px]">{n}</div>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}
