// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/useLogout";
import { BiLogOut } from "react-icons/bi";

function Logout() {
  const { logout } = useLogout();
  return (
    <div className="flex items-center mt-75">
      <BiLogOut />
      <Button
        type="submit"
        onClick={logout}
        variant={"logout"}
        className="bg-transparent cursor-pointer"
      >
        Logout
      </Button>
    </div>
  );
}
export default Logout;
