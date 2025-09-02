import HomeHero from "./containers/HomeHero";
import SoftwareProvider from "./containers/SoftwareProvider"
import FocusArea from "./containers/FocusArea";
import PreviewSlider from "./containers/PreviewSlider";
import LogoBar from "./containers/LogoBar";
import BulletCarousel from "./components/BulletCarousel";
import WhatWeOfferSwiper from "./containers/WhatWeOfferSwiper";
import BuildSomethingComp from "./components/BuildSomethingComp";
export default function Home() {
  return (
    <>
      <HomeHero />
      <LogoBar />
      <SoftwareProvider />
      <WhatWeOfferSwiper />
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

      <BuildSomethingComp 
      TitleBold={"Let’s Build"}
      TitlenotBold={"Something Great"}
      para={"From consultation to deployment, we help you every step of the way."} 
      BtnName={"Contact Us"}
      />
    </>
  );
}
