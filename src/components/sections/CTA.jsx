import { Link } from "react-router-dom";

function CTA() {
    return (
        <section className="section cta" id="cta">
            <div className="container cta__container">
                <div className="cta__content">
                    <h1 className="cta__title">
                        Start tracking your job search today
                    </h1>
                    <p className="cta__description">
                        Join job seekers who stay organized and never miss a
                        follow up.
                    </p>
                    <div className="cta__actions">
                        <Link to="/register" className="btn btn--primary">
                            Create Free Account
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;
