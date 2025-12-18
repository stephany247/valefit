import { useNavigate } from "react-router-dom";

export default function Cards({
  features,
  plan,
  price,
  category,
  bgColor,
  borderBtnColor,
  url,
  className,
}) {
  const navigate = useNavigate();

  return (
    <div
      className={`
        w-full
        rounded-xl px-4 py-6 lg:px-6 lg:py-12 flex-1
        ${bgColor || ""}
        ${className || ""}
      `}
    >
      <div className="flex h-full flex-col justify-between gap-8 lg:gap-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <h4 className="text-sm md:text-base lg:text-lg font-semibold text-white">{plan}</h4>

          <div className="flex items-center text-white">
            <span className="text-sm">$</span>
            <span className="text-xl md:text-2xl lg:text-3xl font-bold">{price}</span>
          </div>

          <p className="text-sm md:text-base lg:text-lg text-white">Every month</p>
          <p className="text-sm md:text-base lg:text-lg text-white">{category}</p>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-3 flex-1">
          {features?.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <p className="text-base font-medium text-white pl-2">
                {item.feature}
              </p>
              {item.hr}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate(url)}
            className={`
              w-28 sm:w-36 h-10 sm:h-12
              rounded-lg text-white bg-[#303030]
              ${borderBtnColor || ""}
            `}
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
