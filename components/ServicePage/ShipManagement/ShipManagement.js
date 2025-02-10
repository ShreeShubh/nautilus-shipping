import Header from "@/components/Header/Header"
import Heading from "../components/Heading"
import ManagementServices from "../components/ManagementServices/ManagementServices"
import KeyFeatures from "../components/KeyFeatures/KeyFeatures"
import Latest from "../components/Latest/Latest"

const ShipManagement = () => {
  const data = {
    title: "Efficient Ship Operations, Tailored for You",
    imageUrl: "/service/image01.png",
    desc1:
      "Managing a fleet requires a precise balance of expertise, compliance, and operational efficiency. At Nautilus Shipping, our ship management services are designed to ensure your vessels operate seamlessly, meeting the highest safety and performance standards. From routine maintenance to long-term operational planning, we tailor our services to meet your specific requirements, enabling you to focus on your business objectives. At the same time, we take care of your fleet",
    desc2:
      "We pride ourselves on proactive solutions that minimize downtime and ensure compliance with international regulations. With a dedicated team of maritime professionals and cutting-edge technology, we consistently deliver results that enhance your fleet’s performance and longevity.",
  }

  const msData = {
    title: "Our Technical Management Services Include:",
    services: [
      {
        ques: "Maintenance And Repairs:",
        ans: "Ensuring vessels are always in top operational condition.",
      },
      {
        ques: "Planned Maintenance System:",
        ans: "Proactive planning for seamless operations.",
      },
      {
        ques: "Safety And Environmental Compliance:",
        ans: "Adherence to IMO regulations and safety protocols.",
      },
      {
        ques: "Procurement:",
        ans: "Efficient supply chain solutions for essential spares and services.",
      },
      {
        ques: "Performance Monitoring:",
        ans: "Real-time tracking to maximize efficiency and reduce costs.",
      },
    ],
  }

  const keyFeaturesData = {
    keyFeatures: [
      {
        imageUrl: "/service/key-features/icon01.svg",
        desc: "Tailored maintenance schedules to ensure optimal performance",
      },
      {
        imageUrl: "/service/key-features/icon02.svg",
        desc: "Proactive compliance management, aligning with IMO and other global standards",
      },
      {
        imageUrl: "/service/key-features/icon03.svg",
        desc: "Detailed real-time operational updates and performance insights",
      },
    ],
    buttonText: "Explore",
    desc: "Ship management solutions that keep your fleet running efficiently",
  }

  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading data={data} />
      <ManagementServices data={msData} />
      <KeyFeatures data={keyFeaturesData} />
      <Latest />
    </>
  )
}

export default ShipManagement
