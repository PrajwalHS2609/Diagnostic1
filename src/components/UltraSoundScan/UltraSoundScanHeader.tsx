"use client"

import "./../Styles/Styles.css";
import Image from "next/image";
import ultraSoundHeaderImg from "./../Images/ServiceHeaderImgs/Ultrasound.png"

export default function UltraSoundScanHeader() {
  const handleAppointment = () => {
    const bookPopUpElement = document.querySelector(".bookPopUp");
    if (bookPopUpElement) {
      (bookPopUpElement as HTMLElement).style.visibility = "visible";
    } else {
      console.warn("Element with class 'bookPopUp' not found");
    }
  };
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
          <button onClick={handleAppointment}>Book an Appointment </button>
        </div>
      </div>
    </div>
  );
}
