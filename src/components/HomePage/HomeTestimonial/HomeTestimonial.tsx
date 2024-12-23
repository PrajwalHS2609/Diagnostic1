import "./HomeTestimonial.css";
import HomeTestimonialHead from "./HomeTestimonialHead";
import HomeTestimonialMain from "./HomeTestimonialMain";
export default function HomeTestimonial() {
  return (
    <div className="homeTestimonial-container">
      <div className="homeTestimonial-content">
        <div className="homeTestimonial-wrapper1">
            <HomeTestimonialHead/>
        </div>
        <div className="homeTestimonial-wrapper2">
          <HomeTestimonialMain/>
        </div>
      </div>
    </div>
  );
}
