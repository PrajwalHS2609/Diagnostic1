"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomeHeader.css";
import Link from "next/link";
import bloodTest from "./HomeHeaderImgs/Blood Test.png";
import ultrasound from "./HomeHeaderImgs/Ultrasound.png";
import Image from "next/image";

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
              <h3>Blood Tests at Home</h3>
              <p>
                Get accurate and reliable blood tests from the comfort of your
                home with expert care at your doorstep.
              </p>
              <Link href="/">
                <button onClick={handleAppointment}>Book Appointment</button>
              </Link>
            </div>
            <div className="homeHeader-item">
              <Image src={bloodTest} alt="bloodTest" />
            </div>
          </div>
        </div>
        <div className="carousel-container">
          <div className="homeHeader-content">
            <div className="homeHeader-item">
              <h3>Clear Insights, Better Care: Ultrasound Scan </h3>
              <p>
                Experience precise and reliable imaging with our advanced
                ultrasound scan services for accurate diagnostics.
              </p>
              <Link href="/">
                <button onClick={handleAppointment}>Book Appointment</button>
              </Link>
            </div>
            <div className="homeHeader-item">
              <Image src={ultrasound} alt="Ultrasound" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
