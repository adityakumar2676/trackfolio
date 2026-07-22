import FeatureCard from "../cards/FeatureCard";
import features from "../../constants/features";

function Features() {
    return (
        <section className="section features" id="features">
            <div className="container features__container">
                <header className="section__header">
                    <span className="section__label">FEATURES</span>
                    <h3 className="section__title">
                        Everything you need to stay organized
                    </h3>
                    <p className="section__description">
                        A focused toolkit built around the way job seekers
                        actually works.
                    </p>
                </header>

                <div className="features__grid">
                    {features.map((feature) => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
