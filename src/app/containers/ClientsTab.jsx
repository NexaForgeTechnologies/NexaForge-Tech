"use client"
import { useState } from "react";
import Image from "next/image";

export default function ClientsTab() {
    const [tab, setTab] = useState("tab1");

    return (
        <>
            <section className="flex flex-col justify-center items-center gap-y-5 md:gap-y-15">
                <ul className="flex justify-center gap-x-2 border border-[#A6CDFF] rounded bg-[#F2F8FF]">
                    <li
                        onClick={() => setTab("tab1")}
                        className={`py-3 px-6 font-semibold cursor-pointer rounded 
              ${tab === "tab1" ? "bg-[#034FAF] text-white scale-105" : "bg-[#F2F8FF]"}`}
                    >
                        Startups
                    </li>
                    <li
                        onClick={() => setTab("tab2")}
                        className={`py-3 px-6 font-semibold cursor-pointer rounded 
              ${tab === "tab2" ? "bg-[#034FAF] text-white scale-105" : "bg-[#F2F8FF]"}`}
                    >
                        Enterprise
                    </li>
                </ul>

                <section className="flex flex-col justify-center items-center">
                    {tab === "tab1" && (
                        <section className="flex flex-col justify-center items-center gap-y-10">
                            <h1 className="text-base sm:text-2xl md:text-4xl font-medium text-center max-w-180">
                                <span className="font-semibold"> Partners</span> we’ve helped go to market
                                faster using our <span className="font-semibold mr-2">MVP Development</span>
                                <span>Framework.</span>
                            </h1>

                        </section>
                    )}

                    {tab === "tab2" && (
                        <section className="flex flex-col justify-center items-center gap-y-10">
                            <h1 className="text-base sm:text-2xl md:text-4xl font-medium text-center max-w-180">
                                <span className="font-semibold"> Partners</span> we’ve helped digitally transform using our <span className="font-semibold mr-2">Innovation Delivery Framework.</span>
                            </h1>
                        </section>
                    )}


                </section>

                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7">
                        <div className="relative w-36 h-20 sm:w-40 sm:h-24 m-auto">
                            <Image
                                src="/procurement-logo.png"
                                alt="Procurement"
                                fill
                                className="object-contain"
                            />
                        </div>


                        <div className="relative w-36 h-20 sm:w-40 sm:h-24 m-auto">
                            <Image
                                src="/al-aqsa-logo.svg"
                                alt="Al Aqsa"
                                fill
                                className="object-contain"
                            />
                        </div>


                        <div className="relative w-36 h-20 sm:w-40 sm:h-24 m-auto">
                            <Image
                                src="/shirakatdari.png"
                                alt="Shirakatdari"
                                fill
                                className="object-contain"
                            />
                        </div>


                        <div className="relative w-36 h-15 sm:w-40 m-auto">
                            <Image
                                src="/ringforlives-logo.jpg"
                                alt="Ring for Lives"
                                fill
                                className="object-contain"
                            />
                        </div>
                        

                        <div className="relative w-36 h-20 sm:w-40 sm:h-24 m-auto">
                            <Image
                                src="/achieve-meter.png"
                                alt="Achieve Meter"
                                fill
                                className="object-contain"
                            />
                        </div>


                        <div className="relative w-30">
                            <Image
                                src="/ptx.png"
                                alt="PTX"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="relative w-36 h-20 sm:w-40 sm:h-24 m-auto">
                            <Image
                                src="/achievergroup.png"
                                alt="The Achiever Group"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="relative w-36 h-20 sm:w-40 sm:h-24 m-auto">
                            <Image
                                src="/xecplug.png"
                                alt="XecPlug"
                                fill
                                className="object-contain"
                            />
                            <span className="text-[7px] absolute bottom-[15%] left-2 sm:left-4 md:left-5 text-center">Functional to Enterprise Leadership</span>
                        </div>
                        
                        
                        <div className="relative w-36 h-20 sm:w-40 sm:h-24 m-auto">
                            <Image
                                src="/carbon-credit.png"
                                alt="Ring for Lives"
                                fill
                                className="object-contain"
                            />
                        </div>
                </section>
            </section>
        </>
    );
}
