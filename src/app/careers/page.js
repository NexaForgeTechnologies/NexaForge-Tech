import HeroComp from "../components/HeroComp";
import EmployeeBenefits from "../containers/EmployeeBenefits";
import BuildSomethingComp from "../components/BuildSomethingComp";
import CareerTabsCont from "../containers/CareerTabsCont";
import BulletCarousel from "../components/BulletCarousel";
import CareerSliderCont from "../containers/CareerSliderCont";
export default function Careers() {
    return (
        <>
            <HeroComp
                icon={'home'}
                home={'home'}
                page={'careers'}
                title={'Careers'}
                title2={'Partner with us to elevate business performance'}
                para={'Empowering visionary enterprises in their digital transformation'}
                sideImage={'/careers-hero.png'}
            />

            <EmployeeBenefits />
            <CareerSliderCont />
            <BulletCarousel
                data={[
                    {
                        img: "/Slider-img1.png",
                        name: "Sarah Khan",
                        title: "Product Manager, FinEdge Solutions",
                        description: `NexaForge brought our vision to life with a seamless app that exceeded expectations. Their team was responsive, creative, and fast!`
                    },
                    {
                        img: "/Slider-img1.png",
                        name: "Sarah Khan",
                        title: "Product Manager, FinEdge Solutions",
                        description: `NexaForge brought our vision to life with a seamless app that exceeded expectations. Their team was responsive, creative, and fast!`
                    },
                    {
                        img: "/Slider-img1.png",
                        name: "Sarah Khan",
                        title: "Product Manager, FinEdge Solutions",
                        description: `NexaForge brought our vision to life with a seamless app that exceeded expectations. Their team was responsive, creative, and fast!`
                    },
                    {
                        img: "/Slider-img1.png",
                        name: "Sarah Khan",
                        title: "Product Manager, FinEdge Solutions",
                        description: `NexaForge brought our vision to life with a seamless app that exceeded expectations. Their team was responsive, creative, and fast!`
                    },
                ]}
            />

            <CareerTabsCont />
            <BuildSomethingComp
                TitleBold={'Ready for new challenges?'}
                para={'Explore exciting job opportunities ranging from software engineers to technical recruiters. Get in touch with us for more details and updates.'}
                BtnName={'View Current Openings'}
            />
        </>
    );
}