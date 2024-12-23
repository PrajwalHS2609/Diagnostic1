import HealthPackagesHeader from "@/components/HealthPackages/HealthPackagesHeader/HealthPackagesHeader";
import HealthPackagesMain from "@/components/HealthPackages/HealthPackagesMain/HealthPackagesMain";
import HealthPackagesTable from "@/components/HealthPackages/HealthPackagesTable/HealthPackagesTable";

export default function HealthPackages() {
    return (
        <div className="main-container">
            <HealthPackagesHeader />
            <HealthPackagesMain/>
            <HealthPackagesTable/>
        </div>
    )
}