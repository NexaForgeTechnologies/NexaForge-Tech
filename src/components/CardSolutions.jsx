import Image from "next/image";
export default function CardSolutions({ img, heading }) {
    return (
        <>
            <div className="relative w-full min-h-60 lg:min-h-80 rounded overflow-hidden text-white p-5 flex flex-col justify-between
                     border-[#D6E8FF4D]">
                {/* <Image
                    src="/linear2.svg"
                    alt="gradient"
                    fill
                    className="object-cover object-top z-10"
                /> */}

                <p className="text-base md:text-2xl font-semibold z-20 bg-gradient-to-b from-[#034FAF] via-[#034FAF]/80 to-[#034FAF]/0 px-5 pt-5 min-h-25 md:min-h-40 rounded absolute top-0 left-0 right-0">
  {heading}
</p>


                <Image
                    src={img}
                    alt="bulb"
                    fill
                    className="object-fill object-bottom z-0"
                />
            </div>
        </>
    );
}