import { useEffect, useRef, useState } from "react";
import { stats } from "../../data/stats";

function Stats() {
	return (
		<section className="py-8 md:py-16 bg-secondary text-muted text-center">
			<div className="container mx-auto px-8 md:px-20">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{stats.map((stat, index) => (
						<CountUpCard
							key={index}
							value={stat.value}
							label={stat.label}
							suffix={stat.suffix}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function CountUpCard({ value, label, suffix, index }) {
	const [count, setCount] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.4 }
		);

		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!isVisible) return;

		const duration = 2000;
		const startTime = performance.now();

		const update = (currentTime) => {
			const progress = Math.min((currentTime - startTime) / duration, 1);
			const currentValue = Math.floor(progress * value);
			setCount(currentValue);
			if (progress < 1) requestAnimationFrame(update);
		};

		requestAnimationFrame(update);
	}, [isVisible, value]);

	// 🎯 Apply special grid placement for mobile
	const mobileClasses =
		index === 0
			? "col-span-2 md:col-span-1" // First card takes full width on mobile
			: index === 1
			? "col-span-1" // Second card normal
			: index === 2
			? "col-span-1" // Third card normal
			: "col-span-2 md:col-span-1"; // Fourth card full width again
	const thousands = index === 0 || index === 3 ? "k" : "";
	return (
		<div
			ref={ref}
			className={`flex flex-col items-center justify-between gap-4 ${mobileClasses}`}
		>
			<p className="">{label}</p>
			<p className="text-4xl md:text-5xl font-bold">
				{count.toLocaleString()}
				{thousands}
				<span className="text-primary">+</span>
			</p>
		</div>
	);
}

export default Stats;
