import "./../Styles/Styles.css";
export default function PathologyService() {
  const serviceData = [
    {
      id: 1,
      serviceImg: "https://first-c9d21.web.app/assets/Hematology-CXT-8dRB.png",
      serviceName: "Hematology",
      serviceContent:
        "Hematology is the branch of medicine that focuses on the study, diagnosis, and treatment of blood-related disorders. Our expert team ensures precise hematology services for comprehensive healthcare.",
    },
    {
      id: 2,
      serviceImg:
        "https://first-c9d21.web.app/assets/Biochemistry-D8gE6T3D.png",
      serviceName: "Biochemistry",
      serviceContent:
        "Biochemistry is the scientific study of chemical processes within and related to living organisms. Our advanced biochemistry services provide accurate insights for optimal health assessment and care.",
    },
    {
      id: 3,
      serviceImg:
        "https://first-c9d21.web.app/assets/Hormonal%20Test-DUcwUY6o.png",
      serviceName: "Hormonal Test",
      serviceContent:
        "Hormonal tests at Global Health Diagnostics help assess and balance crucial hormones, providing valuable insights for personalized healthcare and maintaining overall well-being.",
    },
    {
      id: 4,
      serviceImg:
        "https://first-c9d21.web.app/assets/Tumor%20Markers%20Test-B42h5fGC.png",
      serviceName: "Tumor Markers Test",
      serviceContent:
        "Tumor marker tests at Global Health Diagnostics aid in the early detection and monitoring of cancer, enabling proactive healthcare and personalized treatment strategies for optimal outcomes.",
    },
    {
      id: 5,
      serviceImg:
        "https://first-c9d21.web.app/assets/Microbiology-Ccev8DPM.png",
      serviceName: "Micorbiology",
      serviceContent:
        "Microbiology at Global Health Diagnostics employs advanced techniques to identify and analyze microorganisms, facilitating accurate diagnoses and tailored treatment plans for infectious diseases.",
    },
    {
      id: 6,
      serviceImg: "https://first-c9d21.web.app/assets/Serology-BuuqjARL.png",
      serviceName: "Serology",
      serviceContent:
        "Serology at Global Health Diagnostics investigates blood serum for antibodies, aiding in the diagnosis of various infections and autoimmune disorders with precision and comprehensive understanding.",
    },
    {
      id: 7,
      serviceImg:
        "https://first-c9d21.web.app/assets/Clinical%20Pathology-aTlqU5Sn.png",
      serviceName: "Book Blood Tests at Home",
      serviceContent:
        "Experience convenience with Global Health Diagnostics – Blood Tests at Home. Book now for accurate and hassle-free healthcare services in the comfort of your space.",
    },
    {
      id: 8,
      serviceImg:
        "https://first-c9d21.web.app/assets/Blood%20Tests%20at%20Home-CerjyAeO.png",
      serviceName: "Clinical Pathology",
      serviceContent:
        "Clinical Pathology at Global Health Diagnostics focuses on analyzing bodily fluids and tissues, providing crucial insights for accurate disease diagnosis and optimal patient care.",
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
