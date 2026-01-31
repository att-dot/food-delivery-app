"use client";
import { useState } from "react";
import Card, { PCard } from "./Card";
import Image from "next/image";
import Payment from "./Payment";

export default function PaymentMain() {
  const [chosenMethod, setchosenMethod] = useState("");
  const [card] = useState("");
  const cards: PCard[] = [
    { URL: "/paymentPage/Cash.png", title: "Cash", width: 24, height: 24 },
    { URL: "/paymentPage/Visa.png", title: "Visa", width: 41, height: 13 },
    {
      URL: "/paymentPage/mastercard.png",
      title: "Mastercard",
      width: 32,
      height: 25,
    },
    { URL: "/paymentPage/paypal.png", title: "Paypal", width: 24, height: 30 },
  ];
  return (
    <main className="self-start mt-[30px] w-[100%]">
      <form>
        <section
          tabIndex={-1}
          className="flex gap-[16px] overflow-x-auto w-[calc(100%+24px)] pr-[24px] p-[7px_3px]"
        >
          {cards.map((card) => (
            <Card
              {...card}
              key={card.title}
              checked={card.title === chosenMethod}
              onChange={() => {
                setchosenMethod(card.title);
              }}
            />
          ))}
        </section>
        <section className="pt-[7px]">
          {chosenMethod === "" ? (
            <p className="w-full h-[257px] rounded-[10px] p-[0px_30px] text-wrap text-[#32343E] text-[18px] text-center flex items-center bg-[#F7F8F9]">
              Choose the way your are going to pay
            </p>
          ) : (
            ""
          )}
          {["Mastercard", "Visa", "Paypal"].includes(chosenMethod) &&
            card === "" && (
              <>
                <div className="w-full h-[257px] box-border p-[29px_30px] rounded-[10px] bg-[#F7F8F9] flex flex-col items-center ">
                  <Image
                    src="/paymentPage/Card.png"
                    width={505}
                    height={319}
                    alt=""
                    className="w-[166px] drop-shadow-2xl"
                  />
                  <p className="text-[#32343E] text-[16px] font-bold mt-[23px]">
                    No {chosenMethod.toLocaleLowerCase()} added
                  </p>
                  <p className="text-[#2D2D2D] text-[15px] font-nq leading-[24px] tracking-[0.5px] mt-[6px] text-center">
                    You can add a card and save it for later
                  </p>
                </div>
                <button
                  type="button"
                  title="add new card"
                  className="w-full h-[62px] flex items-center justify-center text-[14px] font-bold gap-[10px] hover:bg-[#FF762210] active:border-[#FF7622] active:border-2  active:bg-white transition-all hover:border-transparent mt-[15px] text-[#FF7622] border-2 border-[#F0F5FA] rounded-[10px] bg-transparent"
                >
                  <Image
                    src={"/paymentPage/plus.png"}
                    width={512}
                    height={512}
                    alt=""
                    className="size-[13px]"
                  />
                  ADD NEW
                </button>
              </>
            )}
        </section>
        <Payment disabled={chosenMethod === ""} />
        {/* <div className="div-bg-hover bg-amber-500 w-[200px] h-[100px] text-center rounded-2xl">
        sdkfjksdjf
      </div> */}
      </form>
    </main>
  );
}
