"use client";

export default function Button({
  onClick = () => {},
  className = "",
  textContent,
  disabled = false,
}: {
  onClick?: () => void;
  className?: string;
  textContent: string;
  disabled?: boolean;
}) {
  const classNameOnDisabled = " bg-[#a0a0a0] active:outline-0 active:bg-[#a0a0a0] outline-0 active:opacity-[90%] hover:bg-[#a0a0a1] text-[#00000050]";
  const defaultClassName = 'text-white bg-[#FF7622] hover:bg-[#ff883e] active:outline-3 active:bg-[#ffffff] outline-[#FF7622] active:text-black transition-colors '
  return (
    <button
      type="submit"
      onClick={onClick}
      className={
        "w-80 h-16 box-border font-bold  rounded-2xl " +
        className +
        (disabled ? classNameOnDisabled : defaultClassName)
      }
      {...disabled? {disabled: true}: {}}
    >
      {textContent}
    </button>
  );
}
