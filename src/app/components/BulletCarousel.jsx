"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState, useEffect } from "react";

export default function BulletCarousel({
    data = [
        {
            img: "/Slider-img1.png",
            name: "Sarah Khan",
            title: "Product Manager, FinEdge Solutions",
            description: `NexaForge brought our vision to life with a seamless app that exceeded expectations. Their team was responsive, creative, and fast!`
        }]
    //props
}) {

    const sliderRef = useRef(null);
    const [slidesToShow, setSlidesToShow] = useState(1); // default Mobile

    // Set slidesToShow based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setSlidesToShow(1);
      } else if (width < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize(); // call once on mount
    window.addEventListener("resize", handleResize); // update on resize
    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);


   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: dots => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: i => <div />,
  };

    return (
        <>
            <section className="py-20 flex flex-col gap-y-5">
                <div className="flex flex-col md:flex-row justify-between w-full">
                    <div>
                        <span className="block w-30 md:w-40 h-1 bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] mb-10"></span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-160">
                            <span className="mr-1"> What People</span>
                            <span className="font-light">
                                Think About Our Products
                            </span>
                        </h1>
                    </div>

                    {/* Arrows for carousel */}
                    {/* Custom Arrows */}
                    <div className="flex gap-x-3 mt-6 justify-end items-center">
                        <div
                            onClick={() => sliderRef.current.slickPrev()}
                            className="material-symbols-outlined text-black border border-[#E2E2E2] 
                            active:border-[#034FAF] active:bg-[#034FAF] active:text-white cursor-pointer 
                            p-2 sm:p-3 md:p-4 text-base sm:text-lg md:text-xl rounded select-none"
                        >
                            arrow_back
                        </div>
                        <div
                            onClick={() => sliderRef.current.slickNext()}
                            className="material-symbols-outlined text-white bg-[#034FAF] border border-[#034FAF] 
                           active:border-[#E2E2E2] cursor-pointer  p-2 sm:p-3 md:p-4 text-base sm:text-lg md:text-xl rounded select-none"
                        >
                            arrow_forward
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <Slider ref={sliderRef} {...settings}>
                        {data.map((d) => (
                            <div className="bg-[#F8FBFF] border border-[#034FAF4D] rounded-lg p-6 flex flex-col justify-between max-w-md mb-5">
                                {/* Top content */}
                                <div className="flex flex-col gap-y-4">
                                    {/* Profile */}
                                    <div className="flex items-center gap-x-4">
                                        <img
                                            src={d.img}
                                            alt={d.name}
                                            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="text-lg font-semibold text-black">{d.name}</p>
                                            <p className="text-sm text-black">{d.title}</p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                        {d.description}
                                    </p>
                                </div>

                                {/* Rating pinned at bottom */}
                                <span className="flex gap-x-2 mt-4">
                                    <span className="text-[#808080]">4.9/5.0</span>
                                    <span>⭐⭐⭐⭐⭐</span>
                                </span>
                            </div>

                        ))}

                    </Slider>
                </div>
            </section>
        </>
    );
}
