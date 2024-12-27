import Image from "next/image";
import aboutImg from "./HomeAboutImg/Blood Test.png";
export default function HomeAboutImg() {
  return (
    <div className="homeAboutImg-container">
      <div className="homeAboutImg-content">
        <Image src={aboutImg} alt="aboutImg" />
      </div>
      <div className="homeAboutImg-content">
        <div className="homeAboutImg-item">
          <p>
            At Global Health Diagnostics, we deliver accurate, compassionate,
            and innovative diagnostic services. Led by our Managing Director, we
            prioritize excellence, advanced technology, and trust to make
            healthcare accessible for all.
          </p>
          <div className="homeAboutImg-innerItem">
            <img
              src="https://img.freepik.com/free-photo/user-profile-icon-front-side-with-white-background_187299-40010.jpg?t=st=1734263639~exp=1734267239~hmac=4bae318f3adadad33841fdf26eec03d7194cbfb0fff3dfb4afbd81598edea094&w=740"
              alt=""
            />
            <span>
              {" "}
              <h5>Sandeep S</h5>
              Managing Director
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
