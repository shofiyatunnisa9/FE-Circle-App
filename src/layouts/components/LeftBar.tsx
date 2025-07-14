import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import CreateDialog from "@/features/dialog/CreateDialog";
import Logout from "@/features/auth/Logout";

function LeftBar() {
  return (
    <div>
      <div className="fixed">
        <h1 className="text-5xl text-green-400 font-bold mb-7 ">circle</h1>
        <ul className="ml-2 items-center gap-2">
          <p className="flex items-center gap-2 p-2  text-white">
            <IoHomeOutline />
            <Link to={"/"}>Home</Link>
          </p>
          <p className="flex items-center gap-2 p-2  text-white">
            <FaUser />
            <Link to={"/search"}>Search</Link>
          </p>
          <p className="flex items-center gap-2 p-2 text-white">
            <FaRegHeart />
            <Link to={"/follow"}>Follow</Link>
          </p>
          <p className="flex items-center gap-2 p-2  text-white">
            <CgProfile />
            <Link to={"/profile"}>Profile</Link>
          </p>
        </ul>
        <CreateDialog />
        <Logout />
      </div>
    </div>
  );
}

export default LeftBar;
