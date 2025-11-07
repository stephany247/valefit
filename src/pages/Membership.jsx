import BackgroundImageSection from "../ui/BackgroundImageSection";
import BecomeAmember from "../ui/BecomeAmember";
import Cards from "../ui/Cards";
import HorizontalCard from "../ui/HorizontalCard";
import MembershipHeroSection from "../ui/MembershipHeroSection";

const basicPlanFeatures = [
	{
		id: 1,
		feature: "Single personalized plan",
		hr: <hr className="text-[#F3EFF5]" />,
	},
	{
		id: 2,
		feature: "Tailored to fitness goals",
		hr: <hr className="text-[#F3EFF5] " />,
	},
	{
		id: 3,
		feature: "Basic workouts",
		hr: <hr className="text-[#F3EFF5]" />,
	},
	{
		id: 4,
		feature: "Meals suggestion",
		hr: <hr className="text-[#F3EFF5]" />,
	},
	{
		id: 5,
		feature: "Support and mentorship",
		hr: <hr className="text-[#F3EFF5]" />,
	},
];

const proPlanFeatures = [
	{
		id: 1,
		feature: "Personalized meals plan",
		hr: <hr className="text-[#F3EFF5]" />,
	},
	{
		id: 2,
		feature: "Tailored to fitness goal",
		hr: <hr className="text-[#F3EFF5] " />,
	},
	{
		id: 3,
		feature: "Online coaching",
		hr: <hr className="text-[#F3EFF5]" />,
	},
	{
		id: 4,
		feature: "Weight tracking",
		hr: <hr className="text-[#F3EFF5]" />,
	},
	{
		id: 5,
		feature: "Exclusive content",
		hr: <hr className="text-[#F3EFF5]" />,
	},
];

const elitePlanFeatures = [
	{
		id: 1,
		feature: "All pro features",
		hr: <hr className="text-[#F3EFF5]" />,
	},
	{
		id: 2,
		feature: "One on one coaching",
		hr: <hr className="text-[#F3EFF5] " />,
	},

	{
		id: 3,
		feature: "Weekly check ins",
		hr: <hr className="text-[#F3EFF5]" />,
	},
	{
		id: 4,
		feature: "priority support",
		hr: <hr className="text-[#F3EFF5]" />,
	},
];
//28.125
function Membership() {
	return (
		<div className="w-full min-h-screen flex flex-col items-center ">
			<MembershipHeroSection />
			<HorizontalCard />
			<div className="w-full min-h-[28.125rem] flex flex-col justify-center items-center gap-5 mt-8 mb-16 min-[48rem]:h-[35.1875rem] min-[48rem]:flex-row min-[48rem]:py-4 min-[64rem]:w-[62rem] min-[64rem]:h-[42.5rem] min-[80rem]:w-[80rem] min-[80rem]:h-[52rem] min-[80rem]:gap-8">
				<Cards
					features={basicPlanFeatures}
					plan="Basic Plan"
					price="50  "
					category="Perfect for beginners seeking structure"
					bgColor="bg-[#F16436]"
					url="/"
				/>
				<Cards
					features={proPlanFeatures}
					plan="Pro Plan"
					price="75 "
					category="Ideal for regular fitness enthusiastic"
					bgColor="bg-[#071013]"
					borderBtnColor="border border-[#F16436]"
					url="/"
					className="min-[48rem]:self-end min-[64rem]:self-end"
				/>
				<Cards
					features={elitePlanFeatures}
					plan="Elite Plan"
					price="100"
					category="For those seeking premium packages"
					bgColor="bg-[#F16436]"
					url="/"
				/>
			</div>
			<BackgroundImageSection />
			<BecomeAmember />
		</div>
	);
}

export default Membership;
