function StepCard({ step }) {
    const { stepNumber, title, description } = step;

    return (
        <article className="card">
            <div className="card__icon-wrapper">{stepNumber}</div>

            <div className="card__content">
                <h3 className="card__title">{title}</h3>
                <p className="card__description">{description}</p>
            </div>
        </article>
    );
}

export default StepCard;
