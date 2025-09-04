import Image from "next/image";
export default function FlatCardComp({
    heading, img,
    img2 = '/linear-right.svg',
    para,
    items = "items-end",
    objectLeft = "object-left",
    objectRight = "object-right" }) {
    return (
        <>
            <section className="relative w-full rounded overflow-hidden">
                <Image
                    src={img2}
                    alt="gradient"
                    fill
                    className={`object-cover ${objectRight} z-10`}
                />
                <div className={`flex flex-col ${items} z-50 w-full relative`}>
                    <div className="w-full max-w-140 p-5 md:py-20 md:pr-5 text-left text-white bg-gradient-to-r from-[#034FAF] via-[#034FAF] to-[#034FAF]/0">
                        <h2 className="text-base md:text-2xl font-semibold">
                            {heading}
                        </h2>
                        <p className="text-sm md:text-base mt-3">
                            {para}
                        </p>
                    </div>
                </div>

                <Image
                    src={img}
                    alt="image"
                    fill
                    className={`object-cover ${objectLeft}`}
                />
            </section>
        </>
    );
}