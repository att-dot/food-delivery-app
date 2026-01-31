import FoodPageHeader from "@/app/ui/foodpage/FoodPageHeader";
import FoodPageMain from "@/app/ui/foodpage/FoodPageMain";


export default async function page() {

  return (
    <div className="flex flex-col items-start justify-center pl-6 mt-[50px] box-border">
      <FoodPageHeader />
      <FoodPageMain />
    </div>
  );
}
