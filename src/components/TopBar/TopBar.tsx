"use client";
import "./TopBar.css";
import { FaHome } from "react-icons/fa";

export default function TopBar() {
  const handleAppointment = () => {
    const bookPopUpElement = document.querySelector(".bookPopUp");
    if (bookPopUpElement) {
      (bookPopUpElement as HTMLElement).style.visibility = "visible";
    } else {
      console.warn("Element with class 'bookPopUp' not found");
    }
  };
  return (
    <nav className="topBar-container">
      <div className="topBar-wrapper">
        <div className="topBar-content">
          <FaHome className="topBar-ContentIco" />

          <b>Home Visit Sample Collection Services</b>
        </div>
      </div>
      <div className="topBar-wrapper">
        <button onClick={handleAppointment}>BOOK AN APPOINTMENT </button>
      </div>
    </nav>
  );
}
