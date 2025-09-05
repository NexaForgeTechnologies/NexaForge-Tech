import HeroComp from "../../components/HeroComp";
import WeOfferCont from "../../containers/WeOfferCont";
import BuildSomethingComp from "../../components/BuildSomethingComp";
export default function Services() {
    return (
        <>
            <HeroComp
                icon={"home"}
                home={'Home'}
                page={'services'}
                title={'Services'}
                title2={'Our Commitment knows no bound'}
                para={'No matter your company’s size, we’re here to champion innovation and bring your boldest ideas to life, leaving mediocrity far behind'}
                sideImage={'/Group-art.svg'}
            />

            <WeOfferCont />

            <BuildSomethingComp
                TitleBold={'Let’s Build Something Great'}
                para={'From consultation to deployment, we help you every step of the way.'}
                BtnName={'Contact Us'}
            />
        </>
    );
}