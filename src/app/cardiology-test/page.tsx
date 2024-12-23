
import CardiologyTestContent from "@/components/CardiologyTest/CardiologyTestContent";
import CardiologyTestHeader from "@/components/CardiologyTest/CardiologyTestHeader";
import CardiologyTestServices from "@/components/CardiologyTest/CardiologyTestServices";
import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeDoctorProfile from "@/components/HomePage/HomeDoctorProfile/HomeDoctorProfile";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";

export default function CardiologyTest() {
    return (
        <div className="main-container">
            <CardiologyTestHeader />
            <CardiologyTestContent/>
            <CardiologyTestServices/>
            <HomeAbout />
            <HomeWhy />
            <HomeDoctorProfile />
            <HomeTestimonial />
        </div>
    )
}