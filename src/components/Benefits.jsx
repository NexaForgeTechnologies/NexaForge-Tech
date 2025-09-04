
export default function Benefits({ src, title, para, className }) {
    return (
        <>
            <div className={`flex flex-col justify-start items-start bg-[#F2F8FF] gap-y-5
            p-5 ${className}`}
            >
                <img src={src} className="w-10" />
                <h1 className="font-semibold text-base text-[#1B1B1B]">{title}</h1>
                <p className="text-sm text-gray-500">{para}</p>
            </div>
        </>
    );
}