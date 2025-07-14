import { Outlet, Navigate } from "react-router-dom";

function ProtectedAuth() {
  const isLoggedIn = !!localStorage.getItem("acces-token");
  return isLoggedIn ? <Navigate to="/" replace /> : <Outlet />;
}

export default ProtectedAuth;
