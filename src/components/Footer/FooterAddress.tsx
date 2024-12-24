import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";

export default function FooterAddress() {
  return (
    <div className="footerAddress-container">
      <ul>
        <h4>Address 1</h4>
        <li>
          <a href="https://www.google.com/maps/place/Global+Health+Diagnostics/@13.000945,77.5682034,17z/data=!4m10!1m2!2m1!1sno+7+10th+cross+malleshwaram+global+health+diagnostic!3m6!1s0x3bae17004c69bdbf:0x403ee7e30a25cd37!8m2!3d13.000945!4d77.572967!15sCjVubyA3IDEwdGggY3Jvc3MgbWFsbGVzaHdhcmFtIGdsb2JhbCBoZWFsdGggZGlhZ25vc3RpY5IBEWRpYWdub3N0aWNfY2VudGVy4AEA!16s%2Fg%2F11vzctf2n4?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
            <span>
              <FaLocationDot className="footerAddressIco" />
            </span>
            No. 07 , 10th Cross Malleshwaram Bangalore-560003
          </a>
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
            <FaMobileAlt className="footerAddressIco1" />
            </span>
            80886 40978
          </a>
        </li>
        <li className="addressFooter">
          <a href="mailto:globalhealthdiagnostics14@gmail.com">
            <span>
              <IoIosMail className="footerAddressIco1" />
            </span>
            globalhealthdiagnostics14@gmail.com</a>
        </li>
      </ul>
    </div>
  );
}
