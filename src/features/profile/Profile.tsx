import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EditDialog from "../dialog/EditDialog";
import ProfileList from "./ProfileList";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileMedia from "./ProfileMedia";

type ProfileType = {
  id: string;
  fullname: string | null;
  username: string | null;
  avatar: string | null;
  banner: string | null;
  bio: string | null;
};

function Profile() {
  const navigate = useNavigate();
  const { profile, loading, error } = useCurrentUser() as {
    profile: ProfileType | null;
    loading: boolean;
    error: string | null;
  };

  // Placeholder jika data null
  const fullname = profile?.fullname || "Your Name";
  const username = profile?.username;
  const avatar = profile?.avatar || "https://github.com/shadcn.png";
  const banner =
    profile?.banner ||
    "https://plus.unsplash.com/premium_photo-1701590725747-ac131d4dcffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D";
  const bio = profile?.bio || "Hello welcome to my pages !!";

  if (loading) return <div className="text-white p-8">Loading...</div>;
  if (error) return <div className="text-red-500 p-8">{error}</div>;

  return (
    <div className=" text-white h-screen overflow-auto scrollbar-hide">
      <div className="flex items-center gap-4 p-3">
        <FaArrowLeftLong
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div>
          <h2 className="text-xl font-bold">{fullname}</h2>
        </div>
      </div>

      <div className=" relative px-5">
        <img src={banner} className="h-32 w-full rounded-xl" />

        <Avatar className="w-20 h-20 rounded-full border-4 border-gray-900 absolute -bottom-10 left-8 top-23">
          <AvatarImage className="rounded-full" src={avatar} />
          <AvatarFallback>{fullname[0]}</AvatarFallback>
        </Avatar>
        <p className="ml-150 -mt-4">
          <EditDialog />
        </p>
      </div>

      <div className="mt-2 px-5 pb-2">
        <h3 className="text-lg font-bold flex items-center gap-1">
          {fullname}
        </h3>
        <p className="text-gray-400 text-sm">@{username}</p>
        <p className="mt-2 text-sm text-gray-300">{bio}</p>

        <div className="flex gap-4 mt-3 text-sm text-gray-400">
          <span>
            <span className="text-white font-medium">203</span> Following
          </span>
          <span>
            <span className="text-white font-medium">1k</span> Followers
          </span>
        </div>
      </div>
      <div className="border-gray-700 ">
        <div className="p-2">
          <Tabs defaultValue="all">
            <TabsList className="w-full bg-transparent">
              <TabsTrigger
                value="all"
                className="cursor-pointer text-[#FFFFFF] rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:border-b-green-500  "
              >
                All Post
              </TabsTrigger>
              <TabsTrigger
                value="media"
                className="cursor-pointer text-[#FFFFFF] rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:border-b-green-500 "
              >
                Media
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <ProfileList />
            </TabsContent>
            <TabsContent value="media">
              <ProfileMedia />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Profile;
