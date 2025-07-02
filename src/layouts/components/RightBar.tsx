import ProfileBar from "@/components/ui/componen-RightrBar/Profile";
import { useLocation } from "react-router-dom";
import Footer from "@/components/ui/componen-RightrBar/Footer";
import Suggested from "@/components/ui/componen-RightrBar/Suggested";

function RightBar() {
  const location = useLocation();
  const profilePages = location.pathname === "/profile";
  return (
    <div className="fixed h-165 flex flex-col justify-between ">
      <div className="flex flex-col ">
        {!profilePages && <ProfileBar />}
        <Suggested />
      </div>
      <Footer />
    </div>
  );
}

export default RightBar;
