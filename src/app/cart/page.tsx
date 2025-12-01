import CartHeader from "../ui/cart/CartHeader";
import CartMain from "../ui/cart/CartMain";

export default function page() {
  return (
    <div className="bg-[#121223] w-full h-full absolute box-border p-[50px_24px_0px_24px] top-0 flex flex-col items-center">
      <CartHeader />
      <CartMain />
    </div>
  );
}
