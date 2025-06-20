// import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Logout() {
  //   const navigate = useNavigate();
  //   const handleLogout = () => {
  //     navigate("/login");
  //   };

  return (
    <div>
      {/* <Button onClick={handleLogout}>Logout</Button> */}
      <Link to={"/login"}>Logout</Link>
    </div>
  );
}
export default Logout;
