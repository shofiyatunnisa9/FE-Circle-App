import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProfileUser } from "@/hooks/useProfile";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ProfileList from "./ProfileList";
import ProfileMedia from "./ProfileMedia";
import { Button } from "@/components/ui/button";

type ProfileUserType = {
  id: string;
  fullname: string | null;
  username: string | null;
  avatar: string | null;
  banner: string | null;
  bio: string | null;
  followingCount?: number;
  followersCount?: number;
};
interface ProfileUserProp {
  username: string;
}

export function ProfileUser({ username }: ProfileUserProp) {
  const navigate = useNavigate();
  const { profile, isLoading, error } = useProfileUser(username) as {
    profile: ProfileUserType | null;
    isLoading: boolean;
    error: string | null;
  };
  // Placeholder jika data null
  const fullname = profile?.fullname || "Username";
  const userUsername = profile?.username;
  const avatar = profile?.avatar || "https://github.com/shadcn.png";
  const banner =
    profile?.banner ||
    "https://plus.unsplash.com/premium_photo-1701590725747-ac131d4dcffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D";
  const bio = profile?.bio || "Hello welcome to my pages !!";

  if (isLoading)
    return <div className="text-gray-400 text-center p-8">Loading...</div>;
  if (error) return <div className="text-red-500 p-8">{error}</div>;
  if (!profile)
    return <div className="text-gray-400 text-center">User Not Found</div>;

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
        <img src={banner} className="h-32 w-full rounded-xl object-cover" />

        <Avatar className="w-20 h-20 rounded-full border-4 border-gray-900 absolute -bottom-10 left-8 top-23">
          <AvatarImage className="rounded-full object-cover" src={avatar} />
          <AvatarFallback>{fullname[0]}</AvatarFallback>
        </Avatar>

        <p className="ml-145 mt-2">
          <Button
            variant={"outline"}
            className="rounded-full bg-transparent cursor-pointer px-8 "
          >
            Follow
          </Button>
        </p>
      </div>

      <div className=" px-5 pb-2">
        <h3 className="text-lg font-bold flex items-center gap-1">
          {fullname}
        </h3>
        <p className="text-gray-400 text-sm">@{userUsername}</p>
        <p className="mt-2 text-sm text-gray-300">{bio}</p>

        <div className="flex gap-4 mt-3 text-sm text-gray-400">
          <span>
            <span className="text-white font-medium">
              {profile?.followingCount || 0}
            </span>
            Following
          </span>
          <span>
            <span className="text-white font-medium">
              {profile?.followersCount || 0}
            </span>
            Followers
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
              <ProfileList username={username} />
            </TabsContent>
            <TabsContent value="media">
              <ProfileMedia username={username} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
