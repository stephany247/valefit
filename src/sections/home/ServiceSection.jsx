
import Button from "../../components/Button";
import { services } from "../../data/services";

function ServicesSection() {
 

  return (
    <section className="container py-8 text-center">
      <h2 className="text-2xl text-primary font-bold">
        Discover Tailored Fitness Solutions for Every Individual’s Unique
        Journey
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <Card
            key={i}
            {...service}
            variant={i % 2 === 0 ? "default" : "outline"}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;

function Card({ image, title, subtitle, description, buttonText, variant }) {
  return (
    <div className="text-black px-2 py-6 flex flex-col justify-between">
      <div className="space-y-2 flex flex-col justify-between h-full">
        <img src={image} alt={subtitle} className="rounded-xl mb-6" />
        <h2 className="text-2xl font-bold leading-snug">{title}</h2>
        <p className="text-primary">{description}</p>
      </div>

      <Button variant={variant}>{buttonText}</Button>
    </div>
  );
}
