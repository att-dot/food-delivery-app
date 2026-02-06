"use client";
import { useState } from "react";

export default function SelectCategoryInput() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <input
        type="checkbox"
        className="hidden  peer"
        id="select-food-category"
        // ref={ref}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
        onClick={(e) => {
          console.log(checked);
          if (!checked) {
            document.addEventListener("click", function g(ev) {
              if (ev.currentTarget !== e.target) {
                console.log(checked);
                setChecked(false);
                document.removeEventListener("click", g);
                // console.log(checked);
              }
            });
          }
        }}
      />
    </>
  );
}
