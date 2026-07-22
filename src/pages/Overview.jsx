import StatCard from "../components/cards/StatCard";
import ApplicationsTable from "../components/dashboard/ApplicationTable";
import { getApplications } from "../services/applicationService";
import {
    BriefcaseBusiness,
    CalendarCheck,
    Trophy,
    CircleX,
} from "lucide-react";

function Overview() {
    const applications = getApplications();

    const stats = [
        {
            id: 1,
            title: "Applications",
            value: applications.length,
            change: "",
            icon: BriefcaseBusiness,
        },
        {
            id: 2,
            title: "Interviews",
            value: applications.filter((app) => app.status === "Interview")
                .length,
            change: "",
            icon: CalendarCheck,
        },
        {
            id: 3,
            title: "Offers",
            value: applications.filter((app) => app.status === "Offer").length,
            change: "",
            icon: Trophy,
        },
        {
            id: 4,
            title: "Rejected",
            value: applications.filter((app) => app.status === "Rejected")
                .length,
            change: "",
            icon: CircleX,
        },
    ];

    return (
        <section className="overview">
            <div className="stat__card-wrapper">
                {stats.map((stat) => (
                    <StatCard key={stat.id} stat={stat} />
                ))}
            </div>

            <ApplicationsTable applications={applications} />
        </section>
    );
}

export default Overview;
