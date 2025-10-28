"use client";

import { useState } from "react";
import Button from "../onboarding/Button";

export default function AddToCart({ disabled }) {
  const price = 16;
  const [value, setValue] = useState(0);
  return (
    <div className="w-[375px] h-[184px] bg-[#F0F5FA] rounded-[24px_24px_0_0] fixed bottom-0 left-0 justify-self-cent grid grid-cols-2 grid-rows-[48px_62px] gap-[24px] box-border p-[20px_24px] items-center">
      <p className="font-normal text-[28px] text-[#181C2E]">{price * value}$</p>
      <div className="w-[125px] h-[48px] flex box-border p-[12px_14px] gap-[12px] bg-[#121223] rounded-4xl justify-self-end">
        <button
          type="button"
          title="take food away"
          onClick={() => {
            if (value !== 0) {
              setValue(value - 1);
            }
          }}
          className="text-white size-[24px] bg-[#FFFFFF20] rounded-2xl"
        >
          -
        </button>
        <label className="" htmlFor="foodAmount">
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(+e.currentTarget.value);
            }}
            name="foodAmount"
            id="foodAmount"
            className="box-content focus-visible:outline-0 focus-visible:bg-[#FFFFFF20]  w-[21px] text-[16px] text-center text-white  font-bold rounded-[7
            px]"
          />
        </label>
        <button
          title="add food"
          type="button"
          onClick={() => {
            setValue(value + 1);
          }}
          className="text-white size-[24px] bg-[#FFFFFF20] rounded-2xl"
        >
          +
        </button>
      </div>
      <Button
        textContent="ADD TO CART"
        className="col-span-2 justify-self-center w-[327px]"
        disabled={disabled}
      />
    </div>
  );
}
