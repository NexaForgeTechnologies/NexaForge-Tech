import Image from "next/image";
export default function MapContact() {
    return (
        <>

            <section className="w-full grid grid-cols-1 lg:grid-cols-2 relative my-15 md:my-30">
                <Image
                    src={'/contact-map.png'}
                    fill
                    priority
                    className="object-cover object-center -z-20"
                />
                <div className="flex flex-col justify-center items-center">

                    <div className="flex flex-col lg:flex-row items-center gap-6">
                       
                            <ul className="flex flex-col gap-y-5 p-10">
                                <li className="flex items-start gap-x-3">
                                    <img src="/location.png" alt="" className="w-10 h-auto relative top-2" />
                                    <div>
                                        <h2 className="text-base md:text-2xl font-semibold text-[#363636] mb-2">Nottingham</h2>
                                        <p>29 Ainsley Rd, NG8 3PP, Nottingham, UK</p>
                                    </div>

                                </li>

                                <li className="flex items-center gap-x-3">
                                    <img src="/msg.png" alt="" className="w-10 h-auto" />
                                        <h2 className="text-base md:text-2xl font-semibold text-[#363636] mb-2">info@nexaforgetech.com</h2>
                                </li>

                                <li className="flex items-center gap-x-3">
                                    <img src="/call.png" alt="" className="w-10 h-auto" />
                                        <h2 className="text-base md:text-2xl font-semibold text-[#363636] mb-2">+44 7882 414162</h2>
                                </li>
                            </ul>
                        </div>
                </div>


                <div className="rounded">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19219.856559433672!2d-1.15781!3d52.975731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c197bc6335d5%3A0x590349095e7decc7!2s6%20Maud%20St%2C%20New%20Basford%2C%20Nottingham%20NG7%207AQ%2C%20UK!5e0!3m2!1sen!2sus!4v1749925882516!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </section>
        </>
    );
}