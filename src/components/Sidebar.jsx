import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import sidebarData from "../data/sidebarData";
import { useNavigate } from "react-router-dom";

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
            <div className="logo__wrapper">
                <Logo />
            </div>

            <nav className="sidebar__nav">
                {sidebarData.map((data) => {
                    const Icon = data.icon;

                    return (
                        <NavLink
                            key={data.id}
                            to={data.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebar__content active"
                                    : "sidebar__content"
                            }
                        >
                            <div className="content__icon-wrapper">
                                <Icon size={20} />
                            </div>

                            <span className="content__title">{data.title}</span>
                        </NavLink>
                    );
                })}
                <button onClick={handleLogout} className="your-logout-class">
                    Logout
                </button>
            </nav>
        </aside>
    );
}

export default Sidebar;
