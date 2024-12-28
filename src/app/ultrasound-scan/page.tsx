import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeDoctorProfile from "@/components/HomePage/HomeDoctorProfile/HomeDoctorProfile";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import UltraSoundScanHeader from "@/components/UltraSoundScan/UltraSoundScanHeader";
import UltraSoundScanService from "../../components/UltraSoundScan/UltraSoundScanServices";
import UltraSoundScanContent from "@/components/UltraSoundScan/UltraSoundScanContent";
import UltraSoundScanContentFooter from "@/components/UltraSoundScan/UltraSoundScanContentFooter";

export default function UltraSoundScan() {
  return (
    <div className="main-container">
      <UltraSoundScanHeader />
      <UltraSoundScanContent />
      <UltraSoundScanService />
      <HomeAbout />
      <HomeWhy />
      <HomeDoctorProfile />
      <HomeTestimonial />
      <UltraSoundScanContentFooter />
    </div>
  );
}
