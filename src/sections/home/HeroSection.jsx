import outdoorWorkout from "../../assets/outdoor-workout.jpg";
import Button from "../../components/Button";

function HeroSection() {
  return (
    <section className="relative bg-[url('/outdoors-running.jpg')] bg-cover bg-top bg-no-repeat text-center flex flex-col items-center justify-content p-6 pt-12 min-h-[80vh] sm:min-h-auto mb-30">
      <div className="absolute inset-0 bg-background/30 z-1"></div>
      <div className="container max-w-4xl relative z-10 space-y-6 md:space-y-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Transform the Way You Move — One Step at a Time
        </h1>
        <p className="text-lg text-center md:w-7/10 mx-auto">
          Start your wellness journey with expert-backed routines that
          prioritize your health and lifestyle.
        </p>
        <Button variant="outline" className="border-primary md:px-12">Get Started Today</Button>
        <img
          src={outdoorWorkout}
          alt="full shot man training outdoors"
          className="z-10 border-5 border-white translate-y-[40%] w-full h-auto max-h-100 mx-auto"
        />
      </div>
    </section>
  );
}

export default HeroSection;
