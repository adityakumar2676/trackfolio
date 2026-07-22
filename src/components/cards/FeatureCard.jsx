function FeatureCard({ feature }) {
    const { icon: Icon, title, description } = feature;

    return (
        <article className="card">
            <div className="card__icon-wrapper">
                <Icon className="card__icon" size={24} />
            </div>

            <div className="card__content">
                <h3 className="card__title">{title}</h3>
                <p className="card__description">{description}</p>
            </div>
        </article>
    );
}

export default FeatureCard;
