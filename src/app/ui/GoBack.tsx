"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();
  return (
    <>
      <button
        title="navigate to main"
        onClick={() => {
          router.push("/");
        }}
        className="w-[45px] h-[45px] bg-[#ECF0F4] rounded-4xl flex justify-center items-center cursor-pointer hover:scale-110 active:scale-95 transition-transform"
      >
        <span className="border-t-2 border-r-2 ml-1 border-[#181C2E] w-2 h-2 inline-block skew-[5deg] rotate-[-135deg]"></span>
      </button>
    </>
  );
}
