import { Outlet } from "react-router-dom";

function ProtectedAuth() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProtectedAuth;
