import Image from "next/image";
import BtnOne from "./BtnOne";

export default function HorizontalCont({ img, icon, title, para }) {
  return (
    <section className="relative flex h-full col-span-1 md:col-span-2 lg:col-span-2 w-full overflow-hidden bg-[#5ADAE31A] rounded">

      {/* Left Side Image */}
      <div className="relative w-0 md:w-1/2 h-full">
        <Image
          src={img}
          alt="Education"
          fill
          className="object-cover object-center rounded"
        />
      </div>

      {/* Right Side Content */}
      <div className="flex flex-col gap-3 px-5 pb-5 pt-10 justify-end flex-1">

        {/* Icon - absolutely inside image */}
        <div className="absolute top-1/4 left-[45%] transform -translate-y-1/2 hidden md:block">
          <img
            src={icon}
            className="w-14 h-14"
            alt=""
          />
        </div>

        <h1 className="font-semibold text-xl md:text-2xl">{title}</h1>
        <p className="text-sm md:text-base">
          {para}
        </p>
        <div className="mt-auto">
          <BtnOne name="Get Started" bgColor="bg-transparent" />
        </div>
      </div>

    </section>
  );
}
