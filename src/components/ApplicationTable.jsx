function ApplicationsTable({ applications }) {
    return (
        <div className="applications__table-wrapper">
            <table className="applications__table">
                <thead className="applications__table-head">
                    <tr>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Location</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Applied Date</th>
                    </tr>
                </thead>

                <tbody className="applications__table-body">
                    {applications.map((application) => {
                        const statusClass =
                            application.status?.toLowerCase() || "pending";

                        return (
                            <tr key={application.id}>
                                <td>{application.company}</td>
                                <td>{application.position}</td>
                                <td>{application.location}</td>
                                <td>{application.type}</td>
                                <td>
                                    <span
                                        className={`status-badge status-badge--${statusClass}`}
                                    >
                                        {application.status}
                                    </span>
                                </td>
                                <td>{application.appliedDate}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ApplicationsTable;
