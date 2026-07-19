function FeatureCard({ feature }) {
    const { icon: Icon, title, description } = feature;

    return (
        <article className="features__card">
            <div className="features__card-icon">
                <Icon className="features__icon" size={24} />
            </div>

            <div className="feature__content">
                <h3 className="feature__title">{title}</h3>
                <p className="feature__description">{description}</p>
            </div>
        </article>
    );
}

export default FeatureCard;
