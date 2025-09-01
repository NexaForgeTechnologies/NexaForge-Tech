import WeOfferDiv1 from "../components/WeOfferDiv1";
import WeOfferDiv2 from "../components/WeOfferDiv2";
export default function WeOfferCont() {
    return (
        <>
            <section className="w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20
            bg-[url('/Group662.png')] bg-contain bg-center py-22 flex flex-col gap-y-10">

                <span className="block w-30 md:w-40 h-1 bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] relative -bottom-3"></span>
                <div className="text-white flex flex-col md:flex-row md:justify-start md:items-center gap-x-5 md:gap-x-15">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">
                        What
                        <span className="font-semibold"> We Offer </span></h1>
                    <p className="text-base md:text-xl max-w-120">Our solutions are engineered for performance, reliability, and growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [grid-auto-rows:minmax(500px,_auto)] gap-6">

                    <WeOfferDiv1
                        img={"/bulb.svg"}
                        title={'Empowering Ideas with Research & Insights'}
                        para={' From concept to reality, we bridge the gap with customer-centric insights. Through thorough field interviews and comprehensive analysis, we craft user experiences that drive conversions by minimizing friction.'}
                    />

                    <WeOfferDiv2
                        img={"/Rectangle157.svg"}
                        title={'Enhanced User Experience Design'}
                        para={' Is it time to revamp your website? Looking to enhance your understanding of customer interactions? Utilizing design thinking and agile sprints, we expedite the process of ideating, iterating, and prototyping designs to deliver experiences that not only drive conversions but also captivate and inspire. '}
                    />

                    <WeOfferDiv1
                        img={"/Rectangle158.svg"}
                        title={'Enterprise Software Development'}
                        para={' Optimize your business operations with our enterprise software solutions, designed to deliver high performance, faster response times, improved coordination, cost effectiveness, enhanced scalability, and superior customer service. '}
                    />

                    <WeOfferDiv1
                        img={"/careers3.jpg"}
                        title={'Custom Software Solutions'}
                        para={'Whether you’re seeking B2B, B2C, or SaaS software development, find comprehensive solutions all in one place. Leveraging years of expertise, we deliver unparalleled custom software development services to clients worldwide. '}
                    />

                    <WeOfferDiv2
                        img={"/careers.jpg"}
                        title={'Software Product Development'}
                        para={'Crafting Future-Ready Software Products How do we achieve it? We offer scalable solutions that deploy rapidly and are effortlessly managed. Leveraging our technological expertise, we fuse business acumen to ensure your digital products are user-centric. '}
                    />

                    <WeOfferDiv1
                        img={"/Globoforce.png"}
                        title={'Application Development'}
                        para={'As a comprehensive software development firm, we catalyze your triumph. We combine insightful guidance, revolutionary tactics, impeccable UI/UX design services, and state-of-the-art technology to craft experiences centered around people.'}
                    />

                    <WeOfferDiv1
                        img={"/puzzles.jpg"}
                        title={'Software Project Management'}
                        para={'We value your vision, translating it seamlessly into reality through daily collaborative meetings, adept sprint leadership, meticulous resource management, user story composition, backlog refinement, feature prioritization, roadmap development, and beyond. '}
                    />

                    <WeOfferDiv2
                        img={"/uiux.jpg"}
                        title={'UI/UX Design Services'}
                        para={'Our UI/UX design process begins with a thorough analysis of your target audience to comprehend their behaviors, requirements, and obstacles. This approach allows us to create visually captivating, user-centric interfaces that optimize your software’s usability. '}
                    />

                    <WeOfferDiv1
                        img={"/careers2.jpg"}
                        title={'Software Quality Assurance'}
                        para={'Whether you require mobile, desktop, or cutting-edge applications, our offshore team of software testing experts employs a targeted strategy to maximize the effectiveness of our testing efforts and enhance time-to-market. '}
                    />
                    
                    {/* <WeOfferDiv1
                        img={"/DevOps.jpg"}
                        title={'DevOps & Cloud'}
                        para={'Struggling to meet update deadlines? Continuous integration and delivery seem out of reach? Sleepless nights due to uncertainties? Fear not, as we specialize in crafting CI/CD pipelines, managing cloud environments, and establishing scalable, secure production environments—so you can concentrate on what truly matters.'}
                    /> */}
                </div>
            </section>
        </>
    );
}