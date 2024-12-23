export default function RadiologyServiceServices() {
  const serviceData = [
    {
      id: 1,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Dating-Scan.png",
      serviceName: "X-Ray Services",
      serviceContent:
        "Our advanced X-ray services in  Bangalore offer quick, painless imaging to diagnose fractures, infections, and more. Skilled radiologists ensure accurate interpretations for effective treatment planning.",
    },

    {
      id: 2,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/NT-Scan-New.png",
      serviceName: "Ultrasound Imaging",
      serviceContent:
        "At Global Health Diagnostics in  Bangalore, we offer advanced ultrasound imaging for pregnancy monitoring and assessing internal organs, providing clear and accurate results for optimal patient care.",
    },
    {
      id: 3,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Anomaly-Scan.png",
      serviceName: "Computed Tomography (CT) Scan",
      serviceContent:
        "Our high-resolution CT scans in  Bangalore provide detailed cross-sectional images to diagnose conditions like tumors, internal injuries, and neurological disorders, ensuring minimal radiation exposure with advanced imaging techniques.",
    },
    {
      id: 4,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Echo.png",
      serviceName: "Magnetic Resonance Imaging (MRI)",
      serviceContent:
        "At Global Health Diagnostics in  Bangalore, we offer advanced MRI imaging for detailed views of soft tissues, including the brain, spine, and joints. Our expert team ensures accurate results for effective diagnosis and treatment.",
    },
    {
      id: 5,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Well-being.png",
      serviceName: "FVascular Ultrasound",
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
    {
      id: 7,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-3D4D.png",
      serviceName: "Musculoskeletal Ultrasound",
      serviceContent:
        "This specialized ultrasound scan is used to diagnose injuries or conditions affecting the muscles, joints, ligaments, and tendons. Athletes and individuals with musculoskeletal pain can benefit from this Ultrasound Scan in  Bangalore.",
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
