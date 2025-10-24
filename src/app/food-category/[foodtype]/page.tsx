import FoodCategoryHeader from "@/app/ui/foodcategory/FoodCategoryHeader";
import FoodCategoryMain from "@/app/ui/foodcategory/FoodCategoryMain";


export default async function page({
  params,
}: {
  params: Promise<{ foodtype: string }>;
}) {
  const { foodtype } = await params;
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <FoodCategoryHeader foodCategory={foodtype} />
        <FoodCategoryMain foodCategory={foodtype}/>
      </div>
    </>
  );
}
