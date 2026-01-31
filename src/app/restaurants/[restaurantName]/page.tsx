import RestPageHeader from "@/app/ui/restaurantPage/RestPageHeader";
import RestPageMain from "@/app/ui/restaurantPage/RestPageMain";

export default async function Page() {

  return (
    <div className="w-[327px] scroll-p-0">
      <RestPageHeader />

      <RestPageMain />
    </div>
  );
}
