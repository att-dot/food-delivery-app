"use client";

import Image from "next/image";
import { FocusEvent, useState } from "react";
import { createPortal } from "react-dom";
import Button from "../onboarding/Button";


export default function Filter({ onClose }: { onClose: () => void }) {
  const offers = ["Delivery", "Pick Up", "Offer", "Online Payment available"];
  const deliveytimes = ["10-15 min", "20 min", "30 min"];
  const pricing = ["$", "$$", "$$$"];
  const [rating, setRating] = useState("");

  // const initialBodyStyles = {
  //   position: document.body.style.position,
  //   height: document.body.style.height,
  // };
  document.body.style.height = "100vh";
  document.body.style.position = "fixed";

  return createPortal(
    <div className="absolute w-full h-full bg-[#273F5567] top-[0px] box-border p-[81px_14px] flex justify-center items-center">
      <form className="w-[347px] h-fit bg-white box-border p-[20px_0px_20px_20px] rounded-[12px] flex flex-col gap-[30px]">
        <section className="flex items-center justify-between w-[307px]">
          <h2 className="font-normal text-[17px] leading-[22px] text-[#181C2E]">
            Filter your search
          </h2>
          <button
            title="close the modal"
            type="button"
            onClick={() => {
              document.body.style.position = "100%";
              document.body.style.position = "";
              onClose();
            }}
            className=" active:scale-95 hover:scale-105 transition-transform bg-[#ECF0F4] cursor-pointer size-[45px] rounded-3xl flex items-center justify-center"
          >
            <Image
              src={"/restaurants/cancel.png"}
              width={512}
              height={512}
              alt=""
              className="size-[12px]"
            />
          </button>
        </section>
        <section>
          <h3 className="font-normal text-[13px] text-[#32343E] mb-[13px]">
            OFFERS
          </h3>
          <section className="flex flex-wrap gap-x-[16px] gap-y-[9px]">
            {offers.map((el, i) => (
              
                <label
                  className={`text-[#464E57] select-none text-[16px] font-normal tracking-[-0.33px] has-checked:text-white has-checked:bg-[#F58D1D] has-checked:border-0 has-checked:p-[11px_17px] transition-colors cursor-pointer box-border w-fit h-[46px] p-[9px_15px] rounded-[33px] border-2 border-[#EDEDED] focus-visible:border-[#8a8a8a]`}
                  htmlFor={el + "offers"}
                  tabIndex={0}
                  key={el}
                  onFocus={handleLabelFocus}
                >
                  <input
                    type="checkbox"
                    hidden
                    name={el.split(" ").join("")}
                    className={""}
                    tabIndex={0}
                    id={el + "offers"}
                    onChange={console.log}
                  />
                  {el}
                </label>
              
            ))}
          </section>
        </section>

        <section>
          <h3 className="font-normal text-[13px] text-[#32343E] mb-[13px]">
            DELIVEY TIME
          </h3>
          <section className=" flex gap-[16px] flex-wrap">
            {deliveytimes.map((time) => (
              <
                // article
                // key={time}
                // className=" cursor-pointer box-border w-fit h-[46px] p-[9px_15px] rounded-[33px] border-2 border-[#EDEDED] has-checked:bg-[#F58D1D] has-checked:border-0 transition-colors has-checked:p-[11px_17px]"
              >
                <label
                  key={time}
                  className="text-[#464E57] select-none cursor-pointer box-border w-fit text-[16px] h-[46px] p-[9px_15px] rounded-[33px] border-2 border-[#EDEDED] has-checked:bg-[#F58D1D] has-checked:border-0 has-checked:p-[11px_17px] font-normal tracking-[-0.33px] has-checked:text-white transition-colors"
                  htmlFor={time + "time"}
                  tabIndex={0}
                  onFocus={handleLabelFocus}
                >
                  <input
                    type="radio"
                    hidden
                    value={time}
                    name={"time"}
                    className="peer"
                    tabIndex={0}
                    id={time + "time"}
                  />
                  {time}
                </label>
              </
                // article
              >
            ))}
          </section>
        </section>
        <section>
          <h3 className="font-normal text-[13px] text-[#32343E] mb-[13px]">
            PRICING
          </h3>
          <section className="flex flex-wrap gap-[11px]">
            {pricing.map((price) => (
              <
                // article
                // key={price}
                // className="box-border w-[48px] h-[46px]  rounded-[33px] border-2 border-[#EDEDED] has-checked:bg-[#F58D1D] has-checked:border-0 transition-colors flex items-center justify-center"
              >
                <label
                  key={price}
                  className="text-[#464E57] select-none text-[16px] font-normal tracking-[-0.33px] has-checked:text-white transition-colors box-border w-[48px] h-[46px]  rounded-[33px] border-2 border-[#EDEDED] has-checked:bg-[#F58D1D] has-checked:border-0 flex items-center justify-center"
                  htmlFor={price + "pricing"}
                  tabIndex={0}
                  onFocus={handleLabelFocus}
                >
                  <input
                    type="radio"
                    hidden
                    value={price}
                    name={"price"}
                    className="peer"
                    tabIndex={0}
                    id={price + "pricing"}
                  />
                  {price}
                </label>
              </
                // article
              >
            ))}
          </section>
        </section>
        <section>
          <h3 className="font-normal text-[13px] text-[#32343E] mb-[13px]">
            <label htmlFor="rating">RATING</label>
          </h3>
          <section className="flex flex-wrap gap-[11px]">
            <input
              type="text"
              id="rating"
              name="rating"
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
              }}
              hidden
            />
            {Array(5)
              .fill(0)
              .map((_zero, i) => (
                <button
                  key={i + "rating"}
                  type="button"
                  title={i + 1 + " rating"}
                  onClick={() => setRating(i + 1 + "")}
                  className={
                    " select-none size-[48px] border-2 border-[#EDEDED] rounded-3xl scale-95 flex justify-center items-center transition-all hover:scale-100 active:scale-90 " +
                    (+rating >= i + 1 ? "scale-100" : "")
                  }
                >
                  <Image
                    src={
                      +rating >= i + 1
                        ? "/restaurants/StarOrange.png"
                        : "/restaurants/StarGray.png"
                    }
                    alt=""
                    width={512}
                    height={512}
                    className={"size-[18.5] "}
                  />
                </button>
              ))}
          </section>
        </section>
        <Button textContent="FILTER" className="w-[307px] text-[16px]" />
      </form>
    </div>,
    document.body
  );
}

function handleLabelFocus(ev: FocusEvent<HTMLLabelElement, Element>) {
  ev.target.addEventListener("keydown", function g(e: KeyboardEvent) {
    // console.log(23);
    if (e.key === "Enter") {
      if (ev.target instanceof HTMLLabelElement) {
        ev.target.click();
      }
    }

    if (e.key === "Tab") {
      ev.target.removeEventListener("keydown", g);
    }
  });
}
