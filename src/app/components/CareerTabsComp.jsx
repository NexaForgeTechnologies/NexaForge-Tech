
export default function CareerTabsComp({ title, description, list = [], src }) {

    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-7">

                {/* content */}
                <div className="flex flex-col gap-y-3">
                    <span className="block w-30 md:w-40 h-1 bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] mb-3"></span>

                    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-black"> {title}</h1>

                    <p className="font-normal text-base md:text-lg text-[#1B1B1B] max-w-130 lg:mr-10">{description}</p>
                    {list.map((li) => (
                        <ul className="flex gap-x-3">
                            <span className="w-3 h-3 md:w-4 md:h-4 bg-[#034FAF] shrink-0 rounded-full relative top-1"></span>
                            <li className="max-w-130 text-[#1B1B1B] text-base md:text-xl lg:mr-10">{li.list}</li>
                        </ul>
                    ))}
                </div>

                <div className="flex justify-center items-center">
                    <img src={src} alt="" className=" rounded overflow-hidden" />
                </div>

            </section>
        </>
    );
}