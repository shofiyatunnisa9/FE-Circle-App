import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EditDialog from "../dialog/EditDialog";
import ProfileList from "./ProfileList";
import { Button } from "@/components/ui/button";

function Profile() {
  const navigate = useNavigate();
  return (
    <div className=" text-white h-screen overflow-auto scrollbar-hide">
      <div className="flex items-center gap-4 p-3">
        <FaArrowLeftLong
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <div>
          <h2 className="text-xl font-bold">✨ Shofiyatunnisa ✨</h2>
        </div>
      </div>

      <div className=" relative px-5">
        <div className=" h-32 w-full rounded-xl bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300" />

        <Avatar className="w-20 h-20 rounded-full border-4 border-gray-900 absolute -bottom-10 left-8 top-23">
          <AvatarImage
            className="rounded-full"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="ml-150 -mt-4">
          <EditDialog />
        </p>
      </div>

      <div className="mt-2 px-5 pb-2">
        <h3 className="text-lg font-bold flex items-center gap-1">
          ✨ Shofiyatunnisa ✨
        </h3>
        <p className="text-gray-400 text-sm">@shfytnsa</p>
        <p className="mt-2 text-sm text-gray-300">
          Hello welcome to my pages !!
        </p>

        <div className="flex gap-4 mt-3 text-sm text-gray-400">
          <span>
            <span className="text-white font-medium">203</span> Following
          </span>
          <span>
            <span className="text-white font-medium">1k</span> Followers
          </span>
        </div>
      </div>
      <div className="border-gray-700  ">
        <div className=" flex mt-4 ">
          <Button className="flex-1 py-3 px-4 text-white border-b-2 border-green-500 font-medium bg-transparent rounded-none">
            All Post
          </Button>
          <Button className="flex-1 py-3 px-4 text-gray-400 hover:text-white bg-transparent rounded-nonw">
            Media
          </Button>
        </div>
        <ProfileList />
      </div>
    </div>
  );
}

export default Profile;
