import Image from "next/image";

export default function Ingridients() {
  const ingrediensURL = ["salt", "meat", "onion", "garlic", "chiliPepper"];
  return (
    <div className="grid grid-cols-5 grid-rows-[17px_50px] gap-[19px] relative h-[86px]">
      <p className="text-[#32343E] text-[13px] font-normal tracking-[2%] col-span-5">
        INGRIDIENTS
      </p>
      {ingrediensURL.map((ingridientURL) => (
        <label
          htmlFor={ingridientURL}
          key={ingridientURL}
          className="bg-[#FFEBE4] size-[50px] flex items-center justify-center rounded-3xl transition-all has-checked:bg-[#FF936C] select-none cursor-pointer hover:scale-105 active:opacity-95 focus:outline-[#6b3725] focus:outline-1"
        >
          <input
            type="checkbox"
            id={ingridientURL}
            className="hidden peer"
            name={ingridientURL}
          />
          <Image
            src={`/FoodPage/${ingridientURL}.png`}
            width={512}
            height={512}
            alt={ingridientURL}
            className="size-[24px] peer-checked:brightness-0 transition-all"
          />
        </label>
      ))}
    </div>
  );
}
