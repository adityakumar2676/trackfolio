import StatCard from "../components/cards/StatCard";
import { getApplications } from "../services/applicationService";
import {
    BriefcaseBusiness,
    CalendarCheck,
    Trophy,
    CircleX,
} from "lucide-react";
import AnalyticsChart from "../components/dashboard/analytics/AnalyticsChart";
import StatusChart from "../components/dashboard/analytics/StatusChart";
import TopCompanies from "../components/dashboard/analytics/TopCompanies";

function Analytics() {
    const applications = getApplications();

    const stats = [
        {
            id: 1,
            title: "Applications",
            value: applications.length,
            icon: BriefcaseBusiness,
        },
        {
            id: 2,
            title: "Interviews",
            value: applications.filter((app) => app.status === "Interview")
                .length,
            icon: CalendarCheck,
        },
        {
            id: 3,
            title: "Offers",
            value: applications.filter((app) => app.status === "Offer").length,
            icon: Trophy,
        },
        {
            id: 4,
            title: "Rejected",
            value: applications.filter((app) => app.status === "Rejected")
                .length,
            icon: CircleX,
        },
    ];

    return (
        <>
            <main className="dashboard__content">
                <section className="overview">
                    <div className="overview__grid">
                        {stats.map((stat) => (
                            <StatCard key={stat.id} stat={stat} />
                        ))}
                    </div>

                    <div className="analytics__charts">
                        <AnalyticsChart applications={applications} />
                        <StatusChart applications={applications} />
                    </div>
                    <TopCompanies applications={applications} />
                </section>
            </main>
        </>
    );
}

export default Analytics;
