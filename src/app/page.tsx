"use client";


import MainHeader from "./ui/main/MainHeader";

import MainMain from "./ui/main/MainMain";


export default function Page({}) {

  
  return (
    <>
     
      <div className="flex flex-col items-center w-[max(100%,_375px)] md:w-[748px] overflow-hidden justify-self-center box-border pt-[5px]">
        <MainHeader />

        <MainMain />
      </div>
    </>
  );
}
