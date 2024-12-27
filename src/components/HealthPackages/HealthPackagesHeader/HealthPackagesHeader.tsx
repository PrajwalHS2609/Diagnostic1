import "./HealthPackagesHeader.css"
import healthPackageHeaderImg from "./../../Images/healthPackageHeader.jpg"
import Image from "next/image"
export default function HealthPackagesHeader() {
    return (
        <div className="healthPackages-headerContainer">
            <Image src={healthPackageHeaderImg} alt="healthPackageHeaderImg" />
        </div>
    )
}