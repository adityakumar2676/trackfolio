import React from "react";
import stepsData from "../../data/stepsData";
import StepCard from "../cards/StepCard";
import StepConnector from "../cards/StepConnector";

function HowItWorks() {
    return (
        <section className="how-it-works" id="how-it-works">
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

            <div className="steps__grid">
                {stepsData.map((step, index) => (
                    <React.Fragment key={step.id}>
                        <StepCard step={step} />

                        {index !== stepsData.length - 1 && <StepConnector />}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

export default HowItWorks;
