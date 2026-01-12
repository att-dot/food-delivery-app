import Button from "../onboarding/Button";

export default function Payment({ disabled }: { disabled: boolean }) {
  return (
    <section className=" flex flex-col gap-[28] fixed p-[30px_0px] bottom-0">
      <p className="flex items-center gap-[14px] text-[#A0A5BA] leading-[24px] tracking-normal text-[14px] font-normal">
        TOTAL: <span className="text-3xl text-[#181C2E]">${0}</span>
      </p>
      <Button
        disabled={disabled}
        textContent="PAY & CONFIRM"
        className="font-medium text-[14px] tracking-[0px] h-[62px]"
      />
    </section>
  );
}
