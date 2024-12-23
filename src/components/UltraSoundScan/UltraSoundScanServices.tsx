export default function UltraSoundScanService() {
  const serviceData = [
    {
      id: 1,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Dating-Scan.png",
      serviceName: "Pregnancy Ultrasound",
      serviceContent:
        "Expecting mothers in  Bangalore can rely on our 3D and 4D Ultrasound Scans for routine pregnancy monitoring. These scans provide clear images of the baby, offering both emotional connection and vital insights into the pregnancy's progress.",
    },
    {
      id: 2,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/NT-Scan-New.png",
      serviceName: "Abdominal Ultrasound",
      serviceContent:
        "Our abdominal Ultrasound Scan in  Bangalore helps in diagnosing conditions affecting the liver, kidneys, gallbladder, pancreas, and other internal organs. It is a vital tool for detecting abnormalities like gallstones, kidney stones, liver disease, and more.",
    },
    {
      id: 3,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Anomaly-Scan.png",
      serviceName: "Pelvic Ultrasound",
      serviceContent:
        "For women, a pelvic ultrasound is often used to assess reproductive health and diagnose conditions such as ovarian cysts, fibroids, or other abnormalities. Our Ultrasound Scan in  Bangalore provides detailed images that help in identifying and managing these conditions effectively.",
    },
    {
      id: 4,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Echo.png",
      serviceName: "Thyroid Ultrasound",
      serviceContent:
        "Thyroid issues are common, and our Ultrasound Scan in  Bangalore offers a non-invasive way to examine the thyroid gland. This scan can help in diagnosing conditions like thyroid nodules, goiters, or thyroid cancer.",
    },
    {
      id: 5,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Well-being.png",
      serviceName: "Vascular Ultrasound",
      serviceContent:
        "Blood flow abnormalities can be detected using our vascular Ultrasound Scan in  Bangalore. This type of ultrasound is critical for diagnosing conditions such as deep vein thrombosis (DVT) or peripheral artery disease (PAD).",
    },
    {
      id: 6,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-3D4D.png",
      serviceName: "Breast Ultrasound",
      serviceContent:
        "For women who are undergoing breast cancer screenings or who have detected lumps, a breast ultrasound can provide important diagnostic insights. Our Ultrasound Scan in  Bangalore is part of our comprehensive women’s health services.",
    },
  ];
  return (
    <div className="serviceCard-container">
      {serviceData.map((x) => (
        <div className="serviceCard-content" key={x.id}>
          <div className="serviceCard-imgContainer">
            <img src={x.serviceImg} alt={x.serviceName} />
          </div>
          <div className="serviceCard-contentContainer">
            <h3>{x.serviceName}</h3>
            <p>{x.serviceContent}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
