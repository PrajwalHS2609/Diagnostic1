"use client"

import "./../Styles/Styles.css";
import Image from "next/image";
import tmtHeaderImg from "./../Images/ServiceHeaderImgs/TMT.png"

export default function TmtTestHeader() {
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
        <Image src={tmtHeaderImg} alt="tmtHeaderImg" />
      </div>
      <div className="serviceHeader-content">
        <div className="serviceHeader-item">
          <h2>TMT Test in Bangalore</h2>
          <p>Assessing your heart's strength to ensure your health is protected.</p>
          <button onClick={handleAppointment}>Book an Appointment </button>
        </div>
      </div>
    </div>
  );
}
