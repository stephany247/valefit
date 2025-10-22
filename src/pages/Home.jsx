import HeroSection from "../sections/home/HeroSection";
import FeaturesSection from "../sections/home/FeaturesSection";
import ScheduleSection from "../sections/home/ScheduleSection";
import ServicesSection from "../sections/home/ServiceSection";
import youngWomanTraining from "../assets/young-woman-training.jpg";
import Testimonials from "../sections/home/Testimonials";
import CallToActionSection from "../sections/home/CallToActionSection";

function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      {/* Image Section */}
      <img
        src={youngWomanTraining}
        alt="Young woman training"
        className="max-h-screen h-svh w-full object-[60%_15%] md:object-center object-cover md:object-fit"
      />
      <ScheduleSection />
      <ServicesSection />
      <Testimonials />
      <CallToActionSection />
    </>
  );
}

export default Home;
