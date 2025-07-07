import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { useFollowing } from "@/hooks/useFollowing";
import { useFollow } from "@/hooks/useFollow";

function Following() {
  const { data: following = [], isLoading, error } = useFollowing();
  const followMutation = useFollow();

  const handleUnfollow = (userId: string) => {
    followMutation.mutate(userId);
  };

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Memuat daftar following...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Gagal memuat daftar following</p>
      </div>
    );
  }

  if (following.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Belum ada following</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {following.map((user: any) => (
        <div
          key={user.id}
          className="flex items-center justify-between p-4 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage className="rounded-full size-10" src={user.avatar} />
              <AvatarFallback>{user.fullname?.[0] || "U"}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-bold text-white">{user.fullname}</p>
              <p className="text-xs text-gray-400">@{user.username}</p>
            </div>
          </div>
          <Button
            variant={"ghost"}
            size="sm"
            onClick={() => handleUnfollow(user.id)}
            disabled={followMutation.isPending}
            className="bg-gray-700 px-3 py-1 rounded-lg cursor-pointer"
          >
            {followMutation.isPending ? "Loading..." : "Unfollow"}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Following;
