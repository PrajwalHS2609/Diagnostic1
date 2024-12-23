"use client";
import { useEffect, useState } from "react";
import "./HomeTestimonial.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import stars from "./TestimonialImgs/stars.png";
export default function HomeTestimonialMain() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
  const [showDots, setShowDots] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth > 768); // Adjust the width as needed
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonials = [
    {id:"1", name:"Smith", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita quos quas quia, fugiat ipsum labore sequi est corporis ab vel possimus architecto culpa sint eaque aliquam facilis error ad!"},
    {id:"2", name:"Jen Doe", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita quos quas quia, fugiat ipsum labore sequi est corporis ab vel possimus architecto culpa sint eaque aliquam facilis error ad!"},
    {id:"3", name:"Jenny", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita quos quas quia, fugiat ipsum labore sequi est corporis ab vel possimus architecto culpa sint eaque aliquam facilis error ad!"},
    {id:"4", name:"John", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita quos quas quia, fugiat ipsum labore sequi est corporis ab vel possimus architecto culpa sint eaque aliquam facilis error ad!"},
    {id:"5", name:"Jill", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita quos quas quia, fugiat ipsum labore sequi est corporis ab vel possimus architecto culpa sint eaque aliquam facilis error ad!"},
    {id:"6", name:"Jake", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita quos quas quia, fugiat ipsum labore sequi est corporis ab vel possimus architecto culpa sint eaque aliquam facilis error ad!"},

    
  ]
  return (
    <div className="homeTestimonial-mainContainer">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={showDots}
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
    {testimonials.map((x)=>(
          <div className="carousel-container" key={x.id}>
          <div className="homeTestimonial-mainContent">
            <div className="homeTestimonial-mainItem">
              <img
                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1734373802~exp=1734377402~hmac=cd7e1b34844dff34830768136442d7bf1ffc5f6cc02e0e042126e709c29105cd&w=740"
                alt=""
              />
              <span>
                <h4>{x.name}</h4>
                <Image src={stars} alt="stars" />
              </span>
            </div>
            <div className="homeTestimonial-mainItem">
              <p>
               {x.description}
              </p>
            </div>
          </div>
        </div>
    ))}
      </Carousel>
    </div>
  );
}
