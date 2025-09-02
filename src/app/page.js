import HomeHero from "./containers/HomeHero";
import SoftwareProvider from "./containers/SoftwareProvider"
import FocusArea from "./containers/FocusArea";
import PreviewSlider from "./containers/PreviewSlider";
import LogoBar from "./containers/LogoBar";
import BulletCarousel from "./components/BulletCarousel";
export default function Home() {
  return (
    <>
      <HomeHero />
      <LogoBar />
      <SoftwareProvider />
      <PreviewSlider />
      <FocusArea />
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
    </>
  );
}
