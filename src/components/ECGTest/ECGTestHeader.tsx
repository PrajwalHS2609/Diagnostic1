"use client"

import "./../Styles/Styles.css";
import Image from "next/image";
import ecgHeaderImg from "./../Images/ServiceHeaderImgs/ECG.png"

export default function ECGTestHeader() {
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
        <Image src={ecgHeaderImg} alt="ecgHeaderImg" />
      </div>
      <div className="serviceHeader-content">
        <div className="serviceHeader-item">
          <h2>ECG Test in Bangalore</h2>
          <p>Clearly monitoring your heart's health for peace of mind.</p>
          <button onClick={handleAppointment}>Book an Appointment </button>
        </div>
      </div>
    </div>
  );
}
