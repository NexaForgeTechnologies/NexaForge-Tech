import BuildSomethingComp from "../../components/BuildSomethingComp";
import HeroComp from "../../components/HeroComp";
import ClientsTab from "../../containers/ClientsTab";

export default function Clients() {
    return (
        <>
            <section>
                <HeroComp
                    page={'clients'}
                    title={'Our Clients'}
                    title2={'Partner with us to elevate business performance'}
                    para={'Empowering visionary enterprises in their digital transformation endeavors '}
                    sideImage={'/clients-hero.png'}
                />

                <ClientsTab />

                <BuildSomethingComp
                    TitleBold={"Let’s Build"}
                    TitlenotBold={"Something Great"}
                    para={"From consultation to deployment, we help you every step of the way."}
                    BtnName={"Contact Us"}
                />
            </section>
        </>
    );
}