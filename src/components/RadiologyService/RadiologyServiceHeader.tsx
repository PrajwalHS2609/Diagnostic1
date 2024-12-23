import './../Styles/Styles.css'
export default function RadiologyServiceHeader() {
    return (
        <div className="serviceHeader-container">
            <div className="serviceHeader-content">
                <img src="https://first-c9d21.web.app/assets/Radiology-DRjpb-2x.png" alt="" />
            </div>
            <div className="serviceHeader-content">
                <div className='serviceHeader-item'>
                    <h2>Radiology Services in Bangalore
                    </h2>
                    <p>Creating Life's masterpiece, one kick at a time</p>
                    <button>Book Appointment Now</button>
                </div>
            </div>
        </div>
    )
}