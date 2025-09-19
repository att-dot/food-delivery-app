"use client";

import { useState } from "react";
import "./radiostyle.scss";
import Radiobutton from "./RadioButton";
import Image from "next/image";
import Link from "next/link";

type OnboardingData = Array<{
  title: string;
  content: string;
  imageLocalUrl: string;
}>;

export default function Onboarding({}) {
  const [currentPage, setCurrentPage] = useState(0);

  let a = "";
  switch (currentPage) {
    case 0:
      a = "translate-x-0";
      break;
    case 1:
      a = "translate-x-[-375px]";
      break;
    case 2:
      a = "translate-x-[-750px]";
      break;
    case 3:
      a = "translate-x-[-1125px]";
      break;
  }

  const data: OnboardingData = [
    {
      title: "All your favorites",
      content:
        "Get all your loved foods in one once place, you just place the order we do the rest",
      imageLocalUrl: "/onboarding/favoriteFood1.jpg",
    },
    {
      title: "Order from choosen chef",
      content:
        "Get all your loved foods in one once place, you just place the order we do the rest",
      imageLocalUrl: "/onboarding/Chef.jpg",
    },
    {
      title: "All your favorites",
      content:
        "Get all your loved foods in one once place, you just place the order we do the rest",
      imageLocalUrl: "/onboarding/FavouritFood2.jpg",
    },
    {
      title: "Free delivery offers",
      content:
        "Get all your loved foods in one once place, you just place the order we do the rest",
      imageLocalUrl: "/onboarding/freeDelivery.jpg",
    },
  ];
  return (
    <>
      <div className=" flex flex-col items-center min-h-[100vh] justify-center animate-apearpage opacity-0">
        <div className="items-center justify-items-center w-[324px] flex flex-col relative overflow-hidden">
          <div
            className={
              "grid grid-cols-[375px_375px_375px_375px] h-[292px] mb-16 w-full transition-all " +
              a
            }
          >
            <div className="w-[240px] h-[292px] relative left-11">
              <Image
                src={"/onboarding/FavouritFood2.jpg"}
                alt=""
                fill
                className="rounded-[12px] object-cover"
              />
            </div>
            <div className="w-[240px] h-[292px] relative left-11">
              <Image
                src={"/onboarding/chef1.jpg"}
                alt=""
                fill
                className="rounded-[12px] object-cover"
              />
            </div>
            <div className="w-[240px] h-[292px] relative left-11">
              <Image
                src={"/onboarding/favoriteFood1.jpg"}
                alt=""
                fill
                className="rounded-[12px] object-cover"
              />
            </div>
            <div className="w-[240px] h-[292px] relative left-11">
              <Image
                src={"/onboarding/freeDelivery.jpg"}
                alt=""
                fill
                className="rounded-[12px] object-cover"
              />
            </div>
          </div>
          <p className="font-extrabold text-2xl text-[#32343E] mb-5">
            {data[currentPage].title}
          </p>
          <p className="text-[16px] text-[#646982] w-[324px] leading-[24px] text-center mb-9">
            {data[currentPage].content}
          </p>
        </div>

        <div className="radio-menu flex gap-3">
          <Radiobutton
            onClick={() => setCurrentPage(0)}
            checked={currentPage === 0}
          />
          <Radiobutton
            onClick={() => setCurrentPage(1)}
            checked={currentPage === 1}
          />
          <Radiobutton
            onClick={() => setCurrentPage(2)}
            checked={currentPage === 2}
          />
          <Radiobutton
            onClick={() => setCurrentPage(3)}
            checked={currentPage === 3}
          />
        </div>
        <div className=" grid grid-rows-2 mt-14">
          {currentPage < 3 ? (
            <>
              <button
                type="button"
                onClick={() => setCurrentPage((pV) => pV + 1)}
                className="w-80 h-16 box-border  font-bold text-white bg-[#FF7622] rounded-2xl hover:bg-[#ff883e] active:outline-3 active:bg-[#ffffff] outline-[#FF7622] active:text-black transition-colors"
              >
                NEXT
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage(3)}
                className="transition-colors w-80 h-16 box-border hover:bg-[#ebebeb]  text-[16px] font-bold text-[#646982] rounded-2xl"
              >
                Skip
              </button>
            </>
          ) : (
            <Link
              href={"/"}
              className="inline-block w-[327px] h-16 box-border p-[22px_116px] text-[14px] font-bold text-white bg-[#FF7622] rounded-2xl hover:bg-[#ff883e] active:outline-3 active:bg-[#ffffff] outline-[#FF7622] active:text-black transition-colors"
            >
              GET STARTED
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
