import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Follower from "./Follower";
import Following from "./Following";

function Follow() {
  return (
    <div className="p-2">
      <Tabs defaultValue="following">
        <TabsList className="w-full bg-transparent ">
          <TabsTrigger
            value="following"
            className="cursor-pointer text-[#FFFFFF] rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:border-b-green-500"
          >
            Following
          </TabsTrigger>
          <TabsTrigger
            value="followers"
            className="cursor-pointer text-[#FFFFFF] rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:border-b-green-500"
          >
            Followers
          </TabsTrigger>
        </TabsList>
        <TabsContent value="following">
          <Follower />
        </TabsContent>
        <TabsContent value="followers">
          <Following />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Follow;
