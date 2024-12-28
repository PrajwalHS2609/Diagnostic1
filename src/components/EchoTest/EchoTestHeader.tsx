"use client"

import './../Styles/Styles.css'
import Image from "next/image";
import echoHeaderImg from "./../Images/ServiceHeaderImgs/ECHO.png"

export default function EchoTestHeader() {
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
                <Image src={echoHeaderImg} alt="echoHeaderImg" />
            </div>
            <div className="serviceHeader-content">
                <div className='serviceHeader-item'>
                    <h2>Echo Test in Bangalore</h2>
                    <p>Providing a clear view of your heart to safeguard your health.
                    </p>
                    <button  onClick={handleAppointment}>Book an Appointment </button>
                    </div>
            </div>
        </div>
    )
}