import GoBack from "../GoBack";

export default function FoodPageHeader() {
  return (
    <header className="flex gap-4 justify-center items-center self-start">
      <GoBack />
      <h2 className="text-[17px] leading-[22px] tracking-normal">Details</h2>
    </header>
  );
}
