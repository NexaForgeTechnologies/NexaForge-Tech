import Link from "next/link";
function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#FFFFFF] via-[#D0EEF9] to-[#FFFFFF] w-screen ml-[calc(50%-50vw)] 
        px-5 sm:px-10 md:px-18 lg:px-20">
            <section className="py-10 pt-15 lg:flex gap-y-10 lg:gap-x-40 ">

                {/* Left content */}
                <div className="flex flex-col gap-y-3">
                    <img src="logo.png" alt="Nexaforge-logo" className=" w-50 md:w-60" />
                    <h1 className="font-semibold text-2xl text-[#1B1B1B]">
                        Collaborate <span className="font-medium">with Us</span>
                    </h1>
                    <p className="text-[#808080] max-w-100">We offer personalized design services.</p>

                    <div className="flex items-center gap-x-5 mt-2">
                        
                        <Link href={"https://www.facebook.com/profile.php?id=61556582074660&mibextid=kFxxJD"}>
                            <img src="/vector.png" alt="Facebook" width={25} /></Link>
                        
                        <Link href={"https://www.instagram.com/nexaforgetech?igsh=czJvMzA4bXNtbW9h"}>
                            <img src="/instagram.png" alt="Instagram" width={25} /></Link>
                        
                        <Link href={"https://twitter.com/NexaForgeTech"}>
                            <img src="/twitter.png" alt="Twitter" width={25} /></Link>
                        
                        <Link href={"https://www.linkedin.com/company/nexaforge-tech-pvt-ltd/"}>
                            <img src="/linkedin.png" alt="LinkedIn" width={25} /></Link>
                            
                        {/* <Link href={"/"}><img src="/youtube.png" alt="YouTube" width={25} /></Link> */}
                    </div>
                </div>

                {/* Lists */}
                <div className="grid md:grid-cols-2 gap-x-10 lg:gap-x-40 gap-y-10 mt-10 lg:mt-5 ">

                    <ul className="flex flex-col gap-y-2 max-w-[200px] lg:max-w-[300px]">
                        <div className="mb-3">
                            <h1 className="text-xl text-[#000000] inline-block relative pb-2">
                                Contact Us
                                <span className="absolute left-0 bottom-0 w-full h-1 
                                bg-gradient-to-r from-[#5BDCE4] to-[#034FAF]"></span>
                            </h1>
                        </div>
                        <li className="text-[#464646] break-words hover:cursor-pointer">
                            <Link href="tel:+44%207882%20414162">+44 7882 414162</Link>
                        </li>
                        <li className="text-[#464646] break-words">
                            <Link href="mailto:info@nexaforgetech.com">info@nexaforgetech.com</Link>
                        </li>
                        <li className="text-[#464646] break-words">
                            29 Ainsley Rd Nottingham NG8 3PP, UK
                        </li>
                    </ul>

                    <ul className="flex flex-col gap-y-2 max-w-[200px] lg:max-w-[300px]">
                        <div className="mb-3">
                            <h1 className="text-xl text-[#000000] inline-block relative pb-2">
                                Quick Links
                                <span className="absolute left-0 bottom-0 w-full h-1 
                                bg-gradient-to-r from-[#5BDCE4] to-[#034FAF]"></span>
                            </h1>
                        </div>
                        <li className="text-[#464646] break-words hover:cursor-pointer">
                            <Link href="/">Staff Augmentation</Link>
                        </li>
                        <li className="text-[#464646] break-words hover:cursor-pointer">
                            <Link href="/">Services</Link>
                        </li>
                        <li className="text-[#464646] break-words hover:cursor-pointer">
                            <Link href="/">Blogs</Link>
                        </li>
                        <li className="text-[#464646] break-words hover:cursor-pointer">
                            <Link href="/">Careers</Link>
                        </li>
                    </ul>

                </div>


            </section>

            {/* Divider */}
            <section>
                <hr className="border-[#808080] opacity-80" />
            </section>

            <section className="flex flex-col sm:flex-row justify-between items-center py-5 gap-y-2">
                <p>© 2024 NEXAFORGE TECHNOLOGIES</p>
                <p>Privacy Policy | Terms & Conditions</p>
            </section>
        </footer>
    );
}

export default Footer;
