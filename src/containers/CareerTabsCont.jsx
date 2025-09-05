"use client"
import { useState } from "react";
import CareerTabsComp from "../components/CareerTabsComp";
export default function CareerTabsCont() {
    const [tab, setTab] = useState("tab1");
    return (
        <>
            <section className="flex flex-col justify-center items-center gap-y-12 bg-gradient-to-r from-[#FFFFFF] via-[#D0EEF9] to-[#FFFFFF] py-20">

                <div className="flex flex-col items-center gap-y-4 md:gap-y-5  text-black">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-center"> Are You the
                        <span className="font-bold"> Perfect Fit? </span></h1>

                    <p className="font-medium text-base md:text-xl text-[#1B1B1B] text-center max-w-200">We prioritize the personal well-being of our employees and strive to foster
                        a healthy work-life balance.</p>

                    <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-5 bg-[#F2F8FF] border border-[#A6CDFF] rounded">
                        {[
                            { id: "tab1", label: "Judgment" },
                            { id: "tab2", label: "Curiosity" },
                            { id: "tab3", label: "Passion" },
                            { id: "tab4", label: "Innovation" },
                            { id: "tab5", label: "Communication" },
                            { id: "tab6", label: "Honesty" },
                            { id: "tab7", label: "Impact" },
                        ].map(({ id, label }) => (
                            <li key={id} className="text-2xl text-white text-center select-none flex justify-center items-center">
                                <button
                                    onClick={() => setTab(id)}
                                    className={`cursor-pointer w-full py-2 px-2 rounded h-full text-sm hover:bg-[#034FAF] hover:text-white ${tab === id
                                        ? "text-white bg-[#034FAF] text-base"
                                        : " text-black"
                                        }`}
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <section className="">
                    {tab === "tab1" &&
                        <>
                            <CareerTabsComp
                                title={'Judgment'}
                                description={'Navigate ambiguity with wise decisions across people, technical, business, and creative spheres.'}
                                list={[
                                    {
                                        list: "Navigate ambiguity with wise decisions across people, technical, business, and creative spheres."
                                    },
                                    { list: "Go beyond surface fixes, identifying and addressing root causes effectively." },
                                    { list: "Articulate strategic objectives clearly, guiding actions purposefully." },
                                    { list: "Prioritize tasks, balancing immediate needs with future improvements." },
                                ]}

                                src={'/judgement.jpg'}
                            />
                        </>
                    }
                    {tab === "tab2" &&
                        <>
                            <CareerTabsComp
                                title={'Curiosity'}
                                description={'Navigate ambiguity with wise decisions across people, technical, business, and creative spheres.'}
                                list={[
                                    { list: "Rapidly absorb new information and exhibit a strong eagerness to learn." },
                                    { list: "Demonstrate a proactive effort to grasp our strategy, market dynamics, customer base, and partnerships." },
                                    { list: "Possess a comprehensive understanding of business, technology, and digital realms." },
                                    { list: "Contribute adeptly across various domains, extending beyond your primary expertise." },
                                ]}

                                src={'/curosity.jpg'}
                            />
                        </>
                    }
                    {tab === "tab3" &&
                        <>
                            <CareerTabsComp
                                title={'Passion'}
                                description={'Navigate ambiguity with wise decisions across people, technical, business, and creative spheres.'}
                                list={[
                                    { list: "NexaForge is driven by a thirst for excellence, inspiring others." },
                                    { list: "Demonstrates intense care for NexaForge’s success." },
                                    { list: "Exhibits unwavering determination and tenacity." },
                                    { list: "You smartly separate what must be done well now, and what can be improved later" },
                                ]}

                                src={'/headphone-guy.png'}
                            />
                        </>
                    }
                    {tab === "tab4" &&
                        <>
                            <CareerTabsComp
                                title={'Innovation'}
                                description={'Navigate ambiguity with wise decisions across people, technical, business, and creative spheres.'}
                                list={[
                                    { list: "Innovatively tackle tough problems with fresh perspectives and innovative thinking." },
                                    { list: "Fearlessly challenge the status quo, suggesting improved methods and questioning prevailing assumptions." },
                                    { list: "Proactively generate practical new ideas that prove instrumental in addressing challenges." },
                                    { list: "Streamline processes and minimize complexity, fostering nimbleness and adaptability through simplification." },
                                ]}

                                src={'/judgement.jpg'}
                            />
                        </>
                    }
                    {tab === "tab5" &&
                        <>
                            <CareerTabsComp
                                title={'Communication'}
                                description={'Navigate ambiguity with wise decisions across people, technical, business, and creative spheres.'}
                                list={[
                                    { list: "Articulate and concise in communication, both verbally and in writing." },
                                    { list: "Prioritize active listening over immediate reaction for deeper understanding." },
                                    { list: "Confidently engage in discussions, debates, and conflict resolution with clients." },
                                    { list: "Treat all individuals with respect, regardless of status or differing opinions." },
                                    { list: "Maintain composed demeanor in high-pressure scenarios, exhibiting calm poise." },
                                ]}

                                src={'/solYellow.jpg'}
                            />
                        </>
                    }
                    {tab === "tab6" &&
                        <>
                            <CareerTabsComp
                                title={'Honesty'}
                                description={'Navigate ambiguity with wise decisions across people, technical, business, and creative spheres.'}
                                list={[
                                    { list: "Renowned for candor and direct communication." },
                                    { list: "Remain apolitical when disagreeing with others." },
                                    { list: "Practice honesty by only speaking about colleagues what you’d say to their face." },
                                    { list: "Promptly acknowledge and take responsibility for mistakes." },
                                ]}

                                src={'/careers3.jpg'}
                            />
                        </>
                    }
                    {tab === "tab7" &&
                        <>
                            <CareerTabsComp
                                title={'Impact'}
                                description={'Navigate ambiguity with wise decisions across people, technical, business, and creative spheres.'}
                                list={[
                                    { list: "Achieve remarkable feats of essential tasks." },
                                    { list: "Exhibit unwaveringly strong performance for dependable collaboration." },
                                    { list: "Prioritize results over procedural intricacies." },
                                    { list: "Embrace bias towards action, steering clear of over-analysis." },
                                ]}

                                src={'/careers.jpg'}
                            />
                        </>
                    }
                </section>

            </section>
        </>
    );
}