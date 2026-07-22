import { useState } from "react";

const initialFormData = {
    company: "",
    position: "",
    status: "Applied",
    appliedDate: "",
    location: "",
    salary: "",
    jobUrl: "",
    notes: "",
};

function ApplicationForm({ initialData = initialFormData, onSubmit, onClose }) {
    const [formData, setFormData] = useState(initialData);

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <article className="application">
            <header className="application__header">
                <h2 className="application__title">
                    {initialData.id ? "Edit Application" : "Add Application"}
                </h2>

                <p className="application__description">
                    {initialData.id
                        ? "Update your job application details."
                        : "Enter the details of your job application."}
                </p>
            </header>

            <form className="form" onSubmit={handleSubmit}>
                <div className="form__row">
                    <div className="form__group">
                        <label className="form__label">Company</label>

                        <input
                            className="form__input"
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="e.g. Stripe"
                            required
                        />
                    </div>

                    <div className="form__group">
                        <label className="form__label">Role</label>

                        <input
                            className="form__input"
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            placeholder="e.g. Frontend Engineer"
                            required
                        />
                    </div>
                </div>

                <div className="form__row">
                    <div className="form__group">
                        <label className="form__label">Status</label>

                        <select
                            className="form__input"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="Applied">Applied</option>
                            <option value="Interview">Interview</option>
                            <option value="Shortlisted">Shortlisted</option>
                            <option value="Offer">Offer</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>

                    <div className="form__group">
                        <label className="form__label">Date Applied</label>

                        <input
                            className="form__input"
                            type="date"
                            name="appliedDate"
                            value={formData.appliedDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form__row">
                    <div className="form__group">
                        <label className="form__label">Location</label>

                        <input
                            className="form__input"
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="e.g. Bengaluru, India"
                        />
                    </div>

                    <div className="form__group">
                        <label className="form__label">Salary</label>

                        <input
                            className="form__input"
                            type="text"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            placeholder="e.g. ₹12 LPA"
                        />
                    </div>
                </div>

                <div className="form__group">
                    <label className="form__label">Job Link</label>

                    <input
                        className="form__input"
                        type="url"
                        name="jobUrl"
                        value={formData.jobUrl}
                        onChange={handleChange}
                        placeholder="https://..."
                    />
                </div>

                <div className="form__group">
                    <label className="form__label">Notes</label>

                    <textarea
                        className="form__input form__textarea"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Add any notes about this application..."
                    />
                </div>

                <div className="form__actions">
                    <button
                        type="button"
                        className="btn btn--secondary"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button type="submit" className="btn btn--primary">
                        {initialData.id
                            ? "Update Application"
                            : "Save Application"}
                    </button>
                </div>
            </form>
        </article>
    );
}

export default ApplicationForm;
