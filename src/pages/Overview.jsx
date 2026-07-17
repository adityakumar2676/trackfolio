import StatCard from "../components/StatCard";
import ApplicationsTable from "../components/ApplicationTable";
import applications from "../data/applications";
import stats from "../data/stats";

function Overview() {
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
