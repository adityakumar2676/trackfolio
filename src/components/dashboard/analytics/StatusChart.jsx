import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Label,
    Legend,
} from "recharts";

function StatusChart({ applications }) {
    const statusData = [
        {
            name: "Applied",
            value: applications.filter((app) => app.status === "Applied")
                .length,
            color: "#f59e0b",
        },
        {
            name: "Interview",
            value: applications.filter((app) => app.status === "Interview")
                .length,
            color: "#2563eb",
        },
        {
            name: "Offer",
            value: applications.filter((app) => app.status === "Offer").length,
            color: "#22c55e",
        },
        {
            name: "Rejected",
            value: applications.filter((app) => app.status === "Rejected")
                .length,
            color: "#ef4444",
        },
    ];

    const total = statusData.reduce((sum, item) => sum + item.value, 0);

    return (
        <section className="status-chart card">
            <h2 className="status-chart__title">Status Breakdown</h2>

            <div className="status-chart__content">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={statusData}
                            dataKey="value"
                            innerRadius={70}
                            outerRadius={100}
                            cornerRadius={8}
                            paddingAngle={2}
                        >
                            {statusData.map((entry) => (
                                <Cell key={entry.name} fill={entry.color} />
                            ))}

                            <Label
                                content={({ viewBox }) => {
                                    const { cx, cy } = viewBox;

                                    return (
                                        <text
                                            x={cx}
                                            y={cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                x={cx}
                                                dy="-0.4em"
                                                className="status-chart__total"
                                            >
                                                {total}
                                            </tspan>

                                            <tspan
                                                x={cx}
                                                dy="1.4em"
                                                className="status-chart__label"
                                            >
                                                Total
                                            </tspan>
                                        </text>
                                    );
                                }}
                            />
                        </Pie>

                        <Legend
                            verticalAlign="bottom"
                            align="center"
                            iconType="circle"
                            formatter={(value, entry) =>
                                `${value} ${entry.payload.value}`
                            }
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}

export default StatusChart;
