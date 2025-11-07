export default function BecomeAmember() {
	return (
		<div className="w-full min-[26.75rem]:h-[37rem] mb-40 flex flex-col items-center justify-evenly py-8 min-[31.25rem]:py-30 gap-4 min-[48rem]:flex-row min-[48rem]:h-[26rem] min-[48rem]:w-[46rem] min-[64rem]:w-[60rem] min-[64rem]:justify-between min-[80rem]:justify-around min-[80rem]:w-[78rem]">
			<div className="w-[20.625rem] min-[31.25rem]:min-w-[26rem] min-h-[9.875rem] flex flex-col justify-between gap-[3.1253.125rem] min-[48rem]:self-start min-[48rem] min-[90rem]:w-[44.4375rem] min-[90rem]:h-[16.875rem] min-[90rem]:gap-[7rem]">
				<div className="w-full min-h-[4.6875rem] flex flex-col justify-center ">
					<p className="text-[0.625rem] text-[#F16436]">HOW TO JOIN</p>
					<h4 className="min-h-[3.375rem] font-bold text-[1.25rem] text-[#071013] min-[64rem]:text-[2rem] min-[64rem]:w-[40.4375rem] ">
						Are You Ready To Become A Member, Click On The ‘Join Now’ Button!!
					</h4>
				</div>
				<div className="w-[13.8125rem] h-[2.0625rem] flex gap-5 ">
					<button className="w-[6.5625rem] bg-[#071013] text-[#F16436] h-full font-semibold text-[0.75rem] rounded-[0.9375rem] ">
						Join Now
					</button>
					<button className="w-[6.5625rem] h-full rounded-[0.9375rem] text-[#071013] border-[#F16436] text-[0.75rem] border">
						Contact Us
					</button>
				</div>
			</div>

			<figure className="h-[18.75rem] w-[20.625rem] rounded-[1.25rem] mt-4  min-[31.25rem]:mt-6 min-[31.25rem]:w-[26rem] min-[48rem]:w-[28.5625rem] min-[64rem]:w-[20rem] min-[90rem]:w-[28.125rem]">
				<img
					src="src/assets/smallmobileMembershipImg.png"
					alt=""
					className="min-[31.25rem]:w-[26rem] min-[48rem]:w-[27.5625rem] min-[64rem]:w-[20rem] min-[90rem]:w-[28.125rem]"
				/>
			</figure>
		</div>
	);
}
