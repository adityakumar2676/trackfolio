function AddApplicationButton({ onClick }) {
    return (
        <button type="button" className="btn btn--primary" onClick={onClick}>
            Add Application
        </button>
    );
}

export default AddApplicationButton;
