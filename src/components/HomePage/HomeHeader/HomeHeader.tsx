"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomeHeader.css";
import Link from "next/link";
export default function HomeHeader() {
  const handleAppointment = () => {
    const bookPopUpElement = document.querySelector(".bookPopUp");
    if (bookPopUpElement) {
      (bookPopUpElement as HTMLElement).style.visibility = "visible";
    } else {
      console.warn("Element with class 'bookPopUp' not found");
    }
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  return (
    <div className="homeHeader-container">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="1s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="carousel-container">
          <div className="homeHeader-content">
            <div className="homeHeader-item">
              <h3>Best Diagnostic Experience</h3>
              <p>
                At Diagnostic hospital, we believe that healthcare should be
                more than just a service. It should be a compassionate and
                collaborative journey towards wellness.
              </p>
              <Link href="/">
                <button onClick={handleAppointment}>Book Appointment</button>
              </Link>
            </div>
            <div className="homeHeader-item">
              <img
                src="https://img.freepik.com/free-photo/two-doctors-lab_23-2147822684.jpg?t=st=1734359549~exp=1734363149~hmac=ef7c6dbb31f1cb44473e1ae8b8cf2e95592f0440a1b395a88e8afbd4dde56042&w=996"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="carousel-container">
          <div className="homeHeader-content">
            <div className="homeHeader-item">
              <h3>Cutting-Edge Technology for Accurate Results</h3>
              <p>
                At Diagnostic Hospital, we invest in the latest medical
                technologies and equipment to provide the most precise
                diagnostic results.
              </p>
              <Link href="/">
                <button onClick={handleAppointment}>Book Appointment</button>
              </Link>
            </div>
            <div className="homeHeader-item">
              <img
                src="https://img.freepik.com/free-photo/medical-technician-mature-patient-mri-scanning-procedure-clinic_637285-5005.jpg?t=st=1734423469~exp=1734427069~hmac=3a80491197cb03b2b951f518008e534a8efae285d1b6c3fb3a10be31b6f285cb&w=996"
                alt=""
              />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
