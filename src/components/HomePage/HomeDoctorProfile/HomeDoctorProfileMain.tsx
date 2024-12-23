import "./HomeDoctorProfile.css"
// import { IoChevronDownOutline } from "react-icons/io5";

export default function HomeDoctorProfileMain() {
    const profileData = [
        { id: 1, img: "", name: "Dr. M.V.Poorna Chandra", designation: "Sr. Consultant Diabetologist & Physician" },
        { id: 2, img: "", name: "Dr. SHUBHA RAMA RAO (GIRI)", designation: "Obstetrician & Gynaecologist" },
        { id: 3, img: "", name: "Dr. Doctor 3", designation: "Obstetrician & Gynaecologist" }

    ]
    return (
        <div className="doctorProfileMain-container">
           {profileData.map((x)=>(
             <div className="doctorProfileMain-cardContainer" key={x.id}>
             <div className="doctorProfileMain-cardContent"><img src="https://img.freepik.com/free-photo/doctors-day-handsome-brunette-cute-guy-medical-gown-with-crossed-hands_140725-162942.jpg?t=st=1734760646~exp=1734764246~hmac=47d6ad15675a1647a27d2606129a8751481d058841d896a6652f3696c80c25f3&w=1060" alt="" /></div>
             <div className="doctorProfileMain-cardContent">
                 <div className="doctorProfileMain-item">
                     <h5>{x.name}</h5>
                     <h6>{x.designation}</h6>
                 </div>
                 {/* <div className="doctorProfileMain-item">
                     <IoChevronDownOutline className="doctorProfileMain-ico" />
                 </div> */}
             </div>
         </div>
           ))}
        </div>
    )
}