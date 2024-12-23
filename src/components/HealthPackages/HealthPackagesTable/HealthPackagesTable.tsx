import "./HealthPackagesTable.css"
import { FaCheck } from "react-icons/fa6";

export default function HealthPackagesTable() {
    const packageData = [
        {
            id: 1,
            testName: "Complete Blood Count With ESR (haemoglobin,Total & Differential WBC Count ,Platelet,RBC",
            mrp: "350/-",
            basic: <FaCheck className="healthPackageIco" />,
            diabetic: <FaCheck className="healthPackageIco" />,
            seniorCitizen: <FaCheck className="healthPackageIco" />,
            master: <FaCheck className="healthPackageIco" />,
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />
        },
        {
            id: 2,
            testName: "Glucose Fasting",
            mrp: "50/-",
            basic: <FaCheck className="healthPackageIco" />,
            diabetic: <FaCheck className="healthPackageIco" />,
            seniorCitizen: <FaCheck className="healthPackageIco" />,
            master: <FaCheck className="healthPackageIco" />,
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />
        },
        {
            id: 3,
            testName: "Lipid Profile (Cholesterol-Total,Triglyceroids,HDL Cholesterol,LDL,Cholesterol,VLDL Cholesterol ,Ratio ",
            mrp: "600/-",
            basic: <FaCheck className="healthPackageIco" />,
            diabetic: <FaCheck className="healthPackageIco" />,
            seniorCitizen: <FaCheck className="healthPackageIco" />,
            master: <FaCheck className="healthPackageIco" />,
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />
        },
        {
            id: 4,
            testName: "Liver Funtion Test (Bilirubin Total & Direct,SGOT,SGPT,Gamma GT, Alkaline phosphates,Total Protine,Albumin",
            mrp: "750/-",
            basic: <FaCheck className="healthPackageIco" />,
            diabetic: <FaCheck className="healthPackageIco" />,
            seniorCitizen: <FaCheck className="healthPackageIco" />,
            master: <FaCheck className="healthPackageIco" />,
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />
        },
        {
            id: 5,
            testName: "Kidney Fuction Test(Urea,Creat,Uric Acid",
            mrp: "450/-",
            basic: <FaCheck className="healthPackageIco" />,
            diabetic: <FaCheck className="healthPackageIco" />,
            seniorCitizen: <FaCheck className="healthPackageIco" />,
            master: <FaCheck className="healthPackageIco" />,
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />
        },
        {
            id: 6,
            testName: "Thyroid Stimulating Hormone(TSH)",
            mrp: "250/-",
            basic: <FaCheck className="healthPackageIco" />,
            diabetic: "",
            seniorCitizen: "",
            master: "",
            women: "",
            executive: ""
        },
        {
            id: 7,
            testName: "Electrolytes (Na,K,Cl)",
            mrp: "450/-",
            basic: "",
            diabetic: "",
            seniorCitizen: <FaCheck className="healthPackageIco" />,
            master: <FaCheck className="healthPackageIco" />,
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />
        },
        {
            id: 8,
            testName: "Calcium",
            mrp: "200/-",
            basic: "",
            diabetic: "",
            seniorCitizen: <FaCheck className="healthPackageIco" />,
            master: <FaCheck className="healthPackageIco" />,
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />
        },
        {
            id: 9,
            testName: "Phosphorus",
            mrp: "150/-",
            basic: "",
            diabetic: "",
            seniorCitizen: <FaCheck className="healthPackageIco" />,
            master: <FaCheck className="healthPackageIco" />,
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />
        },
        {
            id: 10,
            testName: "Thyroid Function Tests (TFT)(T3,T4,TSH)",
            mrp: "450/-",
            basic: "",
            diabetic: "",
            seniorCitizen: <FaCheck className="healthPackageIco" />,
            master: <FaCheck className="healthPackageIco" />,
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />
        },
        {
            id: 11,
            testName: "Glycosylated haemoglobin (HbA1C)",
            mrp: "600/-",
            basic: "",
            diabetic: <FaCheck className="healthPackageIco" />,
            seniorCitizen: <FaCheck className="healthPackageIco" />,
            master: <FaCheck className="healthPackageIco" />,
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />
        },
        {
            id: 12,
            testName: "Urine analysis",
            mrp: "150/-",
            basic: "",
            diabetic: <FaCheck className="healthPackageIco" />,
            seniorCitizen: <FaCheck className="healthPackageIco" />,
            master: <FaCheck className="healthPackageIco" />,
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />
        },
        {
            id: 13,
            testName: "Urine Microalbumin creatinine ratio",
            mrp: "600/-",
            basic: "",
            diabetic: <FaCheck className="healthPackageIco" />,
            seniorCitizen: <FaCheck className="healthPackageIco" />,
            master: <FaCheck className="healthPackageIco" />,
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />
        },
        {
            id: 14,
            testName: "Iron Profile(Iron, TIBC,Transferrin ,saturation %",
            mrp: "700/-",
            basic: "",
            diabetic: "",
            seniorCitizen: "",
            master: <FaCheck className="healthPackageIco" />,
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />,
        },
        {
            id: 15,
            testName: "Ferritin",
            mrp: "800/-",
            basic: "",
            diabetic: "",
            seniorCitizen: "",
            master: "",
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />,
        },
        {
            id: 16,
            testName: "Vitamin B12",
            mrp: "800/-",
            basic: "",
            diabetic: "",
            seniorCitizen: "",
            master: <FaCheck className="healthPackageIco" />,
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />,
        },
        {
            id: 17,
            testName: "Vitamin D (25 OH)",
            mrp: "1500/-",
            basic: "",
            diabetic: "",
            seniorCitizen: "",
            master: <FaCheck className="healthPackageIco" />,
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />,
        },
        {
            id: 18,
            testName: "CA-125 (Female) /PSA-Total (Male)",
            mrp: "1000/-",
            basic: "",
            diabetic: "",
            seniorCitizen: <FaCheck className="healthPackageIco" />,
            master: "",
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />,
        },
        {
            id: 19,
            testName: "ECG",
            mrp: "300/-",
            basic: "",
            diabetic: "",
            seniorCitizen: <FaCheck className="healthPackageIco" />,
            master: <FaCheck className="healthPackageIco" />,
            women: <FaCheck className="healthPackageIco" />,
            executive: <FaCheck className="healthPackageIco" />,
        },
        {
            id: 20,
            testName: "Ultra Sound Abdomen and Pelvic",
            mrp: "1200/-",
            basic: "",
            diabetic: "",
            seniorCitizen: "",
            master: "",
            women: "",
            executive: <FaCheck className="healthPackageIco" />,
        },

    ]
    return (
        <div className="healthPackages-tableContainer">
            <table>
                <thead>
                    <tr>
                        <th><b>SL.No</b></th>
                        <th><b>Test Name</b></th>
                        <th><b>MRP</b></th>
                        <th><b>BASIC </b> <br />Health Checkup</th>
                        <th><b>DIABETIC</b><br /> Health Checkup </th>
                        <th><b>SENIOR CITIZEN</b> <br /> Health Checkup</th>
                        <th><b>MASTER</b> <br /> Health Checkup</th>
                        <th><b>WELL WOMEN</b> <br /> Health Checkup</th>
                        <th><b>EXECUTIVE</b> <br /> Health Checkup</th>
                    </tr>
                </thead>
                <tbody>
                    {packageData.map((x) => (
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.testName}</td>
                            <td>{x.mrp}</td>
                            <td>{x.basic}</td>
                            <td>{x.diabetic}</td>
                            <td>{x.seniorCitizen}</td>
                            <td>{x.master}</td>
                            <td>{x.women}</td>
                            <td>{x.executive}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="healthPackage-content">
                <div className="healthPackage-item"><h5>Lab Timings:</h5> <h5>Weekday 7:00 am to 8:30 pm,</h5>
                    <h5>Sundays and Holidays 7:00 am to 1:30 pm</h5></div>
                <div className="healthPackage-item">
                    <table className="healthPackage-itemTable">
                        <tbody>
                            <tr><th>Package Price</th>
                                <td></td>
                                <td>1000/-</td>
                                <td>1500/-</td>
                                <td>2500/-</td>
                                <td>3000/-</td>
                                <td>3500/-</td>
                                <td>4000/- (4500/-)</td>
                            </tr>
                            <tr>
                                <th>Normal Price</th>
                                <td>11350</td>
                                <td><span>2450/-</span></td>
                                <td><span>3500/-</span></td>
                                <td><span>6100/-</span></td>
                                <td><span>8100/-</span></td>
                                <td><span>9300/-</span></td>
                                <td><span>9900/- (11100/-)</span></td>
                            </tr>
                            <tr>
                                <th>Total Discount</th>
                                <td></td>
                                <td>60%</td>
                                <td>57%</td>
                                <td>59%</td>
                                <td>59%</td>
                                <td>57%</td>
                                <td>60%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}