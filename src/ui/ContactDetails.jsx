import { useNavigate } from "react-router-dom";

const contactDetails = [
	{
		id: 1,
		url: "src/assets/locationImg.png",
		header: "GYM STUDIO",
		text: "34, Eyinle Junction, Odogunyan, Sagamu Exp Way, Ikorodu, Lagos.",
	},

	{
		id: 2,
		url: "src/assets/gymImg.png",
		header: "WORKING HOURS",
		text: "Monday - Saturday: 7:00am-12:00am Sunday: closed",
	},

	{
		id: 3,
		url: "src/assets/telePhoneImg.png",
		header: "CALL US",
		text: "+234 8012345678 +234 9123456789 ",
	},
	{
		id: 4,
		url: "src/assets/telePhoneImg.png",
		header: "SEND MAIL",
		text: "ValeF@example.com",
	},
];

const cards = [
	{
		id: 1,
		header: "Are the workouts suitable for beginners?",
		body: "Find answers to the most commonly asked questions about our services, features, and membership.",
	},

	{
		id: 2,
		header: "Can I exercise at home without equipment?",
		body: "Absolutely. Many of our routines are designed for home workouts using body weight or minimal equipment.",
	},

	{
		id: 3,
		header: "How often should I work out?",
		body: "We recommend at least 3–5 sessions per week, depending on your goals and fitness level. Rest days are included in your plan.",
	},

	{
		id: 4,
		header: "Do I need to follow a specific diet?",
		body: "While we provide nutrition tips and guides, you’re free to choose what works best for your body. We focus on balanced, healthy eating.",
	},
	{
		id: 5,
		header: "Is there a free trial available?",
		body: "Yes, we offer a 7-day free trial so you can explore the features and see if it’s right for you before committing.",
	},
	{
		id: 6,
		header: "How do I track my progress?",
		body: "You can log your workouts, set goals, and monitor improvements through your personal dashboard in the app.",
	},

	{
		id: 7,
		header: "Can I cancel my membership anytime?",
		body: "Yes, our memberships are flexible. You can cancel or pause your subscription at any time from your account settings.",
	},

	{
		id: 8,
		header: " Do you offer personal coaching?",
		body: "Yes, premium members have access to one-on-one coaching sessions and personalized feedback from certified trainers.",
	},
];

export default function ContactDetails() {
	const navigate = useNavigate();
	return (
		<div className="min-w-full min-h-screen flex flex-col items-center min-[23.4375rem]:w-[23.4375rem] gap-8 px-26 py-10 min-[40rem]:w-[40rem] min-[48rem]:w-[48rem] ">
			<div className="min-w-full min-[23.4375rem]:w-[20.5625rem] min-h-[6.25rem] min-[90rem]:w-[31.5625rem] min-[40rem]:w-[37rem]   min-[48rem]:w-[44rem]">
				<p className="font-normal text-[#F16436] min-[90rem]:text-[1.125rem]">
					GET IN TOUCH
				</p>
				<h2 className="font-bold text-[1.875rem] min-[90rem]:text-[3.75rem]">
					Our Contact Details
				</h2>
				<p className="text-[0.75rem] text-[#071013] min-[90rem]:text-[1.125rem]">
					Reach out to us anytime and our team will get back to you promptly.
					Your health and satisfaction are our priority."
				</p>
			</div>

			<div className="min-w-full min-[40rem]:w-[37rem] min-[23.4375rem]:w-[20.5625rem] h-[18.9375rem] flex flex-col gap-7 min-[90rem]:w-[58.25rem] min-[90rem]:h-[12.125rem] min-[90rem]:grid min-[90rem]:grid-cols-2 min-[90rem]:gap-4  min-[48rem]:w-[44rem]">
				{contactDetails.map((item) => (
					<div
						key={item.id}
						className="w-full flex gap-[0.9375rem] items-center min-h-[3.625rem] min-[90rem]:w-[25.375rem]"
					>
						{/* Image */}
						<figure className="min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center bg-[#F16436] min-[90rem]:w-[5rem] min-[90rem]:h-[5rem]">
							<img
								src={item.url}
								alt=""
								className="w-[1.16rem] h-[1.369375rem] min-[90rem]:w-[2.8125rem] min-[90rem]:h-[2.8125rem]"
							/>
						</figure>

						<div
							className={`min-w-[12.3125rem] min-h-[3.625rem] min-[90rem]:w-[18.5rem] ${
								item.id === 3 ? "w-[4.625rem] min-h-[5.25rem] " : ""
							}`}
						>
							{/* Header */}
							<h3 className="text-[1.25rem] font-bold min-[90rem]:text-[1.5625rem]">
								{item.header}
							</h3>
							{/* text content */}
							<p
								className={`text-[0.75rem] max-w-[12.3125rem] text-[#071013] min-[90rem]:text-[1.125rem] min-[90rem]:min-w-[18.5rem] ${
									item.id === 3 ? "max-w-[4.625rem] leading-3.5" : ""
								}`}
							>
								{item.text}
							</p>
						</div>
					</div>
				))}
			</div>

			<figure className="min-w-full min-[40rem]:w-[37rem] min-[23.4375rem]:w-[20.5625rem]  h-[13.8125rem] min-[90rem]:w-[77.5rem] min-[90rem]:h-[27.875rem] min-[48rem]:w-[44rem]">
				<img
					src="src/assets/workoutLady.png"
					alt=""
					className="bg-desktop-workoutLady w-full h-[13.8125rem] bg-cover bg-center bg-no-repeat min-[90rem]:w-[77.5rem] rounded-[1.25rem] min-[90rem]:h-[27.875rem]"
				/>
			</figure>

			{/* Question */}
			<div className="min-w-full min-[40rem]:w-[37rem] min-[23.4375rem]:w-[17.8125rem] min-[90rem]:min-h-[11.5rem] min-[90rem]:w-[44.25rem] w-full flex flex-col items-start gap-4  min-[48rem]:w-[44rem]">
				<h4 className="min-[90rem]:text-[3.75rem] min-[90rem]:w-[34.8125rem] min-[90rem]:font-bold text-[#071013] min-[23.4375rem]:w-[12.3125rem] min-[23.4375rem]:font-bold text-[1.25rem]">
					Got Any Questions? We Got You!!
				</h4>
				<p className="text-[#F16436] min-[23.4375rem]:w-[17.8125rem]min-[40rem]:w-[37rem] min-[40rem]:text-[1.125rem] text-[0.75rem]">
					Find answers to the most commonly asked questions about our services,
					features, and membership
				</p>
			</div>

			<div className="min-w-full  min-[40rem]:w-[37rem] min-[23.4375rem]:w-[23.4375rem] min-[23.4375rem]:items-center h-auto flex flex-col gap-8 min-[90rem]:w-[77.5rem] min-[90rem]:grid min-[90rem]:grid-cols-2 min-[90rem]:mt-10 ">
				{cards.map((card) => (
					<div
						key={card.id}
						className="w-[20.625rem] min-w-full min-[23.4375rem]:w-[20.625rem] h-[8.125rem] bg-[#071013] hover:bg-[#F16436] hover:text-[#071013] rounded-[0.9375rem] flex flex-col gap-[0.625rem] py-[0.9375rem] px-[1.25rem] min-[90rem]:w-[37.8125rem] min-[90rem]:h-[10.3125rem]  min-[90rem]:py-[2.25rem]  min-[90rem]:px-[2.5rem]"
					>
						<h4 className="text-[1.125rem] min-[40rem]:text-[1.5625rem] min-[90rem]:font-bold hover:text-[#303030] text-[#F3EFF5]">
							{card.header}
						</h4>
						<p className="hover:text-[#606060] min-[40rem]:text-[1.125rem] text-[0.75rem] text-[#F3EFF5] min-[90rem]:text-[1.125rem]">
							{card.body}
						</p>
					</div>
				))}
			</div>

			<div className="w-[20.625rem] min-[40rem]:w-[37rem] min-w-full min-[23.4375rem]:w-[20.4375rem]  min-h-[11.4375rem] py-[1.25rem] px-[1.875rem] flex flex-col items-center rounded-[0.625rem] bg-[#F16436] min-[90rem]:min-h-[17.4375rem] ">
				<h4 className=" font-bold text-[1.25rem] text-center text-[#F3EFF5] min-[90rem]:text-[2.5rem]">
					Transform Your Fitness Journey
				</h4>
				<p className="text-[#F3EFF5] text-center text-[0.75rem] min-[40rem]:text-[1.125rem] min-[90rem]:text-[1.125rem] ">
					Get personalized guidelines to achieve your fitness goals with our
					expert consultations
				</p>

				<div className="min-w-[4.9375rem] min-h-[2.0625rem] flex justify-center mt-7 items-center min-[90rem]:w-[12.125rem] min-[40rem]:w-[12rem]">
					<button
						onClick={() => navigate("/")}
						className="w-full text-[#F3EFF5] py-[0.625rem] px-[1.25rem] border border-[#071013] min-[90rem]:w-[12.125rem] min-[40rem]:w-[12rem] min-[90rem]:py-[1.25rem] min-[90rem]:px-[3.75rem] min-[90rem]:text-[1.125rem] "
					>
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
}
