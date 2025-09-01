import HeroComp from "../components/HeroComp";
import EmployeeBenefits from "../containers/EmployeeBenefits";
import BuildSomethingComp from "../components/BuildSomethingComp";
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

            <BuildSomethingComp
                TitleBold={'Ready for new challenges?'}
                para={'Explore exciting job opportunities ranging from software engineers to technical recruiters. Get in touch with us for more details and updates.'}
                BtnName={'View Current Openings'}
            />
        </>
    );
}