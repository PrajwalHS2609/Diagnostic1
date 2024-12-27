import Image from "next/image";
import "./AboutUs.css";
import aboutUsHeaderImg from "./../Images/aboutUsHeader.jpg";
export default function AboutUsHeader() {
  return (
    <div className="aboutUs-headerContainer">
      <Image src={aboutUsHeaderImg} alt="aboutUsHeaderImg" />
      <div className="aboutUs-headerContents">
        <h2>About Us</h2>
      </div>
    </div>
  );
}
