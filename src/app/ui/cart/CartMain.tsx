import CartItem from "./CartItem";
import PlaceOrder from "./PlaceOrder";

export default function CartMain({
  isEditing = false,
}: {
  isEditing?: boolean;
}) {
  const items = {};
  return (
    <main>
      <form className="flex gap-[32px] flex-col">
        <CartItem
          src="/onboarding/favoriteFood1.jpg"
          width={3845}
          height={4646}
          title={"Pizza Calzone European"}
          price={"69"}
          size='14"'
          defaultAmount={2}
          isEditing={isEditing}
        />
        <CartItem
          src="/onboarding/favoriteFood1.jpg"
          width={3845}
          height={4646}
          title={"Pizza Calzone European"}
          price={"32"}
          size='16"'
          defaultAmount={1}
          isEditing={isEditing}
        />
        <PlaceOrder />
      </form>
    </main>
  );
}
