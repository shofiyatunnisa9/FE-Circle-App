import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { useFollowing } from "@/hooks/useFollowing";
import { useFollow } from "@/hooks/useFollow";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Following() {
  const navigate = useNavigate();
  const { data: following = [], isLoading, error } = useFollowing();
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
  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">⏳ Loading following list </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400"> ❌ Failed to load following list</p>
      </div>
    );
  }

  if (following.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400"> No following yet</p>
      </div>
    );
  }

  const handleUsernameClick = (username: string) => {
    navigate(`/profile/${username}`);
  };
  return (
    <div>
      {following.map((user: any) => (
        <div
          key={user.id}
          className="flex items-center justify-between p-4 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage
                className="rounded-full size-10 object-cover"
                src={user.avatar}
              />
              <AvatarFallback>{user.fullname?.[0] || "U"}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-bold text-white">{user.fullname}</p>
              <p
                className="text-xs text-gray-400 cursor-pointer hover:text-green-500"
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
            {pendingUsers.has(user.id) ? "Loading..." : "unfollow"}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Following;
