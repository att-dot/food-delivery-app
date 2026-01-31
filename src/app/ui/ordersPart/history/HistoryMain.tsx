import OngoingCard from "../ongoing/OngoingCard";

export default function HistoryMain() {
  const data: {
    type: string;
    restaurantName: string;
    items: string;
    code: string;
    price: string;
    pictureURl: string;
    status: "Completed" | "Canceled";
    date: string;
  }[] = [
    {
      type: "Food",
      restaurantName: "Pizza Hut",
      items: "3",
      code: "#937271",
      price: "$35.25",
      pictureURl: "",
      status: "Completed",
      date: new Date(2026, 0, 24, 22, 20).toString(),
    },
    {
      type: "Drink",
      restaurantName: "McDonald",
      items: "2",
      code: "#209874",
      price: "$65.25",
      pictureURl: "",
      status: "Completed",
      date: new Date(2026, 0, 22, 15, 25).toString(),
    },
    {
      type: "Food",
      restaurantName: "Vkusno i tochka",
      items: "1",
      code: "#111111",
      price: "$100.25",
      pictureURl: "",
      status: "Canceled",
      date: new Date(2026, 0, 25, 19, 34).toString(),
    },
  ];
  return (
    <>
      <section aria-label="Ongoing orders" className="w-full">
        {data.map((data) => (
          <OngoingCard {...data} isHistoryCard key={data.code} />
        ))}
      </section>
    </>
  );
}
