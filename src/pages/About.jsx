import CoreValues from "../sections/about/CoreValues";
import Hero from "../sections/about/Hero";
import Mission from "../sections/about/Mission";
import OurTeam from "../sections/about/OurTeam";

import womanOnTreadmill from "../assets/woman-running-treadmill.jpg";
import ImageSection from "../components/ImageSection";
import Stats from "../sections/about/Stats";

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
