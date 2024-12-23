import './../Styles/Styles.css'
export default function EchoTestHeader() {
    return (
        <div className="serviceHeader-container">
            <div className="serviceHeader-content">
                <img src="https://first-c9d21.web.app/assets/ECHO-DWFpZmrm.png" alt="" />
            </div>
            <div className="serviceHeader-content">
                <div className='serviceHeader-item'>
                    <h2>Echo Test in Bangalore</h2>
                    <p>Creating Life's masterpiece, one kick at a time</p>
                    <button>Book Appointment Now</button>
                </div>
            </div>
        </div>
    )
}