import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../common/Logo";
import sidebarData from "../../data/sidebarData";

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
                            `sidebar__content${isActive ? " active" : ""}`
                        }
                    >
                        <span className="content__icon-wrapper">
                            <Icon size={20} aria-hidden="true" />
                        </span>

                        <span className="content__title">{title}</span>
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
