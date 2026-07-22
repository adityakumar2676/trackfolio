import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../common/Logo";
import sidebarData from "../../constants/sidebarData";

function Sidebar({ isOpen }) {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("isAuthenticated");
        navigate("/login");
    }

    return (
        <aside
            className={`sidebar ${
                isOpen ? "sidebar--open" : "sidebar--closed"
            }`}
        >
            <Logo />

            <nav className="sidebar__nav" aria-label="Dashboard navigation">
                {sidebarData.map(({ id, path, icon: Icon, title }) => (
                    <NavLink
                        key={id}
                        to={path}
                        className={({ isActive }) =>
                            `sidebar__link${
                                isActive ? " sidebar__link--active" : ""
                            }`
                        }
                    >
                        <span className="sidebar__icon">
                            <Icon size={20} aria-hidden="true" />
                        </span>

                        <span className="sidebar__label">{title}</span>
                    </NavLink>
                ))}

                <button
                    type="button"
                    className="sidebar__logout"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </nav>
        </aside>
    );
}

export default Sidebar;
