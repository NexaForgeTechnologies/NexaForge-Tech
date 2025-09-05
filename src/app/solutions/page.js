import BuildSomethingComp from "../../components/BuildSomethingComp";
import HeroComp from "../../components/HeroComp";
import OurSolutionCont from "../../containers/OurSolutionCont";
export default function Solutions() {
    return (
        <>
            <HeroComp
                page={'solutions'}
                icon={"home"}
                home={'Home'}
                title={'Solutions'}
                title2={'Solutions for Building, Scaling, and Transforming Your Business'}
                para={'Leverage our agile development and delivery frameworks to stay ahead of the innovation curve.'}
                sideImage={'/Group529.svg'}
            />

            <OurSolutionCont />

            <BuildSomethingComp
                TitleBold={'Let’s Build Something Great'}
                para={'From consultation to deployment, we help you every step of the way.'}
                BtnName={'Contact Us'}
            />
        </>
    );
}