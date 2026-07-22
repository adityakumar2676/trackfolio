import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function toggleSidebar() {
        setIsSidebarOpen((prev) => !prev);
    }

    return (
        <div className="dashboard">
            <Sidebar isOpen={isSidebarOpen} />

            <div
                className={`dashboard__main ${
                    isSidebarOpen ? "dashboard__main--shift" : ""
                }`}
            >
                <Topbar toggleSidebar={toggleSidebar} />

                <main className="dashboard__page">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;
