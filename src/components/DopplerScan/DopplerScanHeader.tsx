import "./../Styles/Styles.css";
import Image from "next/image";
import dopplerHeaderImg from "./../Images/ServiceHeaderImgs/Doppler.png"

export default function DopplerScanHeader() {
  return (
    <div className="serviceHeader-container">
      <div className="serviceHeader-content">
        <Image
          src={dopplerHeaderImg}
          alt="dopplerHeaderImg"
        />
      </div>
      <div className="serviceHeader-content">
        <div className="serviceHeader-item">
          <h2>Doppler Scan in Bangalore</h2>
          <p>Creating Life's masterpiece, one kick at a time</p>
          <button>Book an Appointment </button>
        </div>
      </div>
    </div>
  );
}
