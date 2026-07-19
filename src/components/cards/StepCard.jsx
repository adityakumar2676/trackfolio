function StepCard({ step }) {
    const { stepNumber, title, description } = step;

    return (
        <article className="steps__card">
            <div className="steps__card-circle">{stepNumber}</div>

            <div className="steps__content">
                <h3 className="steps__title">{title}</h3>
                <p className="steps__description">{description}</p>
            </div>
        </article>
    );
}

export default StepCard;
