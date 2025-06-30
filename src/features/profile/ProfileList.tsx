import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { useUserThreads } from "@/hooks/useAuth";

export default function ProfileList() {
  const { threads, isLoading, error } = useUserThreads();

  if (isLoading) return <div className="text-white p-4">Loading posts...</div>;
  if (error) return <div className="text-red-500 p-4">Error loading posts: {error}</div>;
  if (!threads?.payload || threads.payload.length === 0) {
    return <div className="text-gray-400 p-4 text-center">No posts yet. Create your first post!</div>;
  }

  return (
    <div className="text-sm">
      {threads.payload.map((thread: any) => (
        <div key={thread.id}>
          <div className="flex gap-3 border-gray-700 border p-3">
            <div>
              <Avatar>
                <AvatarImage src={thread.avatar} />
                <AvatarFallback>{thread.fullname?.[0] || "U"}</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-2">
              <div className="flex gap-3">
                <span className="font-bold">{thread.fullname}</span>
                <span className="text-gray-500 text-xs">
                  @{thread.username} · {new Date(thread.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p>{thread.content}</p>
              {thread.images && (
                <img
                  src={thread.images}
                  alt="thread"
                  className="rounded-md border border-gray-700 mt-2 w-90"
                />
              )}
              <div className="flex text-gray-400 gap-2 items-center">
                <FaRegHeart /> {thread.likes || 0}
                <MdOutlineMessage /> {thread.replies || 0} Replies
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
