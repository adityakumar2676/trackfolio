import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../../auth/authService";

function ProtectedRoute({ children }) {
    const currentUser = getCurrentUser();

    return currentUser ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
