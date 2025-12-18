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
		<div className="w-full flex flex-col items-center">
			<MembershipHeroSection />
			<HorizontalCard />
			<div className="w-full container mx-auto flex flex-col md:flex-row justify-center items-start gap-5 my-8 md:mb-20">
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
					className="md:translate-y-10"
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
