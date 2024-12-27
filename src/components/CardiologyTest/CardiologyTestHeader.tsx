"use client"

import './../Styles/Styles.css'
import Image from "next/image";
import cardiologyHeaderImg from "./../Images/ServiceHeaderImgs/Cardiology.png"

export default function CardiologyTestHeader() {
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
                <Image src={cardiologyHeaderImg} alt="cardiologyHeaderImg" />
            </div>
            <div className="serviceHeader-content">
                <div className='serviceHeader-item'>
                    <h2>Cardiology Test in Bangalore</h2>
                    <p>Creating Life's masterpiece, one kick at a time</p>
                    <button onClick={handleAppointment}>Book Appointment Now</button>
                </div>
            </div>
        </div>
    )
}