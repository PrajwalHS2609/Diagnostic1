import "./ContactUs.css";
import contactUsHeader from "./../Images/contactUsHeader.jpg"
import Image from "next/image";
export default function ContactUsHeader() {
  return (
    <div className="contactUs-headerContainer">
      <Image
        src={contactUsHeader}
        alt="contactUsHeader"
      />
      <div className="contactUs-headerContents">
        <h2>Contact Us</h2>
        <p>
          Our dedicated team is here for you. Feel free to reach out through the
          provided contact details or use the convenient form on this page. Your
          health is our priority, and we look forward to connecting with you and
          addressing your healthcare needs with care and efficiency.
        </p>
      </div>
    </div>
  );
}
