import GoBack from "../ui/GoBack";
import PaymentMain from "../ui/paymentPage/PaymentMain";

export default function page() {
  return (
    <>
      <header className="flex gap-5 items-center self-start w-full max-w-3xl md:self-center ">
        <GoBack />
        <h1 className="text-[17px] leading-5.5 font-normal text-[#181C2E]">
          Payment
        </h1>
      </header>
      <PaymentMain />
    </>
  );
}
