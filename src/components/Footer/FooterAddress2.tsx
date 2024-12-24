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
            No.19/1, 1st Main Road, 14th cross, Vyalikaval,Bengaluru-560003
          </Link>
        </li>
        <li>
          <a href="tel:8023444355">
            <span>
              <FaPhoneAlt className="footerAddressIco1" />
            </span>
            080-2344 4355
          </a>
        </li>
        <li>
          <a href="tel:8184099959">
            <span>
              <FaPhoneAlt className="footerAddressIco1" />
            </span>
            81840 99959
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
