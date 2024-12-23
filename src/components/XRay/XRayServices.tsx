export default function XrayService() {
  const serviceData = [
    {
      id: 1,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Dating-Scan.png",
      serviceName: "Chest X-Ray",
      serviceContent:
        "A chest X-Ray in Rajajinagar, Bangalore is one of the most common types of X-rays performed, helping to diagnose conditions such as pneumonia, tuberculosis, and lung cancer. It’s also used to evaluate the heart and blood vessels, making it a critical tool in assessing overall health.",
    },
    {
      id: 2,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/NT-Scan-New.png",
      serviceName: "Bone X-Ray",
      serviceContent:
        "If you’ve suffered a fracture or are experiencing bone pain, our X-Ray in Rajajinagar, Bangalore offers detailed imaging of bones, helping doctors assess the extent of the injury and plan appropriate treatment. Bone X-rays are also used to diagnose conditions such as arthritis and osteoporosis.",
    },
    {
      id: 3,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Anomaly-Scan.png",
      serviceName: "Abdominal X-Ray",
      serviceContent:
        "For those experiencing digestive issues, an abdominal X-Ray in Rajajinagar, Bangalore can help identify blockages, kidney stones, or other issues affecting the stomach, intestines, and other abdominal organs.",
    },
    {
      id: 4,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Echo.png ",
      serviceName: "Abdominal X-Ray",
      serviceContent:
        "Dental X-rays are essential for identifying cavities, tooth infections, and other oral health concerns. Our X-Ray in Rajajinagar, Bangalore services include specialized dental imaging to assist in comprehensive oral care.",
    },
    {
      id: 5,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Well-being.png",
      serviceName: "Joint X-Ray",
      serviceContent:
        "Whether you’re dealing with a sports injury or chronic joint pain, a joint X-Ray in Rajajinagar, Bangalore provides detailed images that help diagnose conditions such as dislocations, arthritis, and ligament damage.",
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
