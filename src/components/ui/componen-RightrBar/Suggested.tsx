import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "../button";
import { useSuggest } from "@/hooks/useSuggest";

function Suggested() {
  const { data: suggestUsers = [], isLoading, error } = useSuggest();
  return (
    <div className="bg-gray-800 p-4 rounded-lg mt-3 pb-7">
      <h2 className="font-bold">Suggested for you</h2>
      {isLoading && <p>Loading....</p>}
      {error && <p>error...!!</p>}
      <div className="mt-4">
        {suggestUsers.map((user: any) => (
          <div className="flex justify-between items-center space-y-2">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  className="rounded-full size-8"
                  src={user.profile?.avatar}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="">
                <p>{user.profile?.fullname}</p>
                <p className="text-sm -mt-1 text-gray-400">@{user.username}</p>
              </div>
            </div>
            <Button
              variant={"ghost"}
              className="bg-gray-700 px-3 py-1 rounded-lg cursor-pointer"
            >
              Follow
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggested;
