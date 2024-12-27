import "./HealthPackagesMain.css";
import { FaCheck } from "react-icons/fa6";
import healthPackImg from "./../../Images/healthpackImg.jpg";
import Image from "next/image";
export default function HealthPackagesMain() {
  return (
    <div className="healthPackages-mainContainer">
      <h2>
        👪Health Packages for All: Get Your Wellness on Track with Global Health
        Diagnostics!
      </h2>
      <div className="healthPackages-mainContent">
        <div className="healthPackages-mainItem">
          <Image src={healthPackImg} alt="healthPackImg" />
        </div>
        <div className="healthPackages-mainItem">
          <ul>
            <li>
              <FaCheck className="healthPackage-mainListIco" />
              Comprehensive Health Check-Up for Him & Her
            </li>
            <li>
              <FaCheck className="healthPackage-mainListIco" />
              Personalized Consultations with Experienced Professionals.
            </li>
            <li>
              <FaCheck className="healthPackage-mainListIco" />
              Full Body Wellness Assessment
            </li>
            <li>
              <FaCheck className="healthPackage-mainListIco" />
              Advanced Diagnostic Tests Included
            </li>
            <li>
              <FaCheck className="healthPackage-mainListIco" />
              Nutritional Guidance for a Healthier Lifestyle
            </li>
            <li>
              <FaCheck className="healthPackage-mainListIco" />
              Wellness Report with Actionable Insights
            </li>
          </ul>
          <p>
            🔥 Hurry, this limited-time offer is designed to set you on a path
            to vitality and well-being! Don’t miss out on the opportunity to
            invest in your health.
          </p>
        </div>
      </div>
    </div>
  );
}
