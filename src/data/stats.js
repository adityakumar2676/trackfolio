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
        value: 42,
        change: "+6 this week",
        icon: BriefcaseBusiness,
    },
    {
        id: 2,
        title: "Interviews",
        value: 8,
        change: "+2 this week",
        icon: CalendarCheck,
    },
    {
        id: 3,
        title: "Offers",
        value: 2,
        change: "+1 this month",
        icon: Trophy,
    },
    {
        id: 4,
        title: "Rejected",
        value: 13,
        change: "+3 this month",
        icon: CircleX,
    },
];

export default stats;
