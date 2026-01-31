"use client";
import Image from "next/image";
import { useState } from "react";
export default function CartItem({
  src,
  width,
  height,
  alt = "",
  title,
  price,
  size,
  defaultAmount = 0,
  isEditing = false,
}: {
  src: string;
  width: number;
  height: number;
  alt?: string;
  title: string;
  price: string;
  size: string;
  defaultAmount?: number;
  isEditing?: boolean;
}) {
  console.log(isEditing);
  const [value, setValue] = useState(defaultAmount);
  console.log(alt)
  return (
    // <Link href={`/food-category/${foodtype}`} className="  w-[147px] h-[182px] pt-[px] drop-shadow-xl rounded-3xl relative flex flex-col items-center justify-end first:ml-[10px] last:mr-[15px] cursor-pointer hover:scale-105 active:scale-95 active:opacity-90 transition-all">
    // <div className=" category-bg  w-[147px] h-[117px] relative">
    <div className=" grid grid-cols-2 w-[327px]">
      <div className=" w-[147px] h-[117px] p-[8px] rounded-4xl bg-[#FFFFFF20] flex ">
        <Image
          src={src}
          width={width}
          height={height}
          alt=""
          // fill
          className="  w-full h-full relative rounded-3xl object-cover opacity-80"
          // className=" category-bg  w-[147px] h-[117px] flex items-end "
        />
      </div>
      <div className="flex flex-col justify-around">
        <div className="grid grid-cols-[auto_27px] items-start">
          <p className="font-normal text-[18px] text-white">{title}</p>
          {isEditing && (
            <button
              type="button"
              title="delete item"
              className="size-[27px] cursor-pointer hover:scale-110 active:scale-95 transition-all bg-[#E04444] rounded-2xl flex justify-center items-center mt-[4px]"
            >
              <Image
                src={"/Cart/CloseWhite.png"}
                width={512}
                height={512}
                alt=""
                className="size-[11px]"
              />
            </button>
          )}
        </div>
        <p className="font-bold text-[20px] text-white">${price}</p>

        <div className="flex justify-between items-center">
          <p className="font-normal text-[18px] text-white opacity-50">
            {size}
          </p>
          <div className="w-[125px] h-[48px] flex box-border p-[12px_14px] gap-[12px] bg-[#121223] rounded-4xl justify-self-end">
            <button
              type="button"
              title="take food away"
              onClick={() => {
                if (value !== 0) {
                  setValue(value - 1);
                }
              }}
              className="text-white size-[24px] bg-[#FFFFFF20] rounded-2xl hover:scale-110 active:scale-95 transition-all"
            >
              -
            </button>
            <label className="" htmlFor={title + size}>
              <input
                type="text"
                value={value}
                onChange={(e) => {
                  if (Number.isInteger(+e.currentTarget.value))
                    setValue(+e.currentTarget.value);
                }}
                name={title + size}
                id={title + size}
                className="box-content focus-visible:outline-0 focus-visible:bg-[#FFFFFF20] hover:bg-[#FFFFFF20] transition-all  w-[21px] text-[16px] text-center text-white  font-bold rounded-[7px]"
              />
            </label>
            <button
              title="add food"
              type="button"
              onClick={() => {
                setValue(value + 1);
              }}
              className="text-white size-[24px] bg-[#FFFFFF20] rounded-2xl hover:scale-110 active:scale-95 transition-all"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
