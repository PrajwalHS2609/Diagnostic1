import EchoTestContent from "@/components/EchoTest/EchoTestContent";
import EchoTestContentFooter from "@/components/EchoTest/EchoTestContentFooter";
import EchoTestHeader from "@/components/EchoTest/EchoTestHeader";
import EchoTestServices from "@/components/EchoTest/EchoTestServices";
import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeDoctorProfile from "@/components/HomePage/HomeDoctorProfile/HomeDoctorProfile";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";

export default function EchoTest() {
  return (
    <div className="main-container">
      <EchoTestHeader />
      <EchoTestContent />
      <EchoTestServices />
      <HomeAbout />
      <HomeWhy />
      <HomeDoctorProfile />
      <HomeTestimonial />
      <EchoTestContentFooter />
    </div>
  );
}
