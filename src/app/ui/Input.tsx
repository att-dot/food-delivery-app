import Image from "next/image";
import { ChangeEvent, useState } from "react";

export default function Input({
  className,
  // value = "",
  // onChange = () => {},
}: {
  className: string;
  // value: string | undefined;
  // onChange: (() => void) | ((e: ChangeEvent<HTMLInputElement>) => void);
}) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={className}>
      <label
        htmlFor="i123"
        className="flex  items-center w-[327px] h-[62] bg-[#F6F6F6] rounded-[10px] box-border gap-[12px] p-[0px_20px_0px_20px]"
      >
        <Image
          src={"/main/Search.png"}
          width={15}
          height={15}
          alt="search"
          className=" w-[15px] h-[15px]"
        />
        <input
          id="i123"
          autoComplete="false"
          placeholder="Search dishes, restaurants"
          className="peer w-full  placeholder:text-[14px] text-[14px] placeholder:text-[#676767]  placeholder:tracking-tight tracking-tight focus-visible:outline-none focus-visible:border-b-[1px] border-[#181C2E] text-[#181C2E]"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.currentTarget.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter")
              console.log("search ", e.currentTarget.value);
          }}
        />
        <Image
          src={"/main/Cancel.png"}
          width={20}
          height={20}
          alt="clear input"
          className=" peer-placeholder-shown:invisible cursor-pointer"
          onClick={() => {
            setInputValue("");
          }}
        />
      </label>
    </div>
  );
}
