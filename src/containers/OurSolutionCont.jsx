import CardSolutions from "../components/CardSolutions";
import FlatCardComp from "../components/FlatCardComp";
export default function OurSolutionCont() {
    return (
        <>
            <section className="w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20
                bg-[url('/Group662.png')] bg-cover bg-center py-22 flex flex-col gap-y-10">

                <span className="block w-30 md:w-40 h-1 bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] relative -bottom-3"></span>

                <div className="text-white flex flex-col md:flex-row md:justify-start md:items-center gap-x-5 md:gap-x-18">

                    <h1 className="text-3xl md:text-4xl lg:text-5xl">
                        <span className="font-bold"> Our Solutions </span></h1>
                    <p className="text-base md:text-xl max-w-120">Our solutions are engineered for performance, reliability, and growth.</p>
                </div>


                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6">

                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                        <FlatCardComp
                            heading={'Artificial Intelligence'}
                            img={'/Rectangle154.png'}
                            para={'As pioneers in machine learning solutions, we thrive on innovative prototyping and personalized strategies. Join us in navigating the dynamic AI landscape with tools like ChatGPT, Google BERT, and OpenAI, achieving precise business objectives through groundbreaking solutions.'}
                        />
                    </div>

                    <CardSolutions
                        img={'/solution1.png'}
                        heading={'Customer Research & Insights'} />

                    <CardSolutions
                        img={'/solution3.png'}
                        heading={'Experience Strategies'} />

                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <CardSolutions
                            img={'/solution2.png'}
                            heading={'Project & Product Development'} />
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                        <FlatCardComp
                            heading={'Next Level Web & Mobile App Development'}
                            img2={'/Linear-Left.svg'}
                            items={"items-start"}
                            para={'From developing DApps for secure peer-to-peer payments to crafting self-executing smart contracts, our blockchain developers are skilled in creating robust solutions on Solidity, Ethereum, Hyperledger, and Solana.'}
                            img="/sol4.jpg" />
                    </div>

                    <CardSolutions
                        img={'/solWomen.png'}
                        heading={'Enterprise Solutions'} />

                    <CardSolutions
                        img={'/solYellow.jpg'}
                        heading={'Team Augmentation'} />

                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <CardSolutions
                            img={'/mvp-3.png'}
                            heading={'Continuous integration and delivery'} />
                    </div>


                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                        <FlatCardComp
                            heading={'Efficient DevOps & Cloud Solutions'}
                            img={'/DevOps.jpg'}
                            para={'Struggling to meet deadlines for updates? Continuous integration and delivery remain elusive? Let go of uncertainties with our expertise in creating CI/CD pipelines, managing cloud environments, and establishing scalable, secure production environments—so you can focus on what truly matters.'}
                        />
                    </div>

                    <CardSolutions
                        img={'/magBox.jpg'}
                        heading={'Managing Cloud Environments'} />

                    <CardSolutions
                        img={'/magBox-mid-3.jpg'}
                        heading={'Secure Peer-To-Peer Payments & Instant Microtransactions'} />

                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <CardSolutions
                            img={'/solMen.jpg'}
                            heading={'Create Self-Executing Smart Contracts'} />
                    </div>


                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                        <FlatCardComp
                            heading={'Blockchain Expertise'}
                            img={'/careers3.jpg'}
                            para={'Discover the blockchain realm with us. Whether you seek to develop DApps for secure peer-to-peer payments & instant microtransactions or aim to create self-executing smart contracts, our developers are here. Leveraging Solidity, Ethereum, Hyperledger, & Solana, we ensure robust solutions.'}
                        />
                    </div>

                    <CardSolutions
                        img={'/mobile2.png'}
                        heading={'Fintech Payment Solutions Simplified'} />

                    <CardSolutions
                        img={'/scaled-1.jpg'}
                        heading={'C2Pay'} />

                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <CardSolutions
                            img={'/porfolio-laptop.png'}
                            heading={'Create Self-Executing Smart Contracts'} />
                    </div>


                </section>

            </section>
        </>
    );
}