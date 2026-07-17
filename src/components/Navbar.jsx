import Logo from "../components/Logo";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar__container">
                <Logo />

                <div className="navbar__actions">
                    <Link className="btn btn--primary" to="/login">
                        Login
                    </Link>

                    <Link className="btn btn--secondary" to="/login">
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
