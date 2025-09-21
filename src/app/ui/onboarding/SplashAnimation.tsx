"use client";

import Image from "next/image";

export default function SplashAnimation() {
  return (
    <div className="min-h-[100vh]  overflow-hidden relative items-center justify-center flex flex-col animate-disapearpage">
      {/* className="animate-disapearpage" */}
      <Image
        src={"/Ellipse 1005.png"}
        width={177}
        height={177}
        alt=""
        className="absolute left-[-100] top-[-100] animate-popdown w-auto h-auto float-right"
      />
      
        <Image
          src={"/Logo.png"}
          width={121.13}
          height={58.88}
          alt="food logo"
          className=""
        />
      
      <Image
        src={"/Ellipse 1006.png"}
        width={190}
        height={190}
        alt=""
        className="absolute bottom-[-200] right-[-200] animate-popup w-auto h-auto"
      />
    </div>
  );
}
