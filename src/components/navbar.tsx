import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Button } from "./ui/button";
import { useLogout } from "@/hooks/useLogout";

const navItems = [
  { to: "/", icon: <IoHomeOutline size={24} /> },
  { to: "/search", icon: <FaSearch size={22} /> },
  { to: "/follow", icon: <FaRegHeart size={22} /> },
  { to: "/profile", icon: <CgProfile size={24} /> },
];

function NavBar() {
  const { logout } = useLogout();
  const location = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 flex justify-center items-center h-14 md:hidden">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`flex flex-col items-center justify-center flex-1 text-xs text-gray-300 hover:text-green-400 transition-colors ${
            location.pathname === item.to ? "text-green-400" : ""
          }`}
        >
          {item.icon}
        </Link>
      ))}
      <div className="flex justify-center items-center">
        <BiLogOut className=" cursor-pointer" size={24} />
        <Button type="submit" onClick={logout} variant={"logout"} />
      </div>
    </nav>
  );
}

export default NavBar;
