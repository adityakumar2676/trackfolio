// src/data/stats.js

import {
    BriefcaseBusiness,
    CalendarCheck,
    Trophy,
    CircleX,
} from "lucide-react";

const stats = [
    {
        id: 1,
        title: "Applications",
        value: applications.length,
        change: "",
        icon: BriefcaseBusiness,
    },
    {
        id: 2,
        title: "Interviews",
        value: applications.filter((app) => app.status === "Interview").length,
        change: "",
        icon: CalendarCheck,
    },
    {
        id: 3,
        title: "Offers",
        value: applications.filter((app) => app.status === "Offer").length,
        change: "",
        icon: Trophy,
    },
    {
        id: 4,
        title: "Rejected",
        value: applications.filter((app) => app.status === "Rejected").length,
        change: "",
        icon: CircleX,
    },
];
export default stats;
