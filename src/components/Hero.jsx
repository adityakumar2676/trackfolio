import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero__container">
                <div className="hero__content">
                    <span className="hero__badge">
                        <span className="hero__badge-dot"></span>
                        JOB SEARCH, ORGANIZED
                    </span>

                    <h1 className="hero__title">
                        Track every application.
                        <span> Stay in control.</span>
                    </h1>

                    <p className="hero__description">
                        Organize your job applications, track progress, and
                        manage your entire job search from one place.
                    </p>

                    <div className="hero__actions">
                        <Link to="/login" className="btn btn--primary">
                            Get Started
                        </Link>

                        <a href="#features" className="btn btn--secondary">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
