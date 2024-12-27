import AboutUsContent from "@/components/AboutUs/AboutUsContent";
import AboutUsHeader from "@/components/AboutUs/AboutUsHeader";
import AboutUsMission from "@/components/AboutUs/AboutUsMission";
import HomeDoctorProfile from "@/components/HomePage/HomeDoctorProfile/HomeDoctorProfile";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";

export default function AboutUs() {
  return (
    <div className="main-container">
      <AboutUsHeader />
      <AboutUsContent />
      <AboutUsMission/>
      <HomeWhy />
      <HomeDoctorProfile />
      <HomeTestimonial />
    </div>
  );
}
