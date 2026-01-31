import SectionPopFoodItem from "./SectionPopFoodItem";

export default function SectionPopFood() {
  const foodArr: {
    type: string;
    restaurant: string;
  }[] = [
    {
      type: "European Pizza",
      restaurant: "Uttora Coffe House",
    },
    {
      type: "Buffalo Pizza",
      restaurant: "Cafenio Coffee Club",
    },{
      type: "European Pizza",
      restaurant: "Uttora Coffe House",
    },
    {
      type: "Buffalo Pizza",
      restaurant: "Cafenio Coffee Club",
    },
  ];
  return (
    <section className="mt-8 w-full">
      <h1 className="text-[20px] font-normal leading-6 text-[#32343E] select-none">
        Popular Fast food
      </h1>
      <section className="flex flex-wrap sx:justify-around not mt-[69px] gap-y-[50px] justify-between">
        {foodArr.map((food, i) => (
          <SectionPopFoodItem food={food} key={food.type + i}/>
        ))}
      </section>
    </section>
  );
}
