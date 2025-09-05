"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState, useEffect } from "react";

export default function PreviewSliderCont({
    data = [
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
            <div className="mt-8 ">
                <ul className="flex justify-center items-end gap-[17px] bg-red-400/50 list-none h-[50px] p-0 m-0">
                    {dots}
                </ul>
            </div>
        ),


        // Dot appearance
        customPaging: i => (
            <div className="w-[30px] h-[7px] rounded-[8%] bg-[#d9d9d9] transition-all duration-300 ease-in" />
        )
    };
    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
    .slick-slide > div {
      margin: 0 10px;
    }

    .slick-dots li.slick-active div {
      background: linear-gradient(to right, #5BDCE4, #034FAF);
      width: 40px;
      border-radius: 5px;
      z-index: 100;
    }
  `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);


    return (
        <>
            <section className="py-20 flex flex-col gap-y-5">
                <div className="flex flex-col md:flex-row justify-between w-full">
                    <div className="text-black">
                        <span className="block w-30 md:w-40 h-1 bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] mb-10"></span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-160">
                            <span className="mr-1"> Our Work</span>
                            <span className="font-light">
                                Speaks Volumes
                            </span>
                        </h1>
                    </div>

                    {/* Custom Arrows */}
                    {/* Arrows for carousel */}
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
                            <div>
                                <img src={d.img} alt="slider" className="w-full h-full object-cover rounded border border-[#034FAF]" />
                            </div>
                        ))}

                    </Slider>
                </div>
            </section>
        </>
    );
}
