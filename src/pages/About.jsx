import CoreValues from "../sections/about/CoreValues";
import Hero from "../sections/about/Hero";
import Mission from "../sections/about/Mission";
import OurTeam from "../sections/about/OurTeam";
import Stats from "../sections/about/Stats";
import womanOnTreadmill from "../assets/woman-running-treadmill.jpg";
import ImageSection from "../components/ImageSection";

function About() {
  return (
    <div>
      <Hero />
      <Mission />
      <OurTeam />
      <Stats />
      <CoreValues />
      <ImageSection
        src={womanOnTreadmill}
        alt="Young woman running on treadmill"
      />
    </div>
  );
}

export default About;
