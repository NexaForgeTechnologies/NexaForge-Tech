import WorkCont from "../containers/WorkCont";
import HeroComp from "../components/HeroComp";
import BuildSomethingComp from "../components/BuildSomethingComp";
export default function Work() {
    return (
        <>
            <HeroComp
                page={'work'}
                title={'OUR WORK'}
                title2={"We're Ready to Help You Build Something Incredible"}
                para={'Give us your details by filling out the form below and our associate will get back to you with the best possible solution.'}
                sideImage={'/work-hero.png'}
            />
    
            <WorkCont />
            
            <BuildSomethingComp 
            TitleBold={'Let’s Build'}
            TitlenotBold={'Something Great'}
            para={'From consultation to deployment, we help you every step of the way.'}
            BtnName={'Contact Us'}
            />
        </>
    );
}