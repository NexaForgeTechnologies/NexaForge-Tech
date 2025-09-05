export default function PortfolioTabComp({
    title,
    para,
    rowStartOne,
    src,
    data =
    ["Custom Web Development Solutions", "Comprehensive Maintenance & Support", "Innovative Mobile App Development (iOS & Android)", "Exceptional UI/UX Design & User-Centric Optimization"] }) {

    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-15 sm:gap-y-10">
                <div className={`flex justify-center`}>
                    <img src={src} alt="website" className="w-full object-center object-contain"/>
                </div>
                
                <div className={`flex flex-col gap-y-3 ${rowStartOne}`}>
                    <span className="block w-30 h-1 bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] mb-3"></span>
                    <h1 className="font-bold text-3xl md:text-4xl text-[#1B1B1B]">{title}</h1>
                    <p className="text-[#808080] pr-5">{para}</p>

                    <ul>
                        {data.map((item, index) => (
                            <>
                                <div key={index} className="border-b border-[#BCBCBC] hover:border-[#034FAF] flex justify-between group py-5">
                                    <li className="font-medium text-base md:text-lg text-[#1B1B1B] group-hover:text-[#034FAF]">{item}</li>
                                    <span className="material-symbols-outlined text-3xl text-[#BCBCBC] group-hover:text-[#034FAF]">
                                        arrow_forward_ios
                                    </span>
                                </div>
                            </>
                        ))}
                    </ul>
                </div>

                
            </section>
        </>
    );
}