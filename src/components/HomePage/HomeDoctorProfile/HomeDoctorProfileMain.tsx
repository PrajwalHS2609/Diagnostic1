import "./HomeDoctorProfile.css";
// import { IoChevronDownOutline } from "react-icons/io5";
import doctorsImg from "./../../Images/doctorPic.jpg"
import Image from "next/image";
export default function HomeDoctorProfileMain() {
  const profileData = [
    {
      id: 1,
      img: "",
      name: "Dr. M.V.Poorna Chandra",
      designation: "Sr. Consultant Diabetologist & Physician",
    },
    {
      id: 2,
      img: "",
      name: "Dr. SHUBHA RAMA RAO (GIRI)",
      designation: "Obstetrician & Gynaecologist",
    },
    {
      id: 3,
      img: "",
      name: "Dr. Doctor 3",
      designation: "Obstetrician & Gynaecologist",
    },
  ];
  return (
    <div className="doctorProfileMain-container">
      {profileData.map((x) => (
        <div className="doctorProfileMain-cardContainer" key={x.id}>
          <div className="doctorProfileMain-cardContent">
            <Image
              src={doctorsImg}
              alt="doctorsImg"
            />
          </div>
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
  );
}
