"use client";
import "./TopBar.css";
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
        <button onClick={handleAppointment}>BOOK AN APPOINTMENT </button>
      </div>
    </nav>
  );
}
