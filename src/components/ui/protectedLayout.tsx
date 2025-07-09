import Layout from "@/layouts/Layout";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("acces-token");
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default ProtectedLayout;
