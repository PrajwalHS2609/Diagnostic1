import "./AboutUs.css";
import missionImg from "./../Images/Vision & Mission/mission.png"
import visionImg from "./../Images/Vision & Mission/vision.png"
import Image from "next/image";

export default function AboutUsMission() {
  return (
    <div className="aboutUsMission-container">
      <div className="aboutUsMission-content">
        <div className="aboutUsMission-item1">
          <Image src={missionImg} alt="missionImg" />
        </div>
        <div className="aboutUsMission-item2">
          <h3>Our Mission</h3>
          <p>
            Is to deliver accurate, reliable, and timely diagnostic services
            using advanced technology and a compassionate approach.
          </p>
        </div>
      </div>
      <div className="aboutUsMission-content" id="aboutUsMission-contentId">
        <div className="aboutUsMission-item1">
          <Image src={visionImg} alt="visionImg" />
        </div>
        <div className="aboutUsMission-item2">
          <h3>Our Vision</h3>
          <p>
            Is to lead in diagnostic healthcare through innovation, integrity,
            and excellence, providing precise diagnostics and fostering a
            culture of trust and care for better health outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}
