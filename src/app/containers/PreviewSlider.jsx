"use client"
import Image from "next/image";
import { useState } from "react";
export default function PreviewSlider() {
    const slides = [
    { src: "/slide1.jpg", alt: "First slide" },
    { src: "/slide2.jpg", alt: "Second slide" },
    { src: "/slide3.jpg", alt: "Third slide" },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };
    return (
        <>
            <span className="block w-30 md:w-40 h-1 bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] mb-10"></span>
            <div className="text-black flex flex-col gap-y-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Our Work <span className="text-3xl md:text-4xl lg:text-4xl font-medium">Speaks <br /> Volumes</span></h1>

                <div className="relative w-full overflow-hidden">
                    {/* Slides */}
                    <div className="relative w-full h-[400px]">
                        {slides.map((slide, i) => (
                            <div
                                key={i}
                                className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                            >
                                <Image
                                    src={slide.src}
                                    alt={slide.alt}
                                    fill
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-3 h-3 rounded-full ${i === current ? "bg-blue-600" : "bg-gray-400"
                                    }`}
                            ></button>
                        ))}
                    </div>

                    {/* Prev / Next */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
                    >
                        ›
                    </button>
                </div>

            </div>
        </>
    );
}