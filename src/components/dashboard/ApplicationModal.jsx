function ApplicationModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal__overlay" onClick={onClose}>
            <article
                className="modal"
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="modal__close"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    ×
                </button>

                {children}
            </article>
        </div>
    );
}

export default ApplicationModal;
