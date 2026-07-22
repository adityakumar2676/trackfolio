import React, { useState } from "react";
import {
    MapPin,
    DollarSign,
    Link,
    Calendar,
    Trash2,
    Pencil,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import {
    getApplications,
    updateApplication,
    deleteApplication,
} from "../services/applicationService";
import ApplicationModal from "../components/dashboard/ApplicationModal";
import ApplicationForm from "../components/dashboard/ApplicationForm";

function ApplicationDetails() {
    const { id } = useParams();

    const [application, setApplication] = useState(() =>
        getApplications().find((app) => app.id === id),
    );

    const navigate = useNavigate();

    if (!application) {
        return <p>Application not found.</p>;
    }

    const [isEditing, setIsEditing] = useState(false);

    function handleUpdateApplication(updatedData) {
        const updatedApplication = updateApplication(
            application.id,
            updatedData,
        );

        setApplication(updatedApplication);

        setIsEditing(false);
    }

    function handleDelete() {
        const confirmed = window.confirm(
            "Are you sure you want to delete this application?",
        );

        if (!confirmed) return;

        deleteApplication(application.id);

        navigate("/dashboard/applications");
    }

    return (
        <div className="application-details">
            <div className="application-details__container">
                <div className="application-details__card">
                    <div className="application-details__company">
                        <div className="application-details__logo">
                            {application.company.charAt(0).toUpperCase()}
                        </div>

                        <div className="application-details__meta">
                            <h2 className="application-details__title">
                                {application.company}
                            </h2>

                            <p className="application-details__subtitle">
                                {application.position}
                            </p>
                        </div>
                    </div>

                    <span className="application-details__badge">
                        {application.status}
                    </span>
                </div>

                <div className="application-details__card">
                    <h3 className="application-details__section-title">
                        Details
                    </h3>

                    <div className="application-details__grid">
                        <div className="application-details__item">
                            <div className="application-details__icon-wrapper">
                                <MapPin
                                    className="application-details__icon"
                                    aria-hidden="true"
                                />
                            </div>

                            <div className="application-details__content">
                                <span className="application-details__label">
                                    LOCATION
                                </span>

                                <span className="application-details__value">
                                    {application.location}
                                </span>
                            </div>
                        </div>

                        <div className="application-details__item">
                            <div className="application-details__icon-wrapper">
                                <DollarSign
                                    className="application-details__icon"
                                    aria-hidden="true"
                                />
                            </div>

                            <div className="application-details__content">
                                <span className="application-details__label">
                                    SALARY
                                </span>

                                <span className="application-details__value">
                                    {application.salary || "Not specified"}
                                </span>
                            </div>
                        </div>

                        <div className="application-details__item">
                            <div className="application-details__icon-wrapper">
                                <Link
                                    className="application-details__icon"
                                    aria-hidden="true"
                                />
                            </div>

                            <div className="application-details__content">
                                <span className="application-details__label">
                                    JOB LINK
                                </span>

                                {application.jobUrl ? (
                                    <a
                                        href={application.jobUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="application-details__link"
                                    >
                                        {application.jobUrl}
                                    </a>
                                ) : (
                                    <span className="application-details__value">
                                        Not specified
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="application-details__item">
                            <div className="application-details__icon-wrapper">
                                <Calendar
                                    className="application-details__icon"
                                    aria-hidden="true"
                                />
                            </div>

                            <div className="application-details__content">
                                <span className="application-details__label">
                                    DATE APPLIED
                                </span>

                                <span className="application-details__value">
                                    {application.appliedDate}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="application-details__card">
                    <h3 className="application-details__section-title">
                        Notes
                    </h3>

                    <textarea
                        readOnly
                        rows={5}
                        className="application-details__notes"
                        defaultValue={application.notes}
                    />
                </div>

                <div className="application-details__actions">
                    <button
                        type="button"
                        className="application-details__button application-details__button--delete"
                        onClick={handleDelete}
                    >
                        <Trash2 aria-hidden="true" />
                        <span>Delete</span>
                    </button>

                    <button
                        type="button"
                        className="application-details__button application-details__button--edit"
                        onClick={() => setIsEditing(true)}
                    >
                        <Pencil aria-hidden="true" />
                        <span>Edit</span>
                    </button>
                </div>

                {isEditing && (
                    <ApplicationModal
                        isOpen={isEditing}
                        onClose={() => setIsEditing(false)}
                    >
                        <ApplicationForm
                            initialData={application}
                            onSubmit={handleUpdateApplication}
                            onClose={() => setIsEditing(false)}
                        />
                    </ApplicationModal>
                )}
            </div>
        </div>
    );
}

export default ApplicationDetails;
