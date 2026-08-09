import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function MasterAdminRoute({ children }) {
  const { user, authLoading } = useAuth();

  if (authLoading) {
    return <div>Loading EduOrbit...</div>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (user.role !== "master_admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
