import "./Footer.css";
import FooterAddress from "./FooterAddress";
import FooterLinks from "./FooterLinks";
import { FaCopyright } from "react-icons/fa";
import FooterSocial from "./FooterSocial";
import FooterAddress2 from "./FooterAddress2";
import logo from "./FooterImgs/logo.png"
import Image from "next/image";
export default function Footer() {
  return (
    <nav className="footer-container">
      <div className="footer-content">
        <div className="footer-wrapper">
          <div className="footer-Logo">
            <Image src={logo} alt="logo"/>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste
              dolor ipsam magni, nihil, cumque amet inventore optio, doloribus
            </p>
          </div>
          <FooterLinks />
          <FooterAddress />
          <FooterAddress2 />
        </div>
        <div className="footer-wrapper">
          <p>
            <FaCopyright className="footerAddressIco1" /> 2024 All Right
            Reserved{" "}
          </p>
          <FooterSocial />
        </div>
      </div>
    </nav>
  );
}
