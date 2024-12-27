import "./../Styles/Styles.css";
import Image from "next/image";
import pathologyHeaderImg from "./../Images/ServiceHeaderImgs/Pathaology.png"

export default function PathologyHeader() {
  return (
    <div className="serviceHeader-container">
      <div className="serviceHeader-content">
        <Image
          src={pathologyHeaderImg}
          alt="pathologyHeaderImg"
        />
      </div>
      <div className="serviceHeader-content">
        <div className="serviceHeader-item">
          {" "}
          <h2>Book Blood Test At Home</h2>
          <p>
            Discover the Convenience of a Healthier Life with our Complimentary
            Service
          </p>
          <button>Book an Appointment </button>
        </div>
      </div>
    </div>
  );
}
