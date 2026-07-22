import { ChevronDown, Menu, Search } from "lucide-react";
import { useLocation } from "react-router-dom";

function Topbar({ toggleSidebar }) {
    const { pathname } = useLocation();

    const pageTitles = {
        "/dashboard": "Overview",
        "/dashboard/applications": "Applications",
    };

    const title = pathname.startsWith("/dashboard/applications/")
        ? "Application Details"
        : (pageTitles[pathname] ?? "Dashboard");

    return (
        <header className="topbar">
            <button
                type="button"
                className="topbar__toggle"
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
            >
                <Menu aria-hidden="true" />
            </button>

            <h1 className="topbar__title">{title}</h1>

            <div className="topbar__actions">
                <div className="search">
                    <Search className="search__icon" aria-hidden="true" />
                    <input
                        id="search"
                        type="search"
                        className="search__input"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </div>

                <button type="button" className="profile-menu">
                    <span className="profile-menu__avatar">AK</span>
                    <ChevronDown aria-hidden="true" />
                </button>
            </div>
        </header>
    );
}

export default Topbar;
