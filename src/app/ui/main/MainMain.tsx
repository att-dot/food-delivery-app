import Input from "../Input";
import MainCategoryMenu from "./MainCategoryMenu";
import MainRestaurantMenu from "./MainRestaurantMenu";

export default function MainMain({}) {
  return (
    <main>
      <p className="text-[16px] mt-6">
        Hey Halal, <span className="font-bold">Good Afternoon!</span>
      </p>
      <Input className={"mt-4"} />

      <MainCategoryMenu />
      <MainRestaurantMenu />
    </main>
  );
}
