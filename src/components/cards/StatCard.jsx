function StatCard({ stat }) {
    const { icon: Icon, title, value, change } = stat;

    return (
        <article className="stat__card">
            <div className="stat__icon-wrapper">
                <Icon className="stat__icon" size={24} aria-hidden="true" />
            </div>

            <div className="stat__content">
                <h3 className="stat__title">{title}</h3>
                <span className="stat__value">{value}</span>
                <span className="stat__change">{change}</span>
            </div>
        </article>
    );
}

export default StatCard;
