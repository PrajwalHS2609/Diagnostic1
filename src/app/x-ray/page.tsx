import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeDoctorProfile from "@/components/HomePage/HomeDoctorProfile/HomeDoctorProfile";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import XrayContent from "@/components/XRay/XRayContent";
import XrayHeader from "@/components/XRay/XRayHeader";
import XrayService from "@/components/XRay/XRayServices";

export default function XRay() {
    return (
        <div className="main-container">
            <XrayHeader />
            <XrayContent/>
            <XrayService/>
            <HomeAbout />
            <HomeWhy />
            <HomeDoctorProfile />
            <HomeTestimonial />
        </div>
    )
}