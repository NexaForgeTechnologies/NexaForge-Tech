import PortfolioTabComp from "@/components/PortfolioTabComp";

export default function PortfolioAllCont() {
    return (
        <>
            <section className="flex flex-col gap-y-10 md:gap-y-15">
                <PortfolioTabComp
                    src={"/web.png"}
                    title={"Web & Mobile Development"}
                    para={"Web and mobile development involves creating responsive websites and mobile applications that deliver seamless user experiences."}
                    rowStartOne={"lg:row-start-1"}
                    data={["Custom Web Development Solutions", "Comprehensive Maintenance & Support", "Innovative Mobile App Development (iOS & Android)", "Exceptional UI/UX Design & User-Centric Optimization"] }
                />

                <PortfolioTabComp
                    src={"/team.png"}
                    title={"Team Augmentation"}
                    para={"Team augmentation adds expert talent to your team quickly, boosting capacity and speeding up delivery."}
                    data={["Flexible Staffing for Project Requirements","Skilled Developers & Engineers On-Demand","Web, Mobile, and Software Development","Seamless Integration with Your Existing Team"] }
                />

                <PortfolioTabComp
                    src={"/it.png"}
                    title={"IT Network & Services"}
                    para={"IT Network & Services provide secure connectivity, system support, and reliable infrastructure for smooth business operations."}
                    rowStartOne={"lg:row-start-1"}
                    data={["Network Design, Setup, and Optimization","Cloud Infrastructure & Data Management","Managed IT Services & Support","Cybersecurity Solutions & Risk Management"] }
                />
            </section>
        </>
    );
}