import youngGen from "../../assets/young-generation.png";

function Mission() {
	return (
		<section className="container py-6 md:py-12 space-y-6">
			<div className="mx-auto px-8 md:px-20 max-w-5xl text-center space-y-2">
				<h3 className="text-xl md:text-2xl font-bold leading-tight text-secondary">
					Championing a Healthier Future for the Young Generation
				</h3>
				<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
					We are dedicated to fostering a supportive community that inspires and
					motivates each member on their journey to wellness.
				</p>
			</div>
			<img
				src={youngGen}
				alt="Healthier Young generation"
				className="w-full h-auto object-top object-cover md:object-fit aspect-4/2 max-h-[70vh]"
			/>
		</section>
	);
}

export default Mission;
