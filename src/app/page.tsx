"use client";

import MainHeader from "./ui/main/MainHeader";

import MainMain from "./ui/main/MainMain";

export default function Page({}) {
  return (
    <>
      <div className="flex flex-col items-center w-[max(100%,375px)] md:w-187 overflow-hidden justify-self-center box-border pt-1.25">
        <MainHeader />

        <MainMain />

      </div>
    </>
  );
}
