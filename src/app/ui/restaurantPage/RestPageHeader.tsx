"use client";

import Image from "next/image";
import GoBack from "../GoBack";
import Filter from "./Filter";
import { useState } from "react";

export default function RestPageHeader() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="flex justify-between items-center self-start">
      {showModal && (
        <Filter
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
      <GoBack />

      <h2 className="text-[17px] leading-[22px] tracking-normal mr-[60px]">
        Restaurant View
      </h2>
      <button
        type="button"
        title="more options"
        tabIndex={0}
        onClick={() => {
          setShowModal(true);
        }}
        className="w-[45px] h-[45px] bg-[#ECF0F4] justify-self-end rounded-4xl flex justify-center items-center cursor-pointer hover:scale-110 active:scale-95 transition-transform"
      >
        <Image
          src={"/restaurants/More.png"}
          width={16}
          height={2}
          alt=""
          className=" "
        />
      </button>
    </header>
  );
}
