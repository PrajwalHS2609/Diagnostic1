import "./HealthPackagesMain.css"
import { FaCheck } from "react-icons/fa6";

export default function HealthPackagesMain() {
    return (
        <div className="healthPackages-mainContainer">
            <h2>👪Health Packages for All: Get Your Wellness on Track with Global Health Diagnostics!</h2>
            <div className="healthPackages-mainContent">
                <div className="healthPackages-mainItem"><img src="https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191355.jpg?t=st=1734780653~exp=1734784253~hmac=6943291709e960d7b9c7a1b291497dd02911bb072622ce6333a2813935432419&w=1060" alt="" /></div>
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
                    <p>🔥 Hurry, this limited-time offer is designed to set you on a path to vitality and well-being! Don’t miss out on the opportunity to invest in your health.

                    </p>
                </div>
            </div>
        </div>
    )
}