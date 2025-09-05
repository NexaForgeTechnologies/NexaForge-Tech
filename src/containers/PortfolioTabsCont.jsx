"use client"
import { useState } from "react";
import PortfolioTabComp from "@/components/PortfolioTabComp";
import PortfolioAllCont from "./PortfolioAllCont";
export default function PortfolioTabsCont() {
    const [tab, setTab] = useState("tab1");
    return (
        <>
            <section className="flex flex-col justify-center items-center gap-y-12 pt-5 pb-20">
                <ul className="grid grid-cols-2 md:grid-cols-4 mb-5 bg-[#F2F8FF] border border-[#A6CDFF] rounded">
                    {[
                        { id: "tab1", label: "All" },
                        { id: "tab2", label: "Web & Mobile Development" },
                        { id: "tab3", label: "Team Augmentation" },
                        { id: "tab4", label: "IT Network & Services" },
                    ].map(({ id, label }) => (
                        <li key={id} className="text-2xl text-white text-center select-none flex justify-center items-center">
                            <button
                                onClick={() => setTab(id)}
                                className={`cursor-pointer w-full py-2 px-4 rounded h-full text-sm hover:bg-[#034FAF] hover:text-white ${tab === id
                                    ? "text-white bg-[#034FAF] text-base"
                                    : " text-black"
                                    }`}
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="pb-20">
                {tab === "tab1" && (
                    <>
                        <PortfolioAllCont />
                    </>
                )}
                {tab === "tab2" && (
                    <>
                        <PortfolioTabComp
                            src={"/web.png"}
                            title={"Web & Mobile Development"}
                            para={"Web and mobile development involves creating responsive websites and mobile applications that deliver seamless user experiences."}
                            rowStartOne={"lg:row-start-1"}
                            data={["Custom Web Development Solutions", "Comprehensive Maintenance & Support", "Innovative Mobile App Development (iOS & Android)", "Exceptional UI/UX Design & User-Centric Optimization"]}
                        />
                    </>
                )}{tab === "tab3" && (
                    <>
                        <PortfolioTabComp
                            src={"/team.png"}
                            title={"Team Augmentation"}
                            para={"Team augmentation adds expert talent to your team quickly, boosting capacity and speeding up delivery."}
                            rowStartOne={"lg:row-start-1"}
                            data={["Flexible Staffing for Project Requirements", "Skilled Developers & Engineers On-Demand", "Web, Mobile, and Software Development", "Seamless Integration with Your Existing Team"]}
                        />
                    </>
                )}{tab === "tab4" && (
                    <>
                        <PortfolioTabComp
                            src={"/it.png"}
                            title={"IT Network & Services"}
                            para={"IT Network & Services provide secure connectivity, system support, and reliable infrastructure for smooth business operations."}
                            rowStartOne={"lg:row-start-1"}
                            data={["Network Design, Setup, and Optimization", "Cloud Infrastructure & Data Management", "Managed IT Services & Support", "Cybersecurity Solutions & Risk Management"]}
                        />

                    </>
                )}
            </section>
        </>
    );
}