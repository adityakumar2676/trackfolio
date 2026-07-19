import {
    ClipboardList,
    BarChart3,
    FileText,
    Search,
    SlidersHorizontal,
    ShieldCheck,
} from "lucide-react";

const features = [
    {
        id: "track-applications",
        icon: ClipboardList,
        title: "Track Applications",
        description: "Log every application in one organized workspace.",
    },
    {
        id: "dashboard-analytics",
        icon: BarChart3,
        title: "Dashboard Analytics",
        description: "Visualize your progress with clear, at-a-glance stats.",
    },
    {
        id: "notes",
        icon: FileText,
        title: "Notes",
        description: "Keep interview prep and follow-up details close at hand.",
    },
    {
        id: "search",
        icon: Search,
        title: "Search",
        description: "Find any application instantly as you type.",
    },
    {
        id: "filters",
        icon: SlidersHorizontal, // Renders the clean funnel/filter style icon
        title: "Filters",
        description: "Narrow down by status, date, or company in one click.",
    },
    {
        id: "secure-account",
        icon: ShieldCheck,
        title: "Secure Account",
        description: "Your job search data stays private and protected.",
    },
];

export default features;
