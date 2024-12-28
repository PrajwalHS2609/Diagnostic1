import DiabetologistConsultContent from "@/components/DiabetologistConsult/DiabetologistConsultContent";
import DiabetologistConsultContentFooter from "@/components/DiabetologistConsult/DiabetologistConsultContentFooter";
import DiabetologistConsultHeader from "@/components/DiabetologistConsult/DiabetologistConsultHeader";
import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeDoctorProfile from "@/components/HomePage/HomeDoctorProfile/HomeDoctorProfile";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";

export default function DiabetologistConsultation() {
  return (
    <div className="main-container">
      {" "}
      <DiabetologistConsultHeader />
      <DiabetologistConsultContent />
      <HomeAbout />
      <HomeWhy />
      <HomeDoctorProfile />
      <HomeTestimonial />
      <DiabetologistConsultContentFooter />

    </div>
  );
}
