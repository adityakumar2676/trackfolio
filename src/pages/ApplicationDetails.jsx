import React from "react";
import {
    MapPin,
    DollarSign,
    Link,
    Calendar,
    Trash2,
    Pencil,
} from "lucide-react";
import { useParams } from "react-router-dom";
import applications from "../data/applications";

function ApplicationDetails() {
    const { id } = useParams();

    const application = applications.find((app) => app.id === Number(id));

    return (
        <div className="applications__details">
            <div className="applications__details-container">
                <div className="applications__details-card">
                    <div className="applications__details-company">
                        <div className="applications__details-logo">S</div>
                        <div className="applications__details-meta">
                            <h2 className="applications__details-title">
                                {application.company}
                            </h2>
                            <p className="applications__details-subtitle">
                                {application.position}
                            </p>
                        </div>
                    </div>
                    <span className="applications__details-badge">
                        {application.status}
                    </span>
                </div>

                <div className="applications__details-card">
                    <h3 className="applications__details-section-title">
                        Details
                    </h3>

                    <div className="applications__details-grid">
                        <div className="applications__details-item">
                            <div className="applications__details-icon-wrapper">
                                <MapPin className="applications__details-icon" />
                            </div>
                            <div className="applications__details-item-content">
                                <span className="applications__details-label">
                                    LOCATION
                                </span>
                                <span className="applications__details-value">
                                    San Francisco, CA (Remote)
                                </span>
                            </div>
                        </div>

                        <div className="applications__details-item">
                            <div className="applications__details-icon-wrapper">
                                <DollarSign className="applications__details-icon" />
                            </div>
                            <div className="applications__details-item-content">
                                <span className="applications__details-label">
                                    SALARY
                                </span>
                                <span className="applications__details-value">
                                    $140,000 – $170,000
                                </span>
                            </div>
                        </div>

                        <div className="applications__details-item">
                            <div className="applications__details-icon-wrapper">
                                <Link className="applications__details-icon" />
                            </div>
                            <div className="applications__details-item-content">
                                <span className="applications__details-label">
                                    JOB LINK
                                </span>
                                <a
                                    href="https://stripe.com/careers/frontend-eng"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="applications__details-link"
                                >
                                    stripe.com/careers/frontend-eng
                                </a>
                            </div>
                        </div>

                        <div className="applications__details-item">
                            <div className="applications__details-icon-wrapper">
                                <Calendar className="applications__details-icon" />
                            </div>
                            <div className="applications__details-item-content">
                                <span className="applications__details-label">
                                    DATE APPLIED
                                </span>
                                <span className="applications__details-value">
                                    July 8, 2026
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="applications__details-card">
                    <h3 className="applications__details-section-title">
                        Notes
                    </h3>
                    <textarea
                        readOnly
                        rows={5}
                        className="applications__details-notes-input"
                        defaultValue={`Phone screen went well — spoke with Sarah from recruiting.
Technical interview scheduled for next Thursday.
Focus areas mentioned: React performance, state management.
Prepare examples from recent projects.`}
                    />
                </div>

                <div className="applications__details-actions">
                    <button
                        type="button"
                        className="applications__details-btn applications__details-btn--delete"
                    >
                        <Trash2 />
                        <span>Delete</span>
                    </button>

                    <button
                        type="button"
                        className="applications__details-btn applications__details-btn--edit"
                    >
                        <Pencil />
                        <span>Edit</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ApplicationDetails;
