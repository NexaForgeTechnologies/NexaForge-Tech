
export default function FocusArea() {
    return (
        <>
            <section className="bg-[url('/focus-area2.png')] bg-cover bg-center bg-no-repeat
            relative min-h-100 py-10 md:py-20 w-screen ml-[calc(50%-50vw)] md:px-18 lg:px-20">

                <div className="flex flex-col justify-between items-center h-100 lg:h-120 relative">

                    <h1 className="text-2xl md:text-4xl lg:text-5xl px-3 md:px-5">
                        <span className="font-bold pr-3"> Technology</span>
                        Focus Area
                    </h1>



                    <section className="absolute inset-0 w-screen ml-[calc(50%-50vw)] h-[400px] md:h-[450px] z-10 pointer-events-none">
                        <div className="absolute left-[20%] top-[15%] md:left-[20%] md:top-[20%] lg:top-[30%]">
                            <img src="/focus-logo11.png" alt="Nextjs" className="w-10 md:w-12 lg:w-14 animate-bounce animate-delay-1 animate-slow" />
                        </div>

                        <div className="absolute left-[45%] top-[32%] md:left-[47%] md:top-[33%] lg:top-[35%]">
                            <img src="/focus-logo6.png" alt="Nextjs" className="w-10 md:w-12 lg:w-14 animate-bounce animate-delay-2 animate-slow" />
                        </div>

                        <div className="absolute left-[45%] top-[60%] md:left-[47%] md:top-[60%] lg:top-[70%]">
                            <img src="/focus-logo2.png" alt="Nextjs" className="w-10 md:w-12 lg:w-14 animate-bounce animate-delay-1 animate-slow" />
                        </div>

                        <div className="absolute right-[20%] top-[15%] md:right-[20%] md:top-[20%] lg:top-[30%]">
                            <img src="/focus-logo7.png" alt="html" className="w-10 md:w-12 lg:w-14 animate-bounce animate-delay-3 animate-slow" />
                        </div>

                        <div className="absolute left-[5%] top-[42%] md:left-[24%] md:top-[45%] lg:top-[60%]">
                            <img src="/focus-logo8.png" alt="react" className="w-10 md:w-12 lg:w-14 animate-bounce animate-delay-2 animate-slow" />
                        </div>

                        <div className="absolute left-[20%] top-[65%] md:left-[30%] md:top-[70%] lg:top-[90%]">
                            <img src="/focus-logo9.png" alt="tailwindcss" className="w-10 md:w-12 lg:w-14 animate-bounce animate-delay-1 animate-slow" />
                        </div>
                        
                        <div className="absolute right-[5%] top-[42%] md:right-[24%] md:top-[45%] lg:top-[60%]">
                            <img src="/focus-logo1.png" alt="Njs" className="w-10 md:w-12 lg:w-14 animate-bounce animate-delay-2 animate-slow" />
                        </div>
                        
                        <div className="absolute right-[20%] top-[65%] md:right-[30%] md:top-[70%] lg:top-[90%]">
                            <img src="/focus-logo10.png" alt="tailwindcss" className="w-10 md:w-12 lg:w-14 animate-bounce animate-delay-1 animate-slow" />
                        </div>
                        
                        <div className="absolute left-[10%] bottom-0 md:left-[15%] ">
                            <img src="/focus-logo3.png" alt="react" className="w-10 md:w-12 lg:w-14 animate-bounce animate-delay-3 animate-slow" />
                        </div>
                                                
                        <div className="absolute right-[10%] bottom-0 md:right-[15%] ">
                            <img src="/focus-logo4.png" alt="react" className="w-10 md:w-12 lg:w-14 animate-bounce animate-delay-1 animate-slow" />
                        </div>

                    </section>

                    <img src="logo.png" className="w-40" />
                </div>
            </section>
        </>
    );
}