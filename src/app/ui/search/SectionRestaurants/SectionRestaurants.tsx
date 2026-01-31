
import SectionRestaurantItem, { RestaurantView } from "./SectionRestaurantItem";

export default function SectionRestaurants() {
  const restaurantArr: RestaurantView[] = [
    {
      name: "Pansi Restaurant",
      rating: 4.7,
      imgURL: "/main/RestaurantBG.png",
    },
    {
      name: "American Spicy Burger Shop",
      rating: 4.3,
      imgURL: "/main/RestaurantBG.png",
    },
    {
      name: "Cafenio Coffee Club",
      rating: 4.1,
      imgURL: "/main/RestaurantBG.png",
    },
  ];

  return (
    <section className="mt-8 w-full ">
      <h1 className="text-[20px] font-normal leading-6 text-[#32343E] select-none">
        Suggested Restaurants
      </h1>
      <section className="flex  flex-col sx:flex-row sx:flex-wrap sx:gap-5 sx:justify-around mt-[20px]">
        {restaurantArr.map((restaurant) => (
          <SectionRestaurantItem
            restaurant={restaurant}
            key={restaurant.name}
          />
        ))}
      </section>
    </section>
  );
}
