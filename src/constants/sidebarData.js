// src/data/sidebarData.js

import {
    LayoutDashboard,
    BriefcaseBusiness,
    BarChart3,
    Building2,
    CalendarDays,
    Settings,
} from "lucide-react";

const sidebarData = [
    {
        id: 1,
        title: "Overview",
        path: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        id: 2,
        title: "Applications",
        path: "/dashboard/applications",
        icon: BriefcaseBusiness,
    },
    {
        id: 3,
        title: "Analytics",
        path: "/analytics",
        icon: BarChart3,
    },
    {
        id: 4,
        title: "Companies",
        path: "/companies",
        icon: Building2,
    },
    {
        id: 5,
        title: "Calendar",
        path: "/calendar",
        icon: CalendarDays,
    },
    {
        id: 6,
        title: "Settings",
        path: "/settings",
        icon: Settings,
    },
];

export default sidebarData;
