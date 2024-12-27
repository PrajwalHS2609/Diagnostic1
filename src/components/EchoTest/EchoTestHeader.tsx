import './../Styles/Styles.css'
import Image from "next/image";
import echoHeaderImg from "./../Images/ServiceHeaderImgs/ECHO.png"

export default function EchoTestHeader() {
    return (
        <div className="serviceHeader-container">
            <div className="serviceHeader-content">
                <Image src={echoHeaderImg} alt="echoHeaderImg" />
            </div>
            <div className="serviceHeader-content">
                <div className='serviceHeader-item'>
                    <h2>Echo Test in Bangalore</h2>
                    <p>Creating Life's masterpiece, one kick at a time</p>
                    <button>Book an Appointment </button>
                    </div>
            </div>
        </div>
    )
}