import stepsData from "../../constants/stepsData";
import StepCard from "../cards/StepCard";
import StepConnector from "../cards/StepConnector";
import { Fragment } from "react";

function HowItWorks() {
    return (
        <section className="section how-it-works" id="how-it-works">
            <div className="container how-it-works__container">
                <header className="section__header">
                    <span className="section__label">HOW IT WORKS</span>
                    <h3 className="section__title">
                        Get started in three simple steps
                    </h3>
                    <p className="section__description">
                        From sign-up to offer, TrackFolio keeps your search on
                        track.
                    </p>
                </header>

                <div className="how-it-works__grid">
                    {stepsData.map((step, index) => (
                        <Fragment key={step.id}>
                            <StepCard step={step} />

                            {index !== stepsData.length - 1 && (
                                <StepConnector />
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
