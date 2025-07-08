import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "../button";
import { useSuggest } from "@/hooks/useSuggest";
import { useFollow } from "@/hooks/useFollow";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Suggested() {
  const navigate = useNavigate();
  const { data: suggestUsers = [], isLoading, error } = useSuggest();
  const followMutation = useFollow();
  const [pendingUsers, setPendingUsers] = useState<Set<string>>(new Set());

  const handleFollow = (userId: string) => {
    setPendingUsers((prev) => new Set(prev).add(userId));
    followMutation.mutate(userId, {
      onSuccess: () => {
        setPendingUsers((prev) => {
          const newSet = new Set(prev);
          newSet.delete(userId);
          return newSet;
        });
      },
      onError: () => {
        setPendingUsers((prev) => {
          const newSet = new Set(prev);
          newSet.delete(userId);
          return newSet;
        });
      },
    });
  };
  const handleUsernameClick = (username: string) => {
    navigate(`/profile/${username}`);
  };
  return (
    <div className="bg-gray-800 p-4 rounded-lg mt-3 pb-3">
      <h2 className="font-bold">Suggested for you</h2>
      {isLoading && <p>Loading....</p>}
      {error && <p>error...!!</p>}
      <div className="mt-4">
        {suggestUsers.map((user: any) => (
          <div
            key={user.id}
            className="flex justify-between items-center space-y-2"
          >
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  className="rounded-full size-8"
                  src={user.profile?.avatar}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p>{user.profile?.fullname}</p>
                <p
                  className="text-sm text-gray-500 cursor-pointer hover:text-green-500"
                  onClick={() => handleUsernameClick(user.username || "")}
                >
                  @{user.username}
                </p>
              </div>
            </div>
            <Button
              variant={"ghost"}
              className="bg-gray-700 px-3 py-1 rounded-lg cursor-pointer"
              onClick={() => handleFollow(user.id)}
              disabled={pendingUsers.has(user.id)}
            >
              {pendingUsers.has(user.id) ? "Loading..." : "Follow"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggested;
