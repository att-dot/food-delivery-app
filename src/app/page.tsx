"use client";


import MainHeader from "./ui/main/MainHeader";

import MainMain from "./ui/main/MainMain";


export default function Page({}) {
  // const tags = ["Burger", "Chiken", "Riche", "Wings"];
  
  return (
    <>
      {/* <div className=" absolute top-[0px] w-full h-full  backdrop-blur-2xl z-50 flex flex-col justify-center items-center gap-7">
        <Link href={"./search"} className="text-7xl drop-shadow-xl font-extrabold text-[#111]">Search</Link>
        <Link href={"./search"} className="text-7xl drop-shadow-xl font-extrabold text-[#111]">Search</Link>
        <Link href={"./search"} className="text-7xl drop-shadow-xl font-extrabold text-[#111]">Search</Link>
        <Link href={"./search"} className="text-7xl drop-shadow-xl font-extrabold text-[#111]">Search</Link>
      </div> */
      }
      {/* <link rel="icon" href="/Logo.ico" sizes="any" /> */}
      {/* pl-6 pt-[5px] */}
      <div className="flex flex-col items-center w-[max(100%,_375px)] md:w-[748px] overflow-hidden justify-self-center box-border pt-[5px]">
        <MainHeader />

        <MainMain />
      </div>
    </>
  );
}
