import Image from "next/image";
import checkup from "./../Images/comprehensiveService/checkup.png";
import fertilization from "./../Images/comprehensiveService/fertilization.png";
import health from "./../Images/comprehensiveService/health.png";
import pregnancy from "./../Images/comprehensiveService/pregnancy.png";
import menopause from "./../Images/comprehensiveService/menopause.png";
import service from "./../Images/comprehensiveService/service.png";

export default function GynoConsultContent() {
  return (
    <div className="serviceContent-container">
      <h1>Gynecologist Consultation in Bangalore</h1>
      <p>
        When it comes to women’s health, having access to specialized care is
        essential. For those seeking reliable and compassionate gynecological
        services, Global Health Diagnostics is a trusted name offering expert
        consultation and care. Whether you’re searching for gynecologist
        consultation in Bangalore, gynecologist doctor in Malleshwaram, or the
        best gynecologist in Sadashivanagar, we are here to meet your healthcare
        needs with excellence and empathy.
      </p>
      <br />
   <div className="serviceItem-wrapper">  
     <h3>Routine Check-Ups and Preventive Care</h3>
      <div className="serviceItem-container">
        <div className="serviceItem-content" id="serviceItem-content1">
          <Image src={checkup} alt="checkup" />
          Annual check-ups
        </div>
        <div className="serviceItem-content" id="serviceItem-content2">
          <Image src={checkup} alt="checkup" />
          Breast exams
        </div>
        <div className="serviceItem-content" id="serviceItem-content1">
          <Image src={checkup} alt="checkup" />
          Pelvic exams
        </div>
        <div className="serviceItem-content" id="serviceItem-content2">
          <Image src={checkup} alt="checkup" />
          Vaccinations, including HPV Tests
        </div>
      </div>
      <br />
      <h3>Fertility and Reproductive Health</h3>
      <div className="serviceItem-container">
        <div className="serviceItem-content" id="serviceItem-content1">
          <Image src={fertilization} alt="fertilization" /> Ovulation tracking
          and fertility testing
        </div>
        <div className="serviceItem-content" id="serviceItem-content2">
          <Image src={fertilization} alt="fertilization" /> Treatment for
          infertility
        </div>
        <div className="serviceItem-content" id="serviceItem-content1">
          <Image src={fertilization} alt="fertilization" /> Assisted
          reproductive technologies (ART)
        </div>
      </div>
      <br />
      <h3> Menstrual and Hormonal Health</h3>
      <div className="serviceItem-container">
        <div className="serviceItem-content" id="serviceItem-content1">
          <Image src={health} alt="health" /> Polycystic Ovary Syndrome (PCOS)
        </div>
        <div className="serviceItem-content" id="serviceItem-content2">
          <Image src={health} alt="health" /> Endometriosis
        </div>
        <div className="serviceItem-content" id="serviceItem-content1">
          <Image src={health} alt="health" /> Fibroids
        </div>
        <div className="serviceItem-content" id="serviceItem-content1">
          <Image src={health} alt="health" /> Premenstrual Syndrome (PMS)
        </div>
      </div>
      <br />
      <h3> Pregnancy and Prenatal Care</h3>
      <div className="serviceItem-container">
        <div className="serviceItem-content" id="serviceItem-content1">
          <Image src={pregnancy} alt="pregnancy" /> Regular prenatal check-ups
        </div>
        <div className="serviceItem-content" id="serviceItem-content2">
          <Image src={pregnancy} alt="pregnancy" /> Ultrasound and fetal
          monitoring
        </div>
        <div className="serviceItem-content" id="serviceItem-content1">
          <Image src={pregnancy} alt="pregnancy" /> Nutritional counseling
        </div>
        <div className="serviceItem-content" id="serviceItem-content1">
          <Image src={pregnancy} alt="pregnancy" /> Postnatal care Syndrome
          (PMS)
        </div>
      </div>
      <br />
      <h3> Management of Menopause</h3>
      <div className="serviceItem-container">
        <div className="serviceItem-content" id="serviceItem-content1">
          <Image src={menopause} alt="menopause" /> Hormone replacement therapy
          (HRT)
        </div>
        <div className="serviceItem-content" id="serviceItem-content2">
          <Image src={menopause} alt="menopause" /> Counseling on lifestyle
          changes
        </div>
        <div className="serviceItem-content" id="serviceItem-content1">
          <Image src={menopause} alt="menopause" /> Management of symptoms such
          as hot flashes and bone health
        </div>
      </div>
      <br />
      <h3> Advanced Diagnostic and Surgical Services</h3>
      <div className="serviceItem-container">
        <div className="serviceItem-content" id="serviceItem-content1">
          <Image src={service} alt="service" /> Laparoscopic surgeries
        </div>
        <div className="serviceItem-content" id="serviceItem-content2">
          <Image src={service} alt="service" /> Hysteroscopy
        </div>
        <div className="serviceItem-content" id="serviceItem-content1">
          <Image src={service} alt="service" /> Biopsies
        </div>
        <div className="serviceItem-content" id="serviceItem-content1">
          <Image src={service} alt="service" /> Ultrasound imaging
        </div>
      </div></div>
    </div>
  );
}
