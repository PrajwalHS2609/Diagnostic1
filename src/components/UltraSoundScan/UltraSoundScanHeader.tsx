import "./../Styles/Styles.css";
import Image from "next/image";
import ultraSoundHeaderImg from "./../Images/ServiceHeaderImgs/Ultrasound.png"

export default function UltraSoundScanHeader() {
  return (
    <div className="serviceHeader-container">
      <div className="serviceHeader-content">
        <Image
          src={ultraSoundHeaderImg}
          alt="ultraSoundHeaderImg"
        />
      </div>
      <div className="serviceHeader-content">
        <div className="serviceHeader-item">
          <h2>Ultrasound Scan Services in Bangalore</h2>
          <p>Creating Life's masterpiece, one kick at a time</p>
          <button>Book an Appointment </button>
        </div>
      </div>
    </div>
  );
}
