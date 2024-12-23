import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeDoctorProfile from "@/components/HomePage/HomeDoctorProfile/HomeDoctorProfile";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";

export default function HomePage(){
  return(
    <div className="main-container">
      <HomeHeader/>
      <HomeService/>
      <HomeAbout/>
      <HomeWhy/>
      <HomeDoctorProfile/>
      <HomeTestimonial/>
    </div>
  )
}