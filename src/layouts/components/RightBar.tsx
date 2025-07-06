import ProfileBar from "@/components/ui/componen-RightrBar/Profile";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "@/components/ui/componen-RightrBar/Footer";
import Suggested from "@/components/ui/componen-RightrBar/Suggested";

function RightBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const profilePages = location.pathname === "/profile";
  return (
    <div className="fixed h-165 flex flex-col justify-between ">
      <div
        className="flex flex-col "
        onClick={() => {
          navigate("/profile");
        }}
      >
        {!profilePages && <ProfileBar />}
        <Suggested />
      </div>
      <Footer />
    </div>
  );
}

export default RightBar;
