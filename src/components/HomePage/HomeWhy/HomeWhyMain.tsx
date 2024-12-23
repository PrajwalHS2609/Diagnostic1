import Image from "next/image";
import "./HomeWhy.css";
import expertiseExperienceImg from "./HomeWhyImgs/Expertise and Experience.png";
import cuttingEdgeTechnology from "./HomeWhyImgs/Cutting-Edge Technology.png";
import comprehensiveServices from "./HomeWhyImgs/Comprehensive Services.png";
import patientCentricCareImg from "./HomeWhyImgs/Patient-Centric Care.png";
import commitmentToQuality from "./HomeWhyImgs/Commitment to Quality.png";
import transparentProcesses from "./HomeWhyImgs/Transparent Processes.png";
import positivePatient from "./HomeWhyImgs/Positive Patient Experience.png";
import communityTrust from "./HomeWhyImgs/Community Trust.png";
import continuousImprovement from "./HomeWhyImgs/Continuous Improvement.png";
import holisticHealthFocus from "./HomeWhyImgs/Holistic Health Focus.png";

export default function HomeWhyMain() {
  const data = [
    {
      id: 1,
      img: expertiseExperienceImg,
      title: "Expertise and Experience",
    },
    {
      id: 2,
      img: cuttingEdgeTechnology,
      title: "Cutting-Edge Technology",
    },
    {
      id: 3,
      img: comprehensiveServices,
      title: "Comprehensive Services  ",
    },
    {
      id: 4,
      img: patientCentricCareImg,
      title: "Patient-Centric Care",
    },
    {
      id: 5,
      img: commitmentToQuality,
      title: "Commitment to Quality",
    },
    {
      id: 6,
      img: transparentProcesses,
      title: "Transparent Processes",
    },
    {
      id: 7,
      img: positivePatient,
      title: "Positive Patient Experience",
    },
    {
      id: 8,
      img: communityTrust,
      title: "Community Trust",
    },
    {
      id: 9,
      img: continuousImprovement,
      title: "Continuous Improvement",
    },
    {
      id: 10,
      img: holisticHealthFocus,
      title: "Holistic Health Focus",
    },
  ];
  return (
    <div className="homeWhyMain-container">
      {data.map((x) => (
        <div className="homeWhyMain-card" key={x.id}>
         <div className="homeWhyMain-imgContainer"> <Image src={x.img} alt={x.title} /></div>
          <h6>{x.title}</h6>
        </div>
      ))}
    </div>
  );
}
