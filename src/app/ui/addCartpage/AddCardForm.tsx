import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import Button from "../onboarding/Button";
export default function AddCardForm() {
  // const [placeholder, setPlaceholder] = useState(["____", "____", "____"]);
  const [expireInpValue, setExpireInpValue] = useState("");
  const [CVCval, setCVCval] = useState("");
  const [inputV, setInputV] = useState("");
  const cellsNum = 12 - inputV.split("   ").join("").length;
  const line = Array(Math.ceil((12 - inputV.split("   ").join("").length) / 4))
    .fill([])
    .map((_arr, i) =>
      cellsNum - (i + 1) * 4 >= 0
        ? Array(4).fill("")
        : Array(4 + (cellsNum - (i + 1) * 4)).fill(""),
    )
    .reverse()
    .map((arr, i) => (
      <div key={i} className="inline not-last:mr-[11px]">
        {arr.map((_el, i) => (
          <span key={i} className="not-last:pr-1 text-[#32343E]">
            _
          </span>
        ))}
      </div>
    ));
  const invInput = useRef<HTMLInputElement>(null);

  return (
    <>
      <form className="flex flex-col ">
        <label
          htmlFor="fullname"
          className="text-[#A0A5BA] leading-[24px] text-[14px] font-normal uppercase"
        >
          card holder name
        </label>
        <input
          type="text"
          name="fullnme"
          id="fullname"
          className="bg-[#F0F5FA] mb-[24px] mt-[8px] text-[#32343E] text-[16px] rounded-[10px] h-[62] w-full focus:outline-0 box-border p-[22px_20px]"
        />

        <label
          htmlFor="Cardnumber"
          className="text-[#A0A5BA] leading-[24px] text-[14px] font-normal uppercase relative"
        >
          Card number
          <div className="absolute top-[50px] left-[20px]  transition-all">
            <div
              ref={invInput}
              className="inline-block text-[16px] text-amber-600 invisible"
              contentEditable="plaintext-only"
              onChange={(e) => {
                const plainLength = e.currentTarget.textContent
                  .split(" ")
                  .join("").length;
                if (plainLength % 4 === 0 && plainLength / 4 !== 3)
                  e.currentTarget.textContent += "   ";
              }}
            ></div>
            <span>{line}</span>
          </div>
        </label>
        <input
          type="text"
          name="cardnumber"
          id="Cardnumber"
          value={inputV}
          onChange={(e) => {
            const currentValue = e.target.value
              .split("")
              .filter((el) => "0123456789".includes(el))
              .join("");

            if (currentValue.length === 13) {
              console.log("FULL");
            } else {
              const newV = [
                currentValue.slice(0, 4),

                currentValue.slice(4, 8),

                currentValue.slice(8, 12),
              ]
                .filter((el) => el !== "")
                .join("   ");
              setInputV(newV);
              if (invInput.current instanceof HTMLDivElement) {
                invInput.current.textContent = newV;
                const plainLength = invInput.current.textContent
                  .split(" ")
                  .join("").length;
                plainLength % 4 === 0 &&
                plainLength / 4 !== 3 &&
                plainLength > 0
                  ? (invInput.current.textContent += "   ")
                  : "";
              }
            }
          }}
          className=" mb-[24px] bg-[#F0F5FA] mt-[8px] text-[#32343E] text-[16px] rounded-[10px] h-[62] w-full focus:outline-0 box-border p-[22px_20px]"
        />
        <div className=" grid grid-cols-2 gap-[27px]">
          <div>
            <label
              htmlFor="expire_date"
              className="text-[#A0A5BA] leading-[24px] text-[14px] font-normal uppercase"
            >
              expire date
            </label>
            <input
              type="text"
              name="expireDate"
              id="expire_date"
              value={expireInpValue}
              onChange={(e) => expireInputOnChange(setExpireInpValue, e)}
              placeholder="mm/yyyy"
              className=" row-span-2 col-span-1 placeholder-shown:text-[#32343E] bg-[#F0F5FA] mt-[8px] text-[#32343E] text-[16px] rounded-[10px] h-[62] w-full focus:outline-0 box-border p-[22px_20px]"
            />
          </div>
          <div>
            <label
              htmlFor="CVC"
              className="text-[#A0A5BA] col-span-1 row-span-1 leading-[24px] text-[14px] font-normal uppercase"
            >
              CVC
            </label>
            <input
              type="text"
              name="CVC"
              max={3}
              id="CVC"
              placeholder={"\u2022\u2022\u2022"}
              value={"\u2022".repeat(CVCval.length)}
              onChange={() => {}}
              onKeyDown={(e) => {
                console.log(e.key);
                console.log(CVCval);
                if (e.key === "Backspace") {
                  return setCVCval((prevVal) => prevVal.slice(0, -1));
                }
                if (CVCval.length === 3) return;
                if ("0123456789".includes(e.key)) {
                  setCVCval((prevVal) => prevVal + e.key);
                }
              }}
              className="bg-[#F0F5FA] mt-[8px] text-[#32343E] text-[16px] rounded-[10px] h-[62] w-full focus:outline-0 box-border p-[22px_20px]"
            />
          </div>
        </div>
        <Button
          textContent="Add & Make Payment"
          className=" uppercase self-center md:mt-[10%] md:relative md:mb-0 absolute bottom-0 mb-[30px]"
        />
      </form>
    </>
  );
}

function expireInputOnChange(
  setExpireInpValue: Dispatch<SetStateAction<string>>,
  e: ChangeEvent<HTMLInputElement>,
) {
  const justNums = Array.prototype.reduce.call(
    e.target.value,
    (state, CurVal: string) => (CurVal !== "/" ? state + CurVal : state),
    "",
  ) as string;
  console.log(justNums);
  if (justNums.length > 6) {
    return;
  }
  if (justNums.length >= 3) {
    return setExpireInpValue(justNums.slice(0, 2) + "/" + justNums.slice(2));
  } else {
    setExpireInpValue(justNums);
  }
}
