"use client";
import Image from "next/image";
import "./../Styles/Styles.css";
import diabetoHeaderImg from "./../Images/Consultation/Diabetes.png";

export default function DiabetologistConsultHeader() {
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
        <Image src={diabetoHeaderImg} alt="diabetoHeaderImg" />
      </div>
      <div className="serviceHeader-content">
        <div className="serviceHeader-item">
          <h2>Diabetologist Consultation in Bangalore </h2>
          <p>
            Diabetologist Consultation in Bangalore, look no further than Global
            Health Diagnostics.
          </p>
          <button onClick={handleAppointment}>Book an Appointment </button>
        </div>
      </div>
    </div>
  );
}
