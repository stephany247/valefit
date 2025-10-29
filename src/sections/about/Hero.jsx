import React from "react";
import Button from "../../components/Button";

function Hero() {
  return (
    <section className="relative h-[80vh] text-white overflow-hidden">
      {/* Left (Dark) Section */}
      <div className="absolute inset-0 bg-secondary z-0"></div>

      {/* Right (Image) Section with diagonal cut */}
      <div className="absolute inset-0 bg-[url('/wooldridge.jpg')] bg-cover bg-position-[center_left_3rem] md:bg-center clip-diagonal clip-diagonal-md"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 max-w-150 w-8/10">
        <p className="text-lg tracking-widest text-primary mb-2">
          Empowering Your Fitness Journey
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Our Story: From Passion to Purpose
        </h1>
        <p className="mb-6 text-muted md:text-lg">
          Discover who we are, what drives us, and unite with us on a journey
          towards better health.
        </p>
        <Button variant="outline" className="border-primary text-white ml-0">Learn More</Button>
      </div>
    </section>
  );
}

export default Hero;
