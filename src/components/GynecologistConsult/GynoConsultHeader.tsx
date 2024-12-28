"use client";
import Image from "next/image";
import "./../Styles/Styles.css";
import gynoHeaderImg from "./../Images/Consultation/Gyno.png";

export default function GynecologistConsultHeader() {
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
        <Image src={gynoHeaderImg} alt="gynoHeaderImg" />
      </div>
      <div className="serviceHeader-content">
        <div className="serviceHeader-item">
          <h2>Gynecologist Consultation in Bangalore </h2>
          <p>Compassionate Care for Every Stage of Womanhood</p>
          <button onClick={handleAppointment}>Book an Appointment </button>
        </div>
      </div>
    </div>
  );
}
