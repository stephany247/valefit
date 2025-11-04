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

	const handleNavigate = () => {
		navigate(url);
	};

	return (
		<div
			className={` w-[20.625rem] min-h-[26.5rem] min-[31.25rem]:w-[28rem] py-4 rounded-[0.9375rem] min-[48rem]:w-[14rem] min-[64rem]:w-[23rem] min-[64rem]:h-[35.1875rem] min-[64rem]:py-[3.125rem] min-[80rem]:h-[38rem] min-[90rem]:w-[25rem] min-[90rem]:h-[44.1875rem] ${className} ${
				bgColor && bgColor
			}`}
		>
			<div className="flex w-full flex-col gap-[2.8125rem] min-[64rem]:gap-[5rem] h-full ">
				{/* Card header */}
				<div className="flex flex-col gap-2.5 items-center min-h-[5.375rem]  ">
					<div className="flex flex-col min-h-[3.875rem] items-center justify-center  ">
						<h4 className="font-semibold text-[0.9375rem] text-[#F3EFF5] ">
							{plan}
						</h4>
						<div className="flex items-baseline w-[1.375rem] min-h-[1.6875rem text-[#F3EFF5] ">
							<span>$</span>
							<p className="font-bold text-[1.25rem]  ">{price}</p>
						</div>
						<p className="text-[0.75rem] text-[#F3EFF5] ">Every month</p>
					</div>
					<p className="text-[#F3EFF5] text-[0.8125rem] ">{category}</p>
				</div>

				{/* Card body */}
				<div className="min-h-[10.3125rem] min-[64rem]:h-[17.125rem]">
					{features?.map((item) => (
						<div
							key={item.id}
							className="flex flex-col justify-center gap-2.5 min-[64rem]:h-[2.6875rem]"
						>
							<h4 className="text-[0.75rem] text-[#F3EFF5] text-left pl-2 pt-1">
								{item.feature}
							</h4>
							{item.hr}
						</div>
					))}
				</div>

				{/* button */}
				<div className="w-full h-[2.6875rem] flex justify-center items-center  ">
					<button
						onClick={handleNavigate}
						className={`w-[6.625rem] text-[#F3EFF5]  h-full rounded-[0.625rem] min-[64rem]:w-[8.6875rem] min-[64rem]:h-[3.125rem] bg-[#303030] ${
							borderBtnColor && borderBtnColor
						} `}
					>
						Join Now
					</button>
				</div>
			</div>
		</div>
	);
}
