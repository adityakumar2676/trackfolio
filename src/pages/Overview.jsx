import stats from "../data/stats";
import applications from "../data/applications";
import StatCard from "../components/StatCard";
import ApplicationsTable from "../components/ApplicationTable";

function Overview() {
    return (
        <section className="overview">
            <div className="stat__card-wrapper">
                {stats.map((stat) => (
                    <StatCard key={stat.id} stat={stat} />
                ))}
            </div>

            <div className="applications__table-wrapper">
                <ApplicationsTable applications={applications} />
            </div>
        </section>
    );
}

export default Overview;
