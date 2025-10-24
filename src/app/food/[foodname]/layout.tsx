export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <footer className="h-[204px] w-full"></footer>
    </>
  );
}
