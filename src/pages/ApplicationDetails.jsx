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
        <div className="applications__details">
            <div className="applications__details-container">
                <div className="applications__details-card">
                    <div className="applications__details-company">
                        <div className="applications__details-logo">
                            {application.company.charAt(0).toUpperCase()}
                        </div>
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
                                    {application.location}
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
                                    {application.salary || "Not specified"}
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
                                {application.jobUrl ? (
                                    <a
                                        href={application.jobUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="applications__details-link"
                                    >
                                        {application.jobUrl}
                                    </a>
                                ) : (
                                    <span className="applications__details-value">
                                        Not specified
                                    </span>
                                )}
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
                                    {application.appliedDate}
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
                        defaultValue={application.notes}
                    />
                </div>

                <div className="applications__details-actions">
                    <button
                        type="button"
                        className="applications__details-btn applications__details-btn--delete"
                        onClick={handleDelete}
                    >
                        <Trash2 />
                        <span>Delete</span>
                    </button>

                    <button
                        type="button"
                        className="applications__details-btn applications__details-btn--edit"
                        onClick={() => {
                            setIsEditing(true);
                        }}
                    >
                        <Pencil />
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
