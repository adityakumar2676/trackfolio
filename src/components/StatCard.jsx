function StatCard({ stat }) {
    const Icon = stat.icon;

    return (
        <article className="stat__card">
            <div className="stat__icon-wrapper">
                <Icon className="stat__icon" size={24} />
            </div>

            <div className="stat__content">
                <h3 className="stat__title">{stat.title}</h3>
                <span className="stat__value">{stat.value}</span>
                <span className="stat__change">{stat.change}</span>
            </div>
        </article>
    );
}

export default StatCard;
