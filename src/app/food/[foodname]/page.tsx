import FoodPageHeader from "@/app/ui/foodpage/FoodPageHeader";
import FoodPageMain from "@/app/ui/foodpage/FoodPageMain";
import GoBack from "@/app/ui/GoBack";

export default async function page({
  params,
}: {
  params: Promise<{ foodname: string }>;
}) {
  const { foodname } = await params;

  return (
    <div className="flex flex-col items-start justify-center pl-6 mt-[50px] box-border">
      <FoodPageHeader />
      <FoodPageMain />
    </div>
  );
}
