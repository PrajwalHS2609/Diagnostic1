import './../Styles/Styles.css'

export default function CardiologyTestServices() {
  const serviceData = [
    {
      id: 1,
      serviceImg: "https://first-c9d21.web.app/assets/ECG-BRcESnK4.png",
      serviceName: "ECG",
      serviceContent:
        "An electrocardiogram, commonly referred to as an ECG, is one of the most fundamental cardiology tests in  Bangalore. This test records the electrical activity of your heart and helps identify any irregularities in your heartbeat, rhythm, or overall heart function. An ECG can detect conditions like arrhythmias, heart attacks, and other heart-related issues.",
    },
    {
      id: 2,
      serviceImg: "https://first-c9d21.web.app/assets/Echo-CZ41SA3E.png",
      serviceName: "Echocardiogram",
      serviceContent:
        "An echocardiogram is a key diagnostic tool that uses ultrasound waves to create a detailed image of the heart. This cardiology test in  Bangalore allows your doctor to visualize the structure and function of your heart, assess the strength of heart muscle contractions, and identify conditions such as valve disorders, cardiomyopathy, and heart failure.",
    },
    {
      id: 3,
      serviceImg:
        "https://first-c9d21.web.app/assets/Stress%20Test-C7Ur_itU.png",
      serviceName: "Stress Test",
      serviceContent:
        "Also known as an exercise stress test, this cardiology test in  Bangalore evaluates how your heart functions during physical activity. It helps determine whether your heart is receiving enough blood and oxygen when it’s working harder than normal. Stress tests are commonly used to detect coronary artery disease and assess your heart’s overall fitness level.",
    },
    {
      id: 4,
      serviceImg:
        "https://first-c9d21.web.app/assets/Holter%20Monitoring-IDqrMDof.png",
      serviceName: "Holter Monitoring",
      serviceContent:
        "Holter monitoring is a cardiology test in  Bangalore, where a small portable device records heart activity for 24 to 48 hours. It helps detect irregular heartbeats, arrhythmias, and other issues not visible during a standard ECG.",
    },
    {
      id: 5,
      serviceImg: "https://first-c9d21.web.app/assets/CT%20Scan-CTlpeheU.png",
      serviceName: "CT Scan",
      serviceContent:
        "A cardiac CT scan is a non-invasive cardiology test in  Bangalore that uses advanced imaging technology to create detailed 3D images of your heart and its blood vessels. This test is highly effective in detecting coronary artery disease, identifying blockages, and assessing the risk of a heart attack.",
    },
    {
      id: 6,
      serviceImg: "https://first-c9d21.web.app/assets/MRI%20Scan-S5gx-SGg.png",
      serviceName: "MRI Scan",
      serviceContent:
        "A cardiac MRI is another sophisticated imaging test used to assess the structure and function of your heart. This cardiology test in  Bangalore provides detailed images of the heart’s tissues, allowing your doctor to diagnose conditions such as heart disease, inflammation, and congenital heart defects.",
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
