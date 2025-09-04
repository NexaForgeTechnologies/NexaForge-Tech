import Image from "next/image";
export default function WeOfferDiv1({ img, title, para }) {
    return (
        <>
            <div className="relative w-full rounded overflow-hidden text-white p-5 flex flex-col justify-between
             border-[#D6E8FF4D]">
                <Image
                    src="/linear-toptodown.svg"
                    alt="gradient"
                    fill
                    className="object-cover object-top z-10"
                />

                <Image
                    src={img}
                    alt="bulb"
                    fill
                    className="object-cover object-bottom z-0"
                />

                <div className="relative z-20 flex flex-col gap-y-3">
                    <h2 className="font-bold text-2xl">{title}</h2>
                    <p className="text-sm">
                        {para}
                    </p>
                </div>
            </div>

        </>
    );
}