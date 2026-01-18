import Divider from "../components/ui/divider"
import AboutMe from "./components/about-me"
import Education from "./components/education"
import Experience from "./components/experience"
import FeaturedWork from "./components/featured-work"
import HeroSection from "./components/hero-section"
import CommunicationMethods from "./components/communication-methods"

const page = () => {
  return (
    <main>
      <HeroSection/>
      <Divider/>
      <AboutMe/>
      <Divider/>
      <FeaturedWork/>
      <Divider/>
      <Experience/>
      <Divider/>
      <Education/>
      <Divider/>
      <CommunicationMethods/>
      <Divider/>
    </main>
  )
}

export default page