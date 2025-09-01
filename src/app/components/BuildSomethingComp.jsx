import BtnOne from "./BtnOne";
export default function BuildSomethingComp({ TitleBold, TitlenotBold, para ,BtnName }) {
    return (
        <>
            <section className="w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20
            bg-[url('/build-something.svg')] bg-cover bg-center bg-no-repeat text-white py-25 my-35">

                <span className="block w-30 md:w-40 h-1 bg-gradient-to-r from-[#5BDCE4] to-[#034FAF] mb-10"></span>

                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-y-10 gap-x-10">

                    <div className="text-white flex flex-col gap-y-2">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">{TitleBold}</h1>
                        <p className="text-3xl md:text-4xl lg:text-4xl font-medium">{TitlenotBold}</p>
                    </div>

                    <div className="flex items-center">
                        <p className="text-base md:text-xl max-w-120 ">{para}</p>
                    </div>

                    <div className="flex items-center lg:justify-center">
                        <BtnOne
                            name={BtnName}
                            bgColor="bg-[#034FAF]"
                            hoverBgColor="hover:bg-transparent"
                            textColor="text-white"
                            hoverTextColor="hover:text-[white]"

                        />
                    </div>
                </div>

            </section>
        </>
    );
}