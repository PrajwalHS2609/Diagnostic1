export default function EchoTestServices() {
  const serviceData = [
    {
      id: 1,
      serviceImg: "https://first-c9d21.web.app/assets/ECG-BRcESnK4.png",
      serviceName: "Transthoracic Echocardiogram (TTE)",
      serviceContent:
        "This is the most common type of ECHO Test in Bangalore. During the procedure, a transducer is placed on the chest, and ultrasound waves are used to create images of the heart. It is a painless and quick test that provides essential information about heart function, valve movement, and overall structure.",
    },
    {
      id: 2,
      serviceImg: "https://first-c9d21.web.app/assets/Echo-CZ41SA3E.png",
      serviceName: "Transesophageal Echocardiogram (TEE)",
      serviceContent:
        "In cases where more detailed images are required, a Transesophageal ECHO Test in Bangalore may be performed. This involves passing a specialized probe down the esophagus to get closer to the heart, providing clearer and more precise images, especially of the heart’s back structures.",
    },
    {
      id: 3,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Anomaly-Scan.png",
      serviceName: "Stress Echocardiogram",
      serviceContent:
        "A Stress ECHO Test in Bangalore is performed to assess how well the heart functions under physical stress. The test is conducted both at rest and after exercise, allowing doctors to evaluate how the heart responds to increased demand.",
    },
    {
      id: 4,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Echo.png",
      serviceName: "Doppler Echocardiogram:",
      serviceContent:
        "A Doppler ECHO Test in Bangalore focuses on evaluating blood flow through the heart and major blood vessels. It helps in detecting issues such as blood clots, poor blood flow, and valve leaks, which can contribute to heart disease.",
    },
    {
      id: 5,
      serviceImg:
        "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Well-being.png",
      serviceName: "Fetal Echocardiogram",
      serviceContent:
        "For pregnant women, a Fetal ECHO Test in Bangalore is performed to check the heart of the unborn baby. This test helps detect congenital heart defects and ensures that the baby’s heart is developing properly.",
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
