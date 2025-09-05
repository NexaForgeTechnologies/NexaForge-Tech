import PortfolioTabsCont from "@/containers/PortfolioTabsCont";
import HeroComp from "../../components/HeroComp";
export default function Portfolio() {
    return (
        <>
            <HeroComp 
            icon={'home'}
            home={'Home'}
            page={'portfolio'}
            title={'Portfolio'}
            title2={'Partner with us to elevate business performance'}
            para={'Empowering visionary enterprises in their digital transformation endeavors '}
            sideImage={'Group-529.svg'}
            />
            <PortfolioTabsCont />
        </>
    );
}