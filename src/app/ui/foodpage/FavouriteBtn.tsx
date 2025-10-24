import Image from "next/image";

export default function FavouriteBtn() {
  return (
    <label
      htmlFor="favouritebtn"
      className="absolute right-5 bottom-5 w-[37px] h-[37px]"
      role="button"
    >
      <input
        type="checkbox"
        id="favouritebtn"
        name="isFavourite"
        className="hidden peer "
      />
      <Image
        src={"/FoodPage/Favourite.png"}
        height={512}
        width={512}
        alt="save food"
        className=" absolute w-[37px] h-[37px] focus:outline-2 outline peer-checked:scale-0 scale-100 transition-transform"
      />

      <div className="absolute w-[37px] h-[37px] flex justify-center items-center peer-checked:scale-100 scale-0 transition-transform">
        <div className="absolute bg-white w-[37px] h-[37px] rounded-4xl "></div>
        <Image
          src={"/FoodPage/FavouriteClicked.png"}
          height={512}
          width={512}
          alt="save food"
          className="absolute  w-[15px] h-[13px] focus:outline-2 outline"
        />
      </div>
    </label>
  );
}
