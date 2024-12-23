import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeDoctorProfile from "@/components/HomePage/HomeDoctorProfile/HomeDoctorProfile";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import RadiologyServiceHeader from "@/components/RadiologyService/RadiologyServiceHeader";
import RadiologyServiceContent from './../../components/RadiologyService/RadiologyServiceContent';
import RadiologyServiceServices from "@/components/RadiologyService/RadiologyServiceServices";

export default function RadiologyServices() {
    return (
        <div className="main-container">
            <RadiologyServiceHeader />
            <RadiologyServiceContent/>
            <RadiologyServiceServices/>
            <HomeAbout />
            <HomeWhy />
            <HomeDoctorProfile />
            <HomeTestimonial />
        </div>
    )
}