import BtnOne from "../components/BtnOne";

export default function HomeHero() {
  return (
    <section className="relative bg-[url('/MainHero2.svg')] bg-top-left bg-contain md:bg-center bg-no-repeat py-10 lg:py-20 w-screen ml-[calc(50%-50vw)]">
      <div className="absolute inset-0 w-full h-[400px] z-10 pointer-events-none">
        <div className="absolute left-[15%] top-0 md:left-[15%] md:top-[45px]">
          <img src="/react-icon.svg" alt="React Icon" className="w-10 md:w-16 animate-bounce animate-delay-1 animate-slow" />
        </div>

        <div className="absolute left-[30%] top-[39%] md:left-[20%] md:top-[60%]">
          <img src="/tailwind-icon.svg" alt="Tailwind Icon" className="w-10 md:w-16 animate-bounce animate-delay-2 animate-slow" />
        </div>

        <div className="absolute left-[5%] bottom-[10%] md:left-[10%] md:bottom-[5%]">
          <img src="/js-icon.svg" alt="JS Icon" className="w-10 md:w-16 animate-bounce animate-delay-3 animate-slow" />
        </div>

        <div className="absolute right-[20%] top-0 md:right-[25%] md:top-[30px]">
          <img src="/css-icon.svg" alt="CSS Icon" className="w-10 md:w-16 animate-bounce animate-delay-4 animate-slow scale-110" />
        </div>

        <div className="absolute right-[5%] bottom-[30%] md:right-[10%] md:bottom-[7%]">
          <img src="/html-icon.svg" alt="HTML Icon" className="w-10 md:w-16 animate-bounce animate-delay-5 animate-slow" />
        </div>
      </div>

      <div className="relative z-20 flex flex-col justify-center items-center gap-y-7 p-5">

          <h1 className="text-center text-5xl lg:text-5xl font-bold bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] bg-clip-text text-transparent">
            Innovate. Build. Scale
          </h1>

        <p className="text-sm md:text-base text-[#4D4D4D] max-w-160 text-center">
          At <b>NexaForge</b> Technologies, we turn ideas into powerful, scalable software solutions custom-built to help startups and enterprises grow through innovative digital experiences.
        </p>

        <p className="text-base md:text-lg font-semibold text-[#4D4D4D]">
          Empowering industries through code.
        </p>

        <div className="z-50">
          <BtnOne
            name={"Book a Demo"}
            bgColor="bg-[#034FAF]"
            textColor="text-white"
            hoverBgColor="hover:bg-[white]"
            hoverTextColor="hover:text-[#034FAF]"
          />
        </div>
      </div>
    </section>
  );
}
