import Image from "next/image";
import BtnOne from "./BtnOne";

export default function VerticalCont({ img, icon, title, para }) {
  return (
    <section className="relative flex flex-col h-full md:row-span-2 w-full overflow-hidden bg-[#5ADAE31A] rounded">
      
      {/* Image on top */}
      <div className="relative w-full h-0 md:h-1/2">
        <Image
          src={img}
          alt="Education"
          fill
          className="object-cover object-center rounded"
        />
      </div>

      {/* Icon - position absolute inside the image */}
      <div className="absolute top-[48%] left-5 transform hidden md:flex">
        <img
          src={icon}
          className="w-14 h-14"
          alt=""
        />
      </div>

      {/* Content area */}
      <div className="flex flex-col gap-3 px-5 pb-5 pt-10 justify-end flex-1">
        <h1 className="font-semibold text-xl md:text-2xl">{title}</h1>
        <p className="text-sm md:text-base">{para}</p>
        <div className="mt-auto">
          <BtnOne name="Get Started" bgColor="bg-transparent" />
        </div>
      </div>
    </section>
  );
}
