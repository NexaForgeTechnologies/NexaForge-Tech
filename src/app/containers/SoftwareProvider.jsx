import BtnOne from "../components/BtnOne";
export default function SoftwareProvider() {
    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 py-7 lg:py-20">
                <div className="py-10 flex items-center justify-center">
                    <img src="/Group-525.svg" alt="" />
                </div>

                <div className="py-5 lg:p-7 mt-10 lg:mt-0 flex flex-col gap-y-7">
                    <span className="block w-30 md:w-40 h-1 bg-gradient-to-r from-[#5BDCE4] to-[#034FAF]"></span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl"> <span className="font-bold"> More </span> than just a
                        <span className="font-bold"> software provider </span>
                    </h1>

                    <h2 className="text-base md:text-xl font-semibold z-10">We give our customers the choice, support, expertise and innovation to grow.</h2>
                    <p className="text-sm md:text-base">Our vision has always been grounded by our customers’ needs. Software should work together. It should join the dots between people, data and systems. Keeping everything all in one place and connected. When software runs on Access, you can work the way you want to work, intuitively and productively.</p>

                    <BtnOne 
                    name={'Book a Demo'}
                    />
                </div>
            </section>
        </>
    );
}