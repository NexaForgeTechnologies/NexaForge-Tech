import MapContact from "../containers/MapContact";
import HeroComp from "../components/HeroComp";
import Form from "../containers/Form";

export default function Contact() {
    return (
        <>
            <HeroComp
                page={'contact'}
                title={'Contact us'}
                title2={'Ready to take your business to the next level? '}
                para={'Reach out to start transforming your visionary ideas into digital success.'}
                sideImage={'/contact-hero.png'}
            />
            <Form />
            <MapContact />
        </>
    );
}