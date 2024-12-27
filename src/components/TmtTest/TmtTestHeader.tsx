import "./../Styles/Styles.css";
import Image from "next/image";
import tmtHeaderImg from "./../Images/ServiceHeaderImgs/TMT.png"

export default function TmtTestHeader() {
  return (
    <div className="serviceHeader-container">
      <div className="serviceHeader-content">
        <Image src={tmtHeaderImg} alt="tmtHeaderImg" />
      </div>
      <div className="serviceHeader-content">
        <div className="serviceHeader-item">
          <h2>TMT Test in Bangalore</h2>
          <p>Creating Life's masterpiece, one kick at a time</p>
          <button>Book an Appointment </button>
        </div>
      </div>
    </div>
  );
}
