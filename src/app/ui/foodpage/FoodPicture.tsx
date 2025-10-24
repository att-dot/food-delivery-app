import Image from "next/image";
import FavouriteBtn from "./FavouriteBtn";

export default function FoodPicture() {
  return (
    <div className="relative h-[184px] w-[327px] ">
      <Image
        src={"/onboarding/favoriteFood1.jpg"}
        fill
        sizes="327px"
        className="object-cover rounded-4xl "
        alt="food image"
      />

      <FavouriteBtn />
    </div>
  );
}
