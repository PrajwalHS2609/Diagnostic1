import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeDoctorProfile from "@/components/HomePage/HomeDoctorProfile/HomeDoctorProfile";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import TmtTestContent from "@/components/TmtTest/TmtTestContent";
import TmtTestContentFooter from "@/components/TmtTest/TmtTestContentFooter";
import TmtTestHeader from "@/components/TmtTest/TmtTestHeader";

export default function EchoTest() {
  return (
    <div className="main-container">
      <TmtTestHeader />
      <TmtTestContent />
      <HomeAbout />
      <HomeWhy />
      <HomeDoctorProfile />
      <HomeTestimonial />
      <TmtTestContentFooter />
    </div>
  );
}
