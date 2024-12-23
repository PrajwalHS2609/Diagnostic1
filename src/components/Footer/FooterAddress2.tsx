import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function FooterAddress2() {
  return (
    <div className="footerAddress-container">
      <ul>
        <h4>Address 2</h4>
        <li>
          <Link href="/">
            <span>
              <FaLocationDot className="footerAddressIco" />
            </span>
            123, 4th Cross, 7th Main, Indiranagar, Bengaluru, Karnataka, 560038.
          </Link>
        </li>
        <li>
          <a href="tel:8042038405">
            <span>
              <FaPhoneAlt className="footerAddressIco1" />
            </span>
            080-4203 8405
          </a>
        </li>
        <li>
          <a href="tel:8088640978">
            <span>
              <FaPhoneAlt className="footerAddressIco1" />
            </span>
            80886 40978
          </a>
        </li>
        <li className="addressFooter">
          <a href="mailto:hello@gmail.com">
            <span>
              <IoIosMail className="footerAddressIco1" />
            </span>
            globalhealthdiagnostics14@gmail.com</a>
        </li>
      </ul>
    </div>
  );
}
