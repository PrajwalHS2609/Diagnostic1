import GynecologistConsultContent from "@/components/GynecologistConsult/GynoConsultContent";
import GynecologistConsultHeader from "@/components/GynecologistConsult/GynoConsultHeader";
import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeDoctorProfile from "@/components/HomePage/HomeDoctorProfile/HomeDoctorProfile";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";

export default function GynecologistConsultation() {
  return (
    <div className="main-container">
      {" "}
      <GynecologistConsultHeader />
      <GynecologistConsultContent />
      <HomeAbout />
      <HomeWhy />
      <HomeDoctorProfile />
      <HomeTestimonial />
    </div>
  );
}
