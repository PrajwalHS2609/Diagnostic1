import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";

import "./ContactUs.css";
export default function ContactUsAddress() {
  return (
    <div className="contactUs-addressContainer">
      <div className="contactUs-addressContent">
        <div className="contactUs-addressItem1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5447317251883!2d77.56820339678957!3d13.000945000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17004c69bdbf%3A0x403ee7e30a25cd37!2sGlobal%20Health%20Diagnostics!5e0!3m2!1sen!2sin!4v1735024403407!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contactUs-addressItem2">
          <h3>Malleshwaram :</h3>
          <ul>
            <li>
              {" "}
              <a href="https://www.google.com/maps/place/Global+Health+Diagnostics/@13.000945,77.5682034,17z/data=!4m10!1m2!2m1!1sno+7+10th+cross+malleshwaram+global+health+diagnostic!3m6!1s0x3bae17004c69bdbf:0x403ee7e30a25cd37!8m2!3d13.000945!4d77.572967!15sCjVubyA3IDEwdGggY3Jvc3MgbWFsbGVzaHdhcmFtIGdsb2JhbCBoZWFsdGggZGlhZ25vc3RpY5IBEWRpYWdub3N0aWNfY2VudGVy4AEA!16s%2Fg%2F11vzctf2n4?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                <span>
                  <FaLocationDot className="footerAddressIco" />
                </span>
                No. 07 , 10th Cross Malleshwaram Bangalore-560003
              </a>
            </li>
            <li>
              {" "}
              <a href="tel:8042038405">
                <span>
                  <FaPhoneAlt className="footerAddressIco1" />
                </span>
                080-4203 8405
              </a>
            </li>
            <li>
              {" "}
              <a href="tel:8088640978">
                <span>
                <FaMobileAlt className="footerAddressIco1" />
                </span>
                80886 40978
              </a>
            </li>
            <li>
              {" "}
              <a href="mailto:globalhealthdiagnostics14@gmail.com">
                <span>
                  <IoIosMail className="footerAddressIco1" />
                </span>
                globalhealthdiagnostics14@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contactUs-addressContent">
        <div className="contactUs-addressItem1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4846170857736!2d77.57641787489356!3d13.004781787313608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16314e84e4d3%3A0x2af9f1cf066af08!2sGlobal%20Health%20Diagnostics%20%26%20Specialist%20Center!5e0!3m2!1sen!2sin!4v1735023997125!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contactUs-addressItem2" id="contactUs-addressItem2Color">
          <h3>Sadashiva Nagar :</h3>
          <ul>
            <li>
              {" "}
              <a href="https://www.google.com/maps/place/Global+Health+Diagnostics+%26+Specialist+Center/@13.0047818,77.5764179,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae16314e84e4d3:0x2af9f1cf066af08!8m2!3d13.0047818!4d77.5789928!16s%2Fg%2F11cnrgfqj8?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                <span>
                  <FaLocationDot className="footerAddressIco" />
                </span>
                No.19/1, 1st Main Road, 14th cross, Vyalikaval,Bengaluru-560003
              </a>
            </li>
            <li>
              {" "}
              <a href="tel:8023444355">
                <span>
                  <FaPhoneAlt className="footerAddressIco1" />
                </span>
                080-2344 4355
              </a>
            </li>
            <li>
              {" "}
              <a href="tel:8184099959">
                <span>
                <FaMobileAlt className="footerAddressIco1" />
                </span>
                81840 99959
              </a>
            </li>
            <li>
              {" "}
              <a href="tel:8031597306">
                <span>
                  <FaMobileAlt className="footerAddressIco1" />
                </span>
                80315 97306
              </a>
            </li>
            <li>
              {" "}
              <a href="mailto:hello@gmail.com">
                <span>
                  <IoIosMail className="footerAddressIco1" />
                </span>
                globalhealthdiagnostics14@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
