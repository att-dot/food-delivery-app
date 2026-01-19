import OngoingCard from "./OngoingCard";

export default function OngoingMain() {
  const data = [
    {
      type: "Food",
      restaurantName: "Pizza Hut",
      items: "3",
      code: "#937271",
      price: "$35.25",
      pictureURl: "",
    },
    {
      type: "Drink",
      restaurantName: "McDonald",
      items: "2",
      code: "#209874",
      price: "$65.25",
      pictureURl: "",
    },
    {
      type: "Food",
      restaurantName: "Vkusno i tochka",
      items: "1",
      code: "#111111",
      price: "$100.25",
      pictureURl: "",
    },
  ];
  return (
    <section aria-label="Ongoing orders" className="w-full">
      {data.map((data) => (
        <OngoingCard {...data} />
      ))}
    </section>
  );
}
