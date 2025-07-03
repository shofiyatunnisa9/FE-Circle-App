import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Follower from "./Follower";
import Following from "./Following";

function Follow() {
  return (
    <div className="p-2">
      <Tabs defaultValue="all">
        <TabsList className="w-full bg-transparent ">
          <TabsTrigger
            value="all"
            className="cursor-pointer text-[#FFFFFF] rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:border-b-green-500"
          >
            Following
          </TabsTrigger>
          <TabsTrigger
            value="media"
            className="cursor-pointer text-[#FFFFFF] rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:border-b-green-500"
          >
            Followers
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Follower />
        </TabsContent>
        <TabsContent value="media">
          <Following />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Follow;
