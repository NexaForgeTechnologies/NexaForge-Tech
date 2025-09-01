import BtnOne from "./BtnOne";

export default function WorkCards({ img, title, icon }) {
  return (
    <section className="bg-[#5ADAE31A] overflow-hidden rounded-lg w-full flex flex-col">
      {/* Image container */}
      <div className="relative w-full">
        <img
          src={img}
          className="w-full min-h-auto h-55 rounded-t-lg"
          alt=""
        />


        {/* Icon overlapping bottom */}
        <div className="absolute -bottom-10 pl-5">
          <img
            src={icon}
            className="w-15 h-15"
            alt=""
          />
        </div>
      </div>


      {/* Text & Button */}
      <div className="p-5 flex flex-col gap-3 mt-7 justify-end h-full">
        <h1 className="font-semibold text-xl md:text-2xl">{title}</h1>

        <div className="flex items-end">
        <BtnOne name="Get Started" bgColor="bg-transparent" />
        </div>
      </div>
    </section>
  );
}
