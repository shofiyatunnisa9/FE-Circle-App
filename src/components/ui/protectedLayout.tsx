import Layout from "@/layouts/Layout";
import { Outlet } from "react-router-dom";

function ProtectedLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default ProtectedLayout;
