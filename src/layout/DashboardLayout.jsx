import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Overview from "../components/Topbar";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    function toggleSidebar() {
        setSidebarToggle((prev) => !prev);
    }

    return (
        <div className="dashboard">
            <Sidebar isOpen={sidebarToggle} />

            <div
                className={`dashboard__main ${
                    sidebarToggle ? "dashboard__main--shift" : ""
                }`}
            >
                <Topbar toggleSidebar={toggleSidebar} />

                <main className="dashboard__content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;
