import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function ProtectedRoute() {
  const auth = useAuth();

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
} // si la variable outlet es verdadera muestre lo que hay debajo de protectedRoute
