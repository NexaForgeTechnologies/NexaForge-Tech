import BtnOne from "../components/BtnOne";
export default function Form() {
    return (
        <>
            <section className={`bg-[url('/contact-bg2.png')] bg-cover bg-center max-w-screen mx-[calc(50%-50vw)]
            grid grid-cols-1 lg:grid-cols-2 px-0 sm:px-4 md:px-8 lg:px-12 `}
            >
                <ul className=" px-5 sm:px-8 md:px-10 lg:px-10 text-white flex justify-evenly flex-col py-10 lg:py-0  max-h-190">
                    <span className="my-3 block w-30 h-1 bg-gradient-to-r from-[#5BDCE4] to-[#034FAF]"></span>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5"> <span className="font-light">Ask a </span> <br /> Nexaforge Technologies Associate <span className="font-light"> how we can help you with:</span></h1>
                    <ul className="flex flex-col gap-y-5">
                        <li className="flex gap-x-10 items-center">
                            <img src="digital.png" className="w-10 h-10 md:w-20 md:h-20" alt="" />
                            <p className="text-base md:text-xl max-w-90">Building an MVP</p>
                        </li>
                        <li className="flex gap-x-10 items-center">
                            <img src="contact-2.png" className="w-10 h-10 md:w-20 md:h-20" alt="" />
                            <p className="text-base md:text-xl max-w-90">Digital Transformation
                                Engagements</p>
                        </li>
                        <li className="flex gap-x-10 items-center">
                            <img src="people.png" className="w-10 h-10 md:w-20 md:h-20" alt="" />
                            <p className="text-base md:text-xl max-w-90">Augmenting & Scaling Your Development Team</p>
                        </li>
                    </ul>

                </ul>



                <div className="flex justify-center items-center py-10 px-5 md:px-0">
                    <form
                        className="relative bg-white w-full sm:w-[90%] md:w-[80%] lg:w-[450px] px-8 py-10 shadow-lg rounded-md flex flex-col gap-5 overflow-hidden "
                        style={{
                            backgroundImage: "url('/form.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="flex flex-col gap-1">
                            <label className="text-sm md:text-base text-black">Name</label>
                            <input
                                placeholder="Your Name"
                                type="text"
                                className="bg-[#F2F8FF] border border-gray-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm md:text-base text-black">Company Name</label>
                            <input
                                placeholder="Your Company Name"
                                type="text"
                                className="bg-[#F2F8FF] border border-gray-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm md:text-base text-black">Email</label>
                            <input
                                placeholder="Your Email Address"
                                type="email"
                                className="bg-[#F2F8FF] border border-gray-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm md:text-base text-black">Phone Number</label>
                            <input
                                placeholder="Your Phone Number"
                                type="tel"
                                className="bg-[#F2F8FF] border border-gray-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm md:text-base text-black">What we can do for you?</label>
                            <input
                                placeholder="What Nexaforge can do for you"
                                type="text"
                                className="bg-[#F2F8FF] border border-gray-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm md:text-base text-black">Budget</label>
                            <input
                                placeholder="What is your budget"
                                type="text"
                                className="bg-[#F2F8FF] border border-gray-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm md:text-base text-black">How did you hear about us?</label>
                            <input
                                placeholder="How did you hear about Nexaforge"
                                type="text"
                                className="bg-[#F2F8FF] border border-gray-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex justify-center mt-2">
                            <BtnOne name="Send Message"
                                bgColor="bg-[#034FAF]"
                                textColor="text-white"
                                hoverBgColor="hover:bg-transparent"
                                hoverTextColor="hover:text-[#034FAF]"
                            />
                        </div>
                    </form>

                </div>
            </section>

        </>
    );
}