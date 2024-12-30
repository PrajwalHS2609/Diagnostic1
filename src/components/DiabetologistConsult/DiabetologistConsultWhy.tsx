import "./../Styles/WhyChoose.css";
import service from "./../Images/whyChoose/service.png";
import patientCentric from "./../Images/whyChoose/patient.png";
import stateOfArt from "./../Images/whyChoose/stateOfArt.png";
import expertise from "./../Images/whyChoose/expertise.png";
import Image from "next/image";

export default function DiabetologistConsultWhy() {
  const whyData = [
    {
      id: 1,
      img: service,
      head: "Extensive Expertise",
      para: "With years of experience and a deep understanding of diabetes, our specialists are among the best diabetologists in Bangalore.",
    },
    {
      id: 2,
      img: stateOfArt,
      head: "State-of-the-Art Facilities",
      para: "We utilize advanced diagnostic tools to ensure accurate assessments and effective treatment strategies.",
    },
    {
      id: 3,
      img: patientCentric,
      head: "Patient-Centric Care",
      para: "Our approach prioritizes your comfort and convenience, ensuring that you receive personalized attention and guidance.",
    },
    {
      id: 4,
      img: expertise,
      head: "Comprehensive Services",
      para: "From routine check-ups to advanced treatments, we provide a wide range of services to address all aspects of diabetes care.",
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
