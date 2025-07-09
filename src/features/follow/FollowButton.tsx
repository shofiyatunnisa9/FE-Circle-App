import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useFollow } from "@/hooks/useFollow";

interface FollowButtonProps {
  userId: string;
  initiallyFollowed?: boolean;
}

export function FollowButton({
  userId,
  initiallyFollowed = false,
}: FollowButtonProps) {
  const followMutation = useFollow();

  const [pendingUsers, setPendingUsers] = useState<Set<string>>(new Set());
  const [followedUsers, setFollowedUsers] = useState<Set<string>>(new Set());

  // Inisialisasi data dari props
  useEffect(() => {
    if (initiallyFollowed) {
      setFollowedUsers((prev) => new Set(prev).add(userId));
    }
  }, [userId, initiallyFollowed]);

  const handleFollow = () => {
    setPendingUsers((prev) => new Set(prev).add(userId));

    const isFollowed = followedUsers.has(userId);

    followMutation.mutate(userId, {
      onSuccess: () => {
        setPendingUsers((prev) => {
          const updated = new Set(prev);
          updated.delete(userId);
          return updated;
        });

        setFollowedUsers((prev) => {
          const updated = new Set(prev);
          if (isFollowed) {
            updated.delete(userId);
          } else {
            updated.add(userId);
          }
          return updated;
        });
      },
      onError: () => {
        setPendingUsers((prev) => {
          const updated = new Set(prev);
          updated.delete(userId);
          return updated;
        });
      },
    });
  };

  const isPending = pendingUsers.has(userId);
  const isFollowed = followedUsers.has(userId);

  return (
    <Button
      variant={"ghost"}
      className="rounded-full bg-transparent cursor-pointer px-8 border-1"
      onClick={handleFollow}
      disabled={isPending}
    >
      {isPending ? "Loading..." : isFollowed ? "Unfollow" : "Follow"}
    </Button>
  );
}
