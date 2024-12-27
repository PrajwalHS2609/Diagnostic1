import Image from "next/image";
import "./HomeTestimonial.css";
import logo from "./TestimonialImgs/logo.png";
export default function HomeTestimonialHead() {
  return (
    <div className="homeTestimonial-headContainer">
      <span>
        {" "}
        <h2>Client Testimonial:</h2>
        <h4>Real Experience, Real Satisfaction</h4>
      </span>
      <Image src={logo} alt="logo" />
    </div>
  );
}
