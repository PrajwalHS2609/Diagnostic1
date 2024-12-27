"use client"
import Image from "next/image";
import "./../Styles/Styles.css";
import xRayHeaderImg from "./../Images/ServiceHeaderImgs/General X Ray.png"
export default function XrayHeader() {
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
          src={xRayHeaderImg}
          alt="xRayHeaderImg"
        />
      </div>
      <div className="serviceHeader-content">
        <div className="serviceHeader-item">
          <h2>X-Ray in Bangalore</h2>
          <p>Creating Life's masterpiece, one kick at a time</p>
          <button onClick={handleAppointment}>Book an Appointment </button>
        </div>
      </div>
    </div>
  );
}
