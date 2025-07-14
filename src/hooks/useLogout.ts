import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useLogout() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("acces-token");
    navigate("/login");
    toast.success("Logout Succes :(");
  };
  return { logout };
}
