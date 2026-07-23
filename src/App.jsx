import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Overview from "./pages/Overview";
import Applications from "./pages/Applications";
import ApplicationDetails from "./pages/ApplicationDetails";
import Analytics from "./pages/Analytics";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <DashboardLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<Overview />} />

                <Route path="applications" element={<Applications />} />

                <Route
                    path="applications/:id"
                    element={<ApplicationDetails />}
                />

                <Route path="analytics" element={<Analytics />} />
            </Route>
        </Routes>
    );
}

export default App;
