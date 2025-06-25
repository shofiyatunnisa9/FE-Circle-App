import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import Image from "@/assets/image/logo.png";
import ProfileBar from "@/components/ui/componen-RightrBar/Profile";
import { useLocation } from "react-router-dom";

function RightBar() {
  const location = useLocation();
  const profilePages = location.pathname === "/profile";
  return (
    <div className="p-2">
      <div className="   ">
        {/* Profile Section */}
        {!profilePages && <ProfileBar />}
        {/* Suggested Users */}
        <div className="bg-gray-800 p-4 rounded-lg mt-3 pb-10">
          <h2 className="font-bold">Suggested for you</h2>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    className="rounded-full size-8"
                    src="https://github.com/shadcn.png"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="">
                  <p>Mohammed Jawahir</p>
                  <p className="text-sm -mt-1 text-gray-400">@em.jawahir</p>
                </div>
              </div>
              <Button className="bg-gray-700 px-3 py-1 rounded-lg" disabled>
                Following
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    className="rounded-full size-8"
                    src="https://github.com/shadcn.png"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p>shakia Kimathi</p>
                  <p className="text-sm -mt-1 text-gray-400">@shakiakim</p>
                </div>
              </div>
              <Button className="bg-gray-700 px-3 py-1 rounded-lg" disabled>
                Following
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    className="rounded-full size-8"
                    src="https://github.com/shadcn.png"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="">
                  <p>Naveen Sighn</p>
                  <p className="text-sm -mt-1 text-gray-400">@naveeeen</p>
                </div>
              </div>
              <Button className="bg-gray-700 px-3 py-1 mt-2 rounded-lg cursor-pointer">
                Follow
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    className="rounded-full size-8"
                    src="https://github.com/shadcn.png"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p>shela meirah</p>
                  <p className="text-sm -mt-1 text-gray-400">@kmnmjn94</p>
                </div>
              </div>
              <Button className="bg-gray-700 px-3 py-1 mt-2 rounded-lg cursor-pointer">
                Follow
              </Button>
            </div>
          </div>
        </div>

        {/* develop */}
        <div className="bg-gray-800 p-3 rounded-lg mt-3">
          <p className=" flex text-sm gap-1">
            Developed by Shofiyatunnisa •
            <IoLogoGithub />
            <IoLogoLinkedin />
            <FaFacebook />
            <RiInstagramFill />
          </p>
          <div className=" flex text-gray-500 text-xs gap-0.4">
            <p>Powered by </p>
            <img className="h-3.5 w-auto mt-1" src={Image} alt="logo"></img>
            <p>Dumbways Indonesia</p>
            <p> • </p>
            <p>#CodingBootcamp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
