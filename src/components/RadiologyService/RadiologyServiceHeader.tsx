import "./../Styles/Styles.css";
import Image from "next/image";
import radiologyServiceHeader from "./../Images/ServiceHeaderImgs/Radiology.png"

export default function RadiologyServiceHeader() {
  return (
    <div className="serviceHeader-container">
      <div className="serviceHeader-content">
        <Image
          src={radiologyServiceHeader}
          alt="radiologyServiceHeader"
        />
      </div>
      <div className="serviceHeader-content">
        <div className="serviceHeader-item">
          <h2>Radiology Services in Bangalore</h2>
          <p>Creating Life's masterpiece, one kick at a time</p>
          <button>Book an Appointment </button>
        </div>
      </div>
    </div>
  );
}
