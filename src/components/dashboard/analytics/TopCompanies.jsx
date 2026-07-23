function TopCompanies({ applications }) {
    const companyCounts = {};

    applications.forEach((application) => {
        companyCounts[application.company] =
            (companyCounts[application.company] || 0) + 1;
    });

    const companyData = Object.entries(companyCounts).map(
        ([company, count]) => ({
            company,
            count,
        }),
    );

    const maxCount = Math.max(
        ...companyData.map((company) => company.count),
        1,
    );

    companyData.sort((a, b) => b.count - a.count);

    return (
        <section className="top-companies card">
            <h2 className="top-companies__title">Top Companies</h2>

            <div className="top-companies__list">
                {companyData.map((company) => (
                    <div key={company.company} className="company">
                        <div className="company__header">
                            <span>{company.company}</span>
                            <span>{company.count}</span>
                        </div>

                        <div className="company__bar">
                            <div
                                className="company__fill"
                                style={{
                                    width: `${
                                        (company.count / maxCount) * 100
                                    }%`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TopCompanies;
