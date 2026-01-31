"use client";

import AddCardForm from "@/app/ui/addCartpage/AddCardForm";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <header className="w-full mb-[24px]">
        <button
          type="button"
          title="close the menu"
          className="bg-[#ECF0F4] size-[45px] rounded-4xl box-border p-[17px] "
          onClick={() => {
            router.back();
          }}
        >
          <Image
            src={"/Cart/CloseWhite.png"}
            width={512}
            height={512}
            alt=""
            className="  brightness-0"
          />
        </button>
        <h1 className="font-normal text-[17px] leading-[22px] text-[#181C2E] inline ml-[16px]">
          Add Card
        </h1>
      </header>
      <main>
        <AddCardForm />
      </main>
    </>
  );
}
