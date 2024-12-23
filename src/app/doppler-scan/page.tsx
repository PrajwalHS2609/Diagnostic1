import DopplerScanContent from "@/components/DopplerScan/DopplerScanContent";
import DopplerScanHeader from "@/components/DopplerScan/DopplerScanHeader";
import DopplerScanServices from "@/components/DopplerScan/DopplerScanServices";
import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeDoctorProfile from "@/components/HomePage/HomeDoctorProfile/HomeDoctorProfile";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";

export default function DopplerScan() {
  return (
    <div className="main-container">
      <DopplerScanHeader />
      <DopplerScanContent />
      <DopplerScanServices />
      <HomeAbout />
      <HomeWhy />
      <HomeDoctorProfile />
      <HomeTestimonial />
    </div>
  );
}
