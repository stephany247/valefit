export function BlogHero() {
  return (
    <section className="w-full bg-secondary text-white">
      <div className="container mx-auto px-6 py-20 text-center flex flex-col gap-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Your Guide to Smarter, <br /> Healthier Nutrition
        </h1>

        <p className="max-w-2xl mx-auto text-base md:text-lg opacity-90">
          From balanced meal plans to smart snacking strategies, our blog helps
          you make informed, healthy choices every day.
        </p>

        <button className="mx-auto px-8 py-3 bg-[#F16436] rounded-md text-sm md:text-base">
          Read More
        </button>
      </div>
    </section>
  );
}
