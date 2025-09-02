"use client";

import SplashAnimation from "@/app/ui/onboarding/SplashAnimation";
import Onboarding from "@/app/ui/onboarding/Onboarding";
import { useEffect, useState } from "react";


export default function Page() {
  const [page, setPage] = useState(<SplashAnimation />);
  console.log(23132234)
  

  useEffect(() => {
    const f = setTimeout(() => setPage(<Onboarding />), 3000);
    return ()=>{
      clearTimeout(f)
    }
  }, []);
  return (
    <>
      {/* <SplashAnimation/> */}
      {/* className=" animate-apearpage opacity-0" */}
      {/* <Onboarding/> */}
      {page}
    </>
  );
}
