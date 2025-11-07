
import { Icon } from "@iconify/react";

const corevalues = [
	{
		icon: <Icon icon="ri:team-line" />,
		value: " Community",
		description:
			"We foster a welcoming and inclusive environment where everyone feels valued and supported",
	},
	{
		icon: <Icon icon="streamline-ultimate:team-meeting" />,
		value: "Empowerment",
		description:
			"We are committed to honesty and transparency in all our interactions. Our team provides reliable information and guidance",
	},
	{
		icon: <Icon icon="bx:bullseye" />,
		value: "Integrity",
		description:
			"We believe in empowering individuals to take charge of their health and fitness journeys. We provide the tools, knowledge, and support needed",
	},
	{
		icon: <Icon icon="carbon:sustainability" />,
		value: "Sustainability",
		description:
			"We promote healthy, sustainable practices that lead to long-term success. Our focus is on creating balanced lifestyles",
	},
];

function CoreValues() {
	return (
		<section className="py-6 bg-primary text-muted">
			<div className="container space-y-4">
				<h3 className="text-2xl font-bold text-background">Our Core Values</h3>
				<p className="max-w-2xl mx-auto md:text-lg text-background/80">
					Guiding principles that shape our community and impact
				</p>

				<div className="grid sm:grid-cols-2 gap-6 md:gap-4 mt-8 text-secondary">
					{corevalues.map((value, idx) => (
						<div
							key={idx}
							className="bg-muted p-4 rounded-xl flex items-start md:items-center gap-3 hover:-translate-y-1 hover:shadow-lg transition-transform duration-300"
						>
							<span className="text-3xl bg-primary p-3 rounded-lg">
								{value.icon}
							</span>
							<div className="space-y-1">
								<h4 className="text-xl font-bold">{value.value}</h4>
								<p className="text-sm">{value.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default CoreValues;
