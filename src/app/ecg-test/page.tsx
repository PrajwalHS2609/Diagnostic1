import ECGTestContent from "@/components/ECGTest/ECGTestContent";
import ECGTestHeader from "@/components/ECGTest/ECGTestHeader";
import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeDoctorProfile from "@/components/HomePage/HomeDoctorProfile/HomeDoctorProfile";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";

export default function ECGTest() {
  return (
    <div className="main-container">
      <ECGTestHeader />
      <ECGTestContent />
      <HomeAbout />
      <HomeWhy />
      <HomeDoctorProfile />
      <HomeTestimonial />
    </div>
  );
}
