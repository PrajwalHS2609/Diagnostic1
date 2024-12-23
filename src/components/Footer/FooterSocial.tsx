import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css";
export default function FooterSocial() {
  return (
    <div className="footerSocial-container">
      <div className="footerSocial-content">
        <a href="">
          <FaInstagram className="footerSocialIco" />
        </a>
      </div>
      <div className="footerSocial-content">
        <a href="">
          <FaFacebookF className="footerSocialIco" />
        </a>
      </div>
      <div className="footerSocial-content">
        <a href="">
          <FaXTwitter className="footerSocialIco" />
        </a>
      </div>
      <div className="footerSocial-content">
        <a href="">
          <FaLinkedinIn className="footerSocialIco" />
        </a>
      </div>
      <div className="footerSocial-content">
        <a href="">
          <FaYoutube className="footerSocialIco" />
        </a>
      </div>
    </div>
  );
}
