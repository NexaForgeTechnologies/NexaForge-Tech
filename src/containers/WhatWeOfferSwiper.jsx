"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import WeOfferDiv1 from "../components/WeOfferDiv1";

export default function WhatWeOfferSwiper() {
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
                setSlidesToShow(3.5);
            }
        };

        handleResize(); // call once on mount
        window.addEventListener("resize", handleResize); // update on resize
        return () => window.removeEventListener("resize", handleResize); // cleanup
    }, []);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,

        customPaging: i => <div />,
    };

    const data = [
        {
            img: "/offer-slide1.png",
            alt: "img1",
            title: "EXPERIENCE DESIGN",
            description: `Creating User-Centered Experiences to Impress and Inspire​`
        },
        {
            img: "/offer-slide2.png",
            alt: "img2",
            title: "DELIVERING INNOVATION",
            description: `Inspire, Develop, Implement`
        },
        {
            img: "/offer-slide3.png",
            alt: "img3",
            title: "TEAM AUGMENTATION",
            description: `Strategic Choice Over Outsourcing`
        },
        {
            img: "/offer-slide4.png",
            alt: "img4",
            title: "BRINGING INNOVATION TO LIFE",
            description: `From Conceptualization to Market Triumph`
        },
    ]

    return (
        <>
            <section className="py-20 flex flex-col gap-y-5 bg-[url('/whatweoffer.png')] bg-cover bg-center
            w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20 bg-no-repeat text-white">

                <div className="grid grid-col-1 lg:grid-cols-3 gap-y-3 md:gap-y-5 lg:gap-y-7 gap-x-10">
                    <div>
                        <span className="block w-30 md:w-40 h-1 bg-gradient-to-r from-[#5BDCE4] to-[#034FAF]   md:mb-10 mb-5"></span>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold max-w-160 text-white">
                            <span className="mr-1.5 font-light"> What</span>
                            <span className="">
                                we offer
                            </span>
                        </h1>

                    </div>

                    <div className="flex items-end">
                        <p className="text-base md:text-xl max-w-120 text-[#FFFFFF]">Our solutions are engineered for performance, reliability, and growth.</p>
                    </div>

                    {/* Arrows for carousel */}
                    {/* Custom Arrows */}
                    <div className="flex gap-x-3 mt-6 justify-center lg:justify-end items-center">
                        <div
                            onClick={() => sliderRef.current.slickPrev()}
                            className="material-symbols-outlined text-black 
                            active:border-[#034FAF] active:bg-[#034FAF] bg-[#FFFFFF80] active:text-white cursor-pointer 
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

                <div className="mt-5 md:mt-10">
                    <Slider ref={sliderRef} {...settings}>
                        {data.map((d) => (
                            <div className="min-h-90 md:min-h-100 lg:min-h-100 relative rounded overflow-hidden">

                                {/* Content */}
                                <div className="relative z-20 flex flex-col gap-y-2 bg-gradient-to-b from-[#034FAF] via-[#034FAF] to-[#034FAF]/0 p-5 pb-10 text-white">
                                    <h2 className="font-bold text-lg md:text-xl">{d.title}</h2>
                                    <p className="text-sm">
                                        {d.description}
                                    </p>
                                </div>

                                {/* Image */}
                                <Image
                                    src={d.img}
                                    alt={d.alt}
                                    fill
                                    priority
                                    className="object-cover object-bottom z-0"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
}
