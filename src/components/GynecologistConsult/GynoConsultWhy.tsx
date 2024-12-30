import "./../Styles/WhyChoose.css";
import service from "./../Images/whyChoose/service.png";
import patientCentric from "./../Images/whyChoose/patient.png";
import stateOfArt from "./../Images/whyChoose/stateOfArt.png";
import expertise from "./../Images/whyChoose/expertise.png";
import Image from "next/image";

export default function GynoConsultWhy() {
  const whyData = [
    {
      id: 1,
      img: service,
      head: "Highly Qualified Specialists",
      para: "Our team includes some of the most experienced and skilled gynecologists in Bangalore, Malleshwaram, and Sadashivanagar.",
    },
    {
      id: 2,
      img: stateOfArt,
      head: "State-of-the-Art Facilities",
      para: "We utilize advanced diagnostic tools and technologies to provide accurate assessments and effective treatments.",
    },
    {
      id: 3,
      img: patientCentric,
      head: "Patient-Centric Care",
      para: "Your comfort and privacy are of utmost importance to us. We ensure that every consultation is thorough, respectful, and tailored to your unique needs.",
    },
    {
      id: 4,
      img: expertise,
      head: "Comprehensive Services",
      para: "From routine check-ups to complex treatments, we cover a wide range of gynecological needs.",
    },
  ];
  return (
    <div className="whyChoose-container">
      <div className="whyChoose-content">
        <h3>
          Why Choose the Best Diabetologist in Bangalore at Global Health
          Diagnostics?
        </h3>
        <p>
          At Global Health Diagnostics, we understand that diabetes management
          is more than just monitoring blood sugar levels. It involves a
          holistic approach that encompasses lifestyle modifications, dietary
          guidance, advanced diagnostic tools, and personalized treatment plans.
          Here's why our diabetologists stand out:
        </p>
      </div>
      <div className="whyChoose-content2">
        {whyData.map((x) => (
          <div className="whyChoose-card" key={x.id}>
            <div
              className="whyChoose-imgContainer"
              style={{
                boxShadow:
                  x.id % 2 === 0
                    ? "-2px 0px 10px rgba(0, 68, 255, 0.333)" // Blue shadow for even IDs
                    : "-2px 0px 10px  rgba(0, 255, 0, 0.333)", // Red shadow for odd IDs
              }}
            >
              <Image src={x.img} alt={x.head} />
            </div>
            <div
              className="whyChoose-imgArrow"
              style={{
                boxShadow:
                  x.id % 2 === 0
                    ? "10px -10px 10px rgba(0, 68, 255, 0.121)" // Blue shadow for even IDs
                    : "10px -10px 10px rgba(0, 255, 0, 0.121)", // Red shadow for odd IDs
              }}
            ></div>

            <div className="whyChoose-cardContent">
              <h5>{x.head}</h5>
              <p>{x.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
