import Image from "next/image";
import "./../Styles/Styles.css";
import xRayHeaderImg from "./../Images/ServiceHeaderImgs/General X Ray.png"
export default function XrayHeader() {
  return (
    <div className="serviceHeader-container">
      <div className="serviceHeader-content">
        <Image
          src={xRayHeaderImg}
          alt="xRayHeaderImg"
        />
      </div>
      <div className="serviceHeader-content">
        <div className="serviceHeader-item">
          <h2>X-Ray in Bangalore</h2>
          <p>Creating Life's masterpiece, one kick at a time</p>
          <button>Book an Appointment </button>
        </div>
      </div>
    </div>
  );
}
