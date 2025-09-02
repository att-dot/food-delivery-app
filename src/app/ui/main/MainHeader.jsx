import Image from "next/image";

export default function MainHeader(params) {
    return (<>
    <div className="grid">
        <div className=" items-center justify-center flex">
        <Image src={'/main/Menu.png'} width={45} height={45} alt="menu button" />
        <p className="text-[#FC6E2A] font-bold text-[12px]">DELIVER TO</p>
        <p className="text-[#676767] text-[14px]">Halal Lab office</p>
        <Image src={'/main/arrow-down.png'} width={10.75} height={7} />
        <Image src={'/main/arrow-down.png'} width={14} height={120} />
        <Image src={'/main/arrow-down.png'} width={10.75} height={8} />
        <div className="border-l-8 border-r-8 border-t-8 border-transparent border-t-black h-0 w-0 rounded-[0.5px] "></div>
        <div className="triangle"> </div>
        </div>
    </div>
    </>)
};
