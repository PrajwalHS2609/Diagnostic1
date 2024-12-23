import "./../Styles/Styles.css";

export default function DopplerScanServices() {
  const serviceData = [
    {
      id: 1,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Dating-Scan.png",
      serviceName: "Color Doppler Scan",
      serviceContent:
        "Pathacon Diagnostics in Rajajinagar, Bangalore offers advanced Color Doppler scans, using the latest technology to visualize blood flow in the heart, brain, and other vital organs for accurate results.",
    },
    {
      id: 2,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/NT-Scan-New.png",
      serviceName: "Power Doppler Scan",
      serviceContent:
        "The Power Doppler scan in Rajajinagar, Bangalore is a more sensitive type of scan that provides detailed images of blood flow in vessels that may be difficult to detect using other techniques. It is especially useful for evaluating blood flow in smaller or deeper vessels.",
    },
    {
      id: 3,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Anomaly-Scan.png",
      serviceName: "Duplex Doppler Scan",
      serviceContent:
        "This type of Doppler scan in Rajajinagar, Bangalore combines traditional ultrasound imaging with Doppler technology, allowing for a more comprehensive view of the blood flow and structure of the vessels. It is often used to assess the health of veins and arteries in the arms, legs, and neck.",
    },
    {
      id: 4,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Well-being.png",
      serviceName: "Continuous Wave Doppler Scan",
      serviceContent:
        "A Continuous Wave Doppler scan in Rajajinagar, Bangalore is typically used to measure very fast blood flow, particularly in the case of cardiac issues. It can help identify conditions like valve defects and heart murmurs.",
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
