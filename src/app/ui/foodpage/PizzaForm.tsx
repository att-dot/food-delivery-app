import { Dispatch, SetStateAction} from "react";

export default function PizzaForm({
  ref,
  setPFormData,
}: {
  ref: { current: null | HTMLFormElement };
  setPFormData: Dispatch<SetStateAction<FormData | undefined>>;
}) {
  const sizes = ["10”", "14”", "16”"];

  return (
    <div className=" flex gap-[10px] justify-start items-center">
      <p className="text-[#32343E] text-[13px] tracking-[2%] font-normal mr-[7px]">
        SIZE:
      </p>
      {sizes.map((size) => (
        <label
          key={size}
          htmlFor={"pizza size " + size}
          className="flex items-center cursor-pointer select-none text-[16px] text-[#121223] font-normal box-border size-[48px] p-[15px_12px] rounded-4xl bg-[#F0F5FA]  has-checked:bg-[#F58D1D] has-checked:text-white has-checked:font-bold transition-colors "
        >
          <input
            type="radio"
            name="size"
            className="hidden"
            id={"pizza size " + size}
            value={size}
            onClick={() => {
              if (ref.current) {
                setPFormData(new FormData(ref.current));
              }
            }}
          />
          {size}
        </label>
      ))}
    </div>
  );
}
