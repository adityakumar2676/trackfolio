import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar__container">
                <Logo />

                <div className="navbar__actions">
                    <Link to="/login" className="btn btn--primary">
                        Login
                    </Link>

                    <Link to="/register" className="btn btn--secondary">
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
