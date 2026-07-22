import AddApplicationButton from "../components/dashboard/AddApplicationButton";
import ApplicationsTable from "../components/dashboard/ApplicationTable";
import ApplicationModal from "../components/dashboard/ApplicationModal";
import ApplicationForm from "../components/dashboard/ApplicationForm";
import initialApplications from "../data/applications";
import { Search } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

function Applications() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [applications, setApplications] = useState(initialApplications);

    function handleOpenModal() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    function handleAddApplication(formData) {
        console.log(formData);
    }

    return (
        <main className="applications">
            <section className="applications__container">
                <header className="applications__header">
                    <h1 className="applications__title">Applications</h1>
                    <AddApplicationButton onClick={handleOpenModal} />
                </header>

                <div className="applications__search">
                    <Search className="search__icon" aria-hidden="true" />
                    <input
                        id="search"
                        type="search"
                        className="search__bar"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </div>

                <div className="applications__filters">
                    <button className="btn btn--tertiary">All</button>
                    <button className="btn btn--tertiary">Applied</button>
                    <button className="btn btn--tertiary">Interview</button>
                    <button className="btn btn--tertiary">Shortlisted</button>
                    <button className="btn btn--tertiary">Rejected</button>
                </div>

                <ApplicationsTable applications={applications} />

                <div className="applications__footer">
                    <p>Showing 1-7 of 24 applications</p>

                    <div className="applications__pagination">
                        <button className="btn btn--tertiary">
                            <ChevronLeft />
                        </button>
                        <button className="btn btn--tertiary">1</button>
                        <button className="btn btn--tertiary">2</button>
                        <button className="btn btn--tertiary">3</button>
                        <button className="btn btn--tertiary">4</button>
                        <button className="btn btn--tertiary">
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </section>

            <ApplicationModal isOpen={isModalOpen} onClose={handleCloseModal}>
                <ApplicationForm
                    onClose={handleCloseModal}
                    onSubmit={handleAddApplication}
                />
            </ApplicationModal>
        </main>
    );
}

export default Applications;
