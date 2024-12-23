import HomeAboutImg from "./HomeAboutImg";
import HomeAboutTxt from "./HomeAboutTxt";
import "./HomeAbout.css";
export default function HomeAbout() {
  return (
    <div className="homeAbout-container">
      <div className="homeAbout-content">
        <HomeAboutTxt />
      </div>
      <div className="homeAbout-content">
        <HomeAboutImg />
      </div>
    </div>
  );
}
