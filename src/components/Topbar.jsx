import { Search, ChevronDown } from "lucide-react";

function Topbar({ toggleSidebar }) {
    return (
        <header className="topbar">
            <button className="topbar__toggle" onClick={toggleSidebar}>
                ☰
            </button>

            <h1 className="topbar__title">Overview</h1>

            <div className="topbar__actions">
                <div className="search">
                    <input
                        className="search__bar"
                        placeholder="Search"
                        id="search"
                        type="search"
                    />
                    <Search className="search__icon" />
                </div>

                <button className="profile">
                    <div className="profile__avatar">AK</div>
                    <ChevronDown />
                </button>
            </div>
        </header>
    );
}

export default Topbar;
