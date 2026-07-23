import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

function AnalyticsChart({ applications }) {
    const monthCounts = {};

    applications.forEach((application) => {
        if (!application.appliedDate) return;

        const month = new Date(application.appliedDate).toLocaleString(
            "default",
            {
                month: "short",
            },
        );

        monthCounts[month] = (monthCounts[month] || 0) + 1;
    });

    const monthlyApplications = Object.entries(monthCounts).map(
        ([month, applications]) => ({
            month,
            applications,
        }),
    );

    return (
        <section className="analytics-chart card">
            <h2 className="analytics-chart__title">Applications Over Time</h2>

            <div className="analytics-chart__content">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyApplications}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="applications"
                            stroke="#4f46e5"
                            strokeWidth={3}
                            dot={{
                                r: 5,
                                fill: "#ffffff",
                                stroke: "#4f46e5",
                                strokeWidth: 3,
                            }}
                            activeDot={{ r: 7 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}

export default AnalyticsChart;
