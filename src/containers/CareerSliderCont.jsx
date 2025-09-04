"use client";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CareerSliderCont() {
    const sliderRef = useRef(null);

    const data = [
        {
            img: "/career-slider-img.jpg",
            title: "What’s Happening",
            subtitle: "Annual Meetup",
            description: `Each year, NexaForge Technologies hosts its annual
                    meetup in England & Wales — home to our largest
                    associate base. This event is dedicated to reviewing
                    our company’s performance, celebrating major
                    milestones, and recognizing standout contributors.
                    It’s also a moment to honor the commitment of our
                    team members who have been with us for up to
                    5 years.`
        },
        {
            img: "/career-slider-img.jpg",
            title: "What’s Happening",
            subtitle: "Annual Meetup",
            description: `Each year, NexaForge Technologies hosts its annual
                    meetup in England & Wales — home to our largest
                    associate base. This event is dedicated to reviewing
                    our company’s performance, celebrating major
                    milestones, and recognizing standout contributors.
                    It’s also a moment to honor the commitment of our
                    team members who have been with us for up to
                    5 years.`
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    return (
        <section
            className="bg-[url('/career-slider-bg.png')] bg-cover bg-black py-10 md:py-20
        w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20"
        >
            {/* DESKTOP ARROWS (Outside Slider, fixed position) */}
            <div className="flex md:hidden gap-x-3 ml-3 mb-6">
                <button
                    onClick={() => sliderRef.current?.slickPrev()}
                    className="material-symbols-outlined text-black bg-[#FFFFFF80] hover:bg-[#034FAF] hover:text-white border border-transparent hover:border-white p-4 rounded"
                >
                    arrow_back
                </button>
                <button
                    onClick={() => sliderRef.current?.slickNext()}
                    className="material-symbols-outlined text-white bg-[#034FAF] border border-[#034FAF] p-4 rounded"
                >
                    arrow_forward
                </button>
            </div>

            <Slider ref={sliderRef} {...settings}>
                {data.map((d, index) => (
                    <div key={index}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-7">
                            {/* LEFT: Text */}
                            <div className="text-white flex flex-col items-start gap-y-5 md:pr-10">
                                <div>
                                    <span className="block w-30 md:w-40 h-1 bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] mb-10"></span>
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-160">
                                        {d.title}
                                    </h1>
                                </div>

                                {d.subtitle && (
                                    <p className="font-medium text-base md:text-xl max-w-200">
                                        {d.subtitle}
                                    </p>
                                )}
                                <p className="font-normal text-base md:text-xl max-w-200">
                                    {d.description}
                                </p>
                            </div>

                            {/* RIGHT: Image */}
                            <div className="flex justify-center items-center">
                                <img
                                    src={d.img}
                                    alt="Slide"
                                    className="rounded overflow-hidden"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* DESKTOP ARROWS (Outside Slider, fixed position) */}
            <div className="hidden md:flex gap-x-3 ml-3 mb-6">
                <button
                    onClick={() => sliderRef.current?.slickPrev()}
                    className="material-symbols-outlined text-black bg-[#FFFFFF80] hover:bg-[#034FAF] hover:text-white border border-transparent hover:border-white p-4 rounded"
                >
                    arrow_back
                </button>
                <button
                    onClick={() => sliderRef.current?.slickNext()}
                    className="material-symbols-outlined text-white bg-[#034FAF] border border-[#034FAF] p-4 rounded"
                >
                    arrow_forward
                </button>
            </div>
        </section>
    );
}
