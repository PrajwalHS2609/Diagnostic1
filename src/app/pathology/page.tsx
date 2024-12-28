import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeDoctorProfile from "@/components/HomePage/HomeDoctorProfile/HomeDoctorProfile";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import PathologyContent from "@/components/Pathology/PathologyContent";
import PathologyContentFooter from "@/components/Pathology/PathologyContentFooter";
import PathologyHeader from "@/components/Pathology/PathologyHeader";
import PathologyService from "@/components/Pathology/PathologyServices";

export default function Pathology() {
  return (
    <div className="main-container">
      <PathologyHeader />
      <PathologyContent />
      <PathologyService />
      <HomeAbout />
      <HomeWhy />
      <HomeDoctorProfile />
      <HomeTestimonial />
      <PathologyContentFooter />
    </div>
  );
}
