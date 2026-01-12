import GoBack from "../ui/GoBack";
import PaymentMain from "../ui/paymentPage/PaymentMain";

export default function page() {
  return (
    <>
      <header className="flex gap-[20px] items-center self-start">
        <GoBack />
        <h1 className="text-[17px] leading-[22px] font-normal text-[#181C2E]">
          Payment
        </h1>
      </header>
      <PaymentMain />
    </>
  );
}
