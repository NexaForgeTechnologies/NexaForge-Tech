import Image from "next/image";

export default function LogoBar() {
    return (
        <section className="w-screen ml-[calc(50%-50vw)] overflow-hidden">
            <marquee className="select-none" scrollamount="5">
                <div className="flex gap-x-10">

                    <div className="relative w-40 h-20 flex-none">
                        <Image
                            src="/procurement-logo.png"
                            alt="Procurement"
                            fill
                            className="object-contain"
                        />
                    </div>


                    <div className="relative w-40 h-20 flex-none">
                        <Image
                            src="/al-aqsa-logo.svg"
                            alt="Al Aqsa"
                            fill
                            className="object-contain"
                        />
                    </div>


                    <div className="relative w-40 h-20 flex-none">
                        <Image
                            src="/shirakatdari.png"
                            alt="Shirakatdari"
                            fill
                            className="object-contain"
                        />
                    </div>


                    <div className="relative w-20 h-20 flex-none">
                        <Image
                            src="/ringforlives-logo.jpg"
                            alt="Ring for Lives"
                            fill
                            className="object-contain"
                        />
                    </div>


                    <div className="relative w-20 h-20 flex-none">
                        <Image
                            src="/carbon-credit.png"
                            alt="Carbon Credit"
                            fill
                            className="object-contain"
                        />
                    </div>


                    <div className="relative w-30 h-20 flex-none">
                        <Image
                            src="/xecplug.png"
                            alt="XecPlug"
                            fill
                            className="object-contain"
                        />
                        <span className="text-[7px] absolute bottom-[15%]  text-center">Functional to Enterprise Leadership</span>
                </div>

                <div className="relative w-30 h-20 flex-none">
                    <Image
                        src="/achieve-meter.png"
                        alt="Carbon Credit"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="relative w-28 h-20 flex-none">
                    <Image
                        src="/ptx.png"
                        alt="PTX"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </marquee>
        </section >
    );
}
