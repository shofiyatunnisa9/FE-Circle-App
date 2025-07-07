import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { useFollowers } from "@/hooks/useFollower";

function Follower() {
  const { data: followers = [], isLoading, error } = useFollowers();

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Memuat daftar followers...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Gagal memuat daftar followers</p>
      </div>
    );
  }

  if (followers.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Belum ada followers</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {followers.map((user: any) => (
        <div key={user.id} className="flex items-center p-4  rounded-lg">
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
        </div>
      ))}
    </div>
  );
}

export default Follower;
