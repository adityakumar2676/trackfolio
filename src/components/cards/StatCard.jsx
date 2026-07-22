function StatCard({ stat }) {
    const { icon: Icon, title, value, change } = stat;

    return (
        <article className="card">
            <div className="card__icon-wrapper">
                <Icon className="card__icon" size={24} aria-hidden="true" />
            </div>

            <div className="card__content">
                <h3 className="card__title">{title}</h3>
                <span className="card__value">{value}</span>
                <span className="card__change">{change}</span>
            </div>
        </article>
    );
}

export default StatCard;
