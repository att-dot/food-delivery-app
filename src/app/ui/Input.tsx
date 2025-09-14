import Image from "next/image";

export default function Input({ className }: { className: string }) {
  return (
    <div className={className}>
      <label
        htmlFor="i123"
        className="flex items-center w-[327px] h-[62] bg-[#F6F6F6] rounded-[10px] box-border gap-[12px] p-[0px_20px_0px_20px]"
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
          placeholder="Search dishes, restaurants"
          className="w-full placeholder:text-[14px] placeholder:text-[#676767] placeholder:tracking-tight focus-visible:outline-none focus-visible:border-b-[1px] border-[#181C2E] text-[#181C2E]"
        />
      </label>
    </div>
  );
}
