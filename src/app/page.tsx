import AboutMe from "./components/about-me";
import CommunicationMethods from "./components/communication-methods";
import Education from "./components/education";
import Experience from "./components/experience";
import FeaturedWork from "./components/featured-work";
import HeroSection from "./components/hero-section";

import {
  aboutData,
  contactData,
  educationData,
  experienceData,
  featuredWork,
  heroData,
} from "@/data/portfolio";

const Page = () => {
  return (
    <main className="portfolio-main">
      <HeroSection hero={heroData} />
      <AboutMe about={aboutData} />
      <FeaturedWork projects={featuredWork} />
      <Experience experience={experienceData} />
      <Education education={educationData} />
      <CommunicationMethods contact={contactData} />
    </main>
  );
};

export default Page;
