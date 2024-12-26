"use client";
import "./HomeService.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Link from "next/link";

export default function HomeServiceMain() {
  const serviceData = [
    {
      id: 1,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/11/Medical-Labs.jpg",
      serviceName: "Pathology",
      serviceDescription:
        " Revolutionize your diagnostic experience with our fully automated Pathology Laboratory at  Global Health Diagnostics.Cutting-edge technology for accurate and swift results.",
      link: "/pathology",
    },
    {
      id: 2,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/11/3D-4D-Ultrasound-.png",
      serviceName: "Ultrasound" ,
      serviceDescription:
        "Experience the joy of parenthood with our advanced  Ultrasound. Capture precious moments and bond with your baby in stunning detail.",
      link: "/ultrasound-scan",
    },
    // {
    //   id: "3",
    //   img: "https://nisargadiagnostics.com/wp-content/uploads/2023/11/Xray.jpg",
    //   serviceName: "X-Ray",
    //   serviceDescription:
    //     " Experience swift and accurate diagnostics with our X-Ray services at  Global Health Diagnostics. Cutting-edge technology delivering detailed insights for better health outcomes.",
    //   link: "/x-ray",
    // },
    {
      id: 3,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2024/02/Doppler-Scan.png",
      serviceName: "Doppler Scan",
      serviceDescription:
        "Ensure optimal vascular health with our Doppler Scan service. Advanced technology to assess blood flow, providing crucial insights for diagnosis and personalized care.",
      link: "/doppler-scan",
    },
    // {
    //   id: "5",
    //   img: "https://nisargadiagnostics.com/wp-content/uploads/2023/11/Radiological-Procedures.png",
    //   serviceName: "Radiological Procedures",
    //   serviceDescription:
    //     "Empowering women’s health through comprehensive radiological procedures. Our advanced imaging services cater to the specific diagnostic needs, ensuring accuracy and personalized care for every woman.",
    //   link: "/radiology-services",
    // },
    {
      id: 4,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/11/Echocardiography.png",
      serviceName: "Echo Cardiography",
      serviceDescription:
        " Visualize the heart’s intricate details with Echocardiography at  Global Health Diagnostics. Our advanced technology ensures accurate assessments for comprehensive cardiac care and diagnosis.",
      link: "/echo-test",
    },
    {
      id: 5,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/11/ECG.jpg",
      serviceName: "ECG Test",
      serviceDescription:
        "Experience precise ECG testing at  Global Health Diagnostics. Our state-of-the-art facility and skilled professionals ensure accurate results for your cardiac health assessment.",
      link: "/ecg-test",
    },
    {
      id: 6,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/11/Cardiology.jpg",
      serviceName: "TMT Test",
      serviceDescription:
        " Assess your cardiac health with a TMT Test at  Global Health Diagnostics. Evaluating heart function, precise stress analysis, promoting proactive cardiac health. ",
      link: "/tmt-test",
    },
    {
      id: 7,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/11/Specialty-Consultations.png",
      serviceName: "Diabetologist Consultations",
      serviceDescription:
        "Experience specialized healthcare at  Global Health Diagnostics. Our expert consultations cover various medical fields, ensuring personalized care and comprehensive solutions for your health needs.",
      link: "/",
    },
    {
      id: 8,
      img: "https://first-c9d21.web.app/assets/Sonography-Cok0wyz_.png",
      serviceName: "Gynecologist Consultations",
      serviceDescription:
        "Experience specialized healthcare at  Global Health Diagnostics. Our expert consultations cover various medical fields, ensuring personalized care and comprehensive solutions for your health needs.",
      link: "/",
    },
    {
      id: 9,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/11/Report.jpg",
      serviceName: "Blood Testing",
      serviceDescription:
        "Explore comprehensive Blood Testing services at  Global Health Diagnostics. Accurate results, cutting-edge technology, and a commitment to your health journey.",
      link: "/",
    },
    
  ];
  return (
    <div className="homeServiceMain-container">
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          // Swiper-specific configuration
          onSwiper={(swiper) => {
            swiper.loopedSlides = 12; // Dynamically set loopedSlides on the Swiper instance
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,  // 1 slide per view on small screens (e.g., mobile)
            },
            768: {
              slidesPerView: 2,  // 2 slides per view on medium screens (e.g., tablets)
            },
            1024: {
              slidesPerView: 3,  // 3 slides per view on large screens (e.g., desktop)
            },
          }}
        >
          {serviceData.map((x) => (
            <SwiperSlide key={x.id}>
              <div className="homeServiceMain-content" >
                <img src={x.img} alt={x.serviceName} />
                <h3>{x.serviceName}</h3>
                <p>{x.serviceDescription}</p>
                <Link href={x.link}>Learn More</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}
