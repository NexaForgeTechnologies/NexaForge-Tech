import HomeHero from "./containers/HomeHero";
import SoftwareProvider from "./containers/SoftwareProvider"
import FocusArea from "./containers/FocusArea";
import PreviewSlider from "./containers/PreviewSlider";
import LogoBar from "./containers/LogoBar";
export default function Home() {
  return (
    <>
      <HomeHero />
      <LogoBar />
      <SoftwareProvider />
      <PreviewSlider />
      <FocusArea />
    </>
  );
}
