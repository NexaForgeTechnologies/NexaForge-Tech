import Image from "next/image";
import Link from "next/link";
export default function HeroComp({icon='home', home='home', page, title, title2, para,sideImage}) {
    return (
        <>
            <section className="w-screen ml-[calc(50%-50vw)]">

                <div className="relative px-5 sm:px-10 md:px-18 lg:px-20">
                    {/* Bg-Image */}
                    <Image
                        src="/Group-661.png"
                        alt="hero"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                    <section className="grid grid-cols-1 md:grid-cols-2 pt-15 md:pt-20 pb-15 lg:pb-30">
                        {/* Content Part */}
                        <section className="relative flex flex-col items-start md:justify-center gap-y-5 mb-5 ">
                            <div className="flex items-center gap-x-2 mb-15">
                                <span className="material-symbols-outlined text-[#808080] opacity-60 select-none cursor-pointer">
                                    {icon}
                                </span>
                                <div className="bg-gradient-to-r from-[#575757] to-[#161616] bg-clip-text text-transparent text-sm">
                                    <Link href={'/'}><span className="cursor-pointer"> {home} </span></Link>  /
                                    <Link href={page}><span className="cursor-pointer"> {page} </span></Link>
                                </div>
                            </div>

                            <span className="block w-30 h-1 bg-gradient-to-r from-[#5BDCE4] to-[#034FAF]"></span>

                            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">{title}</h1>
                            <h3 className="font-medium text-2xl text-[#1B1B1B]">
                                {title2}
                            </h3>
                            <p className="text-[#808080] pr-10">{para} </p>
                        </section>


                        {/* Image Part */}

                        <section className="relative min-h-[300px] lg:min-h-[400px] select-none m-5">
                            <Image
                                src={sideImage}
                                fill
                                priority
                                className="object-contain object-center ">
                                
                            </Image>
                        </section>

                    </section>
                </div>
            </section>
        </>
    );
}