"use client";

import { useId } from "react";

export default function Radiobutton({ onClick, checked }: {onClick: ()=> void; checked: boolean}) {
  const id = useId();
  return (
    <label htmlFor={id}>
      <input type="radio" name="onboarding" id={id} onClick={onClick} checked={checked} onChange={()=>{}}/>
      <span className="checkmark inline-block rounded-2xl w-[10px] h-[10px] bg-[#FFE1CE]"></span>
    </label>
  );
}
