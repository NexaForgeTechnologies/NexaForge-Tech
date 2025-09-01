export default function BtnOne({
  name,
  href,
  className = "",
  bgColor = "bg-white",
  hoverBgColor = "hover:bg-[#034FAF]",
  textColor = "text-[#034FAF]",
  hoverTextColor = "hover:text-white",
  borderColor = "border-[#034FAF]"
}) {
  return (
      <button
        className={`
          ${bgColor} ${hoverBgColor} ${textColor} ${hoverTextColor}
          font-semibold text-base border-1 ${borderColor} group py-2 lg:py-2 px-3 max-w-80 min-w-30 lg:px-4 break-words
          rounded flex justify-center items-center cursor-pointer ${className}
        `}
      >
        {name}
        <span className="material-symbols-outlined text-2xl cursor-pointer relative -rotate-45 group-active:-top-1 group-active:-right-1 lg:group-hover:-top-1 lg:group-hover:-right-1 transition duration-300">
          arrow_forward
        </span>
      </button>
  );
}
