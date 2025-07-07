import EditDialog from "@/features/dialog/EditDialog";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { useCurrentUser } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function ProfileBar() {
  const { profile, loading, error } = useCurrentUser();
  const navigate = useNavigate();

  const fullname = profile?.fullname || "Your Name";
  const username = profile?.username || "username";
  const avatar = profile?.avatar || "https://github.com/shadcn.png";
  const banner =
    profile?.banner ||
    "https://plus.unsplash.com/premium_photo-1701590725747-ac131d4dcffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D";
  const bio = profile?.bio || "Hello welcome to my pages !!";

  if (loading)
    return <div className="bg-gray-800 p-4 rounded-lg pb-10">Loading...</div>;
  if (error)
    return (
      <div className="bg-gray-800 p-4 rounded-lg pb-10 text-red-500">
        {error}
      </div>
    );
  return (
    <div className="bg-gray-800 p-4 rounded-lg pb-10">
      <h2 className="text-xl font-bold pb-2">My Profile</h2>

      <img src={banner} className="w-full h-20 rounded-lg mb-[-60px]" />

      {/* Avatar & Edit Button */}
      <div className="flex justify-between  items-center mt-2 px-4">
        <div className=" mt-8 ">
          <div className="flex gap-28">
            <div>
              <Avatar className="size-15">
                <AvatarImage
                  className="border-gray-800 border-4 rounded-full"
                  src={avatar}
                />
                <AvatarFallback>{fullname[0]}</AvatarFallback>
              </Avatar>
            </div>
            <EditDialog />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/profile");
            }}
          >
            <p>{fullname}</p>
            <p className="text-gray-500">@{username}</p>
          </div>
          <p className="text-sm">{bio}</p>
          <div className=" flex text-sm gap-5">
            <p className="text-gray-500">
              <span className="font-bold text-white">
                {profile?.followingCount || 0}
              </span>{" "}
              Following
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-white">
                {profile?.followersCount || 0}
              </span>{" "}
              Followers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
