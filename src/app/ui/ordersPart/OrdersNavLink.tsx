"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./style.scss";
export default function OrdersNavLink({
  className = "",
}: {
  className?: string;
}) {
  const pathname = usePathname();
  const curPageStyle =
    " text-[#FF7622] font-bold  border-b-0 border-[#FF7622] chosen ";

  return (
    <nav
      className={
        " w-full max-w-[600px] justify-self-center p-[0px_auto] grid grid-cols-2 grid-rows-[33px] text-center gap-[24px]  box-border " +
        (pathname === "/orders/ongoing" ? " navOngoing " : " navHistory ") +
        className
      }
    >
      <Link
        href={"./ongoing"}
        className={
          "ongoing w-full transition-all  text-[14px] hover:bg-[#FF762210] " +
          (pathname === "/orders/ongoing"
            ? curPageStyle
            : " text-[#A5A7B9] font-normal")
        }
      >
        Ongoing
      </Link>{" "}
      <Link
        href={"./history"}
        className={
          "history w-full transition-all  text-[14px] hover:bg-[#FF762210] " +
          (pathname === "/orders/history"
            ? curPageStyle
            : " text-[#A5A7B9] font-normal ")
        }
      >
        History
      </Link>
    </nav>
  );
}
