import Image from "next/image";


export interface PCard {
  title: string;
  URL: string;
  width: number;
  height: number;
}

export default function Card({
  title,
  URL,
  width,
  height,
  checked,
  onChange,
}: PCard & { checked: boolean; onChange: () => void }) {
  return (
    <>
      <label
        onClick={onChange}
        htmlFor={"cardPaymenttype" + title}
        className={
          " flex flex-col items-center hover:scale-105 active:scale-95 transition-all "
        }
        tabIndex={0}
        onFocus={(ev) => {
          ev.target.addEventListener("keydown", function g(e: KeyboardEvent) {
            if (e.key === "Enter") {
              if (ev.target instanceof HTMLLabelElement) {
                ev.target.click();
              }
            }

            if (e.key === "Tab") {
              ev.target.removeEventListener("keydown", g);
            }
          });
        }}
      >
        <div
          className={
            "w-[85px] h-[72px] relative bg-[#F0F5FA] flex justify-center transition-[background] items-center rounded-[10px] box-border" +
            (checked ? " border-2 border-[#FF7622] bg-white  " : "")
          }
        >
          <Image src={URL} width={width} height={height} alt="" className=" " />
          <Image
            src={"/paymentPage/selected.png"}
            width={44}
            height={33}
            alt=""
            className={
              "hidden absolute top-[-7px] right-[-3px] scale-0 transition-transform size-[24px] box-border border-2 border-white p-[6px_5px] bg-[#FF7622] rounded-2xl" +
              (checked ? " inline-block scale-100 " : "")
            }
          />
        </div>
        <span className="text-[14px] font-normal text-[#464E57]">{title}</span>
      </label>
      <input
        type="radio"
        name="paymentway"
        hidden
        id={"cardPaymenttype" + title}
        value={title}
        onChange={onChange}
      />
    </>
  );
}
