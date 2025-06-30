// function ProtectedAuth() {
//   const isLoggeIm = localStorage.getItem("token");

import { Outlet } from "react-router-dom";

//   return isLoggeIm ? <Outlet /> : <Navigate to="/login" replace />;
// }

// export default ProtectedAuth;
function ProtectedAuth() {
  return <Outlet />;
}
export default ProtectedAuth;
