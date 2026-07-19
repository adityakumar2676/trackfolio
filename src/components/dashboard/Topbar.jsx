import { ChevronDown, Menu, Search } from "lucide-react";

function Topbar({ toggleSidebar }) {
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

            <h1 className="topbar__title">Overview</h1>

            <div className="topbar__actions">
                <div className="search">
                    <Search className="search__icon" aria-hidden="true" />
                    <input
                        id="search"
                        type="search"
                        className="search__bar"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </div>

                <button type="button" className="profile">
                    <span className="profile__avatar">AK</span>
                    <ChevronDown aria-hidden="true" />
                </button>
            </div>
        </header>
    );
}

export default Topbar;
