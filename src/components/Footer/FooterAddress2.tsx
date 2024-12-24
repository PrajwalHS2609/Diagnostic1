import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";

export default function FooterAddress2() {
  return (
    <div className="footerAddress-container">
      <ul>
        <h4>Address 2</h4>
        <li>
          <a href="https://www.google.com/maps/place/Global+Health+Diagnostics+%26+Specialist+Center/@13.0047818,77.5764179,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae16314e84e4d3:0x2af9f1cf066af08!8m2!3d13.0047818!4d77.5789928!16s%2Fg%2F11cnrgfqj8?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
            <span>
              <FaLocationDot className="footerAddressIco" />
            </span>
            No.19/1, 1st Main Road, 14th cross, Vyalikaval,Bengaluru-560003
          </a>
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
              <FaMobileAlt className="footerAddressIco1" />
            </span>
            81840 99959
          </a>
        </li>
        <li>
          <a href="tel:8031597306">
            <span>
              <FaMobileAlt className="footerAddressIco1" />
            </span>
            80315 97306
          </a>
        </li>
        <li className="addressFooter">
          <a href="mailto:hello@gmail.com">
            <span>
              <IoIosMail className="footerAddressIco1" />
            </span>
            globalhealthdiagnostics14@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
}
