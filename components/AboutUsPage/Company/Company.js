import Header from "../../Header/Header"
import FutureTogether from "./components/FutureTogether"
import Heading from "./components/Heading"
import OurExpertise from "./components/OurExpertise"
import OurPeople from "./components/OurPeople"
import VisionMission from "./components/VisionMission"
import WhoWeAre from "./components/WhoWeAre"
import WhyChooseNS from "./components/WhyChooseNS"

const Company = () => {
  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading />
      <WhoWeAre />
      <VisionMission />
      <OurExpertise />
      <WhyChooseNS />
      <OurPeople />
      <FutureTogether />
    </>
  )
}

export default Company
