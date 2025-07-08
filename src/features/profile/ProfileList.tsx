import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLiked } from "@/hooks/useLiked";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { useUserThreads } from "@/hooks/useAuth";
import { formatDateFromNow } from "@/utils/formatDate";
import { useNavigate } from "react-router-dom";
import { useThreadProfileUser } from "@/hooks/useProfile";

interface ProfileListProps {
  username?: string;
}

export default function ProfileList({ username }: ProfileListProps) {
  const {
    threads: ownThreads,
    isLoading: ownLoading,
    error: ownError,
  } = useUserThreads();
  const {
    threads: userThreads,
    isLoading: userLoading,
    error: userError,
  } = useThreadProfileUser(username || "");

  const threads = username ? userThreads : ownThreads;
  const isLoading = username ? userLoading : ownLoading;
  const error = username ? userError : ownError;

  const likeMutation = useLiked();
  const navigate = useNavigate();

  if (isLoading) return <div className="text-white p-4">Loading posts...</div>;
  if (error)
    return <div className="text-red-500 p-4">Error loading posts: {error}</div>;
  if (!threads?.payload || threads.payload.length === 0) {
    return <div className="text-gray-400 p-4 text-center">No posts yet!!</div>;
  }
  const handleLikeClick = (e: React.MouseEvent, threadId: string) => {
    e.stopPropagation();
    likeMutation.mutate(threadId);
  };

  const handleThreadClick = (threadId: string) => {
    navigate(`/threads/${threadId}`);
  };

  const handleUsernameClick = (e: React.MouseEvent, username: string) => {
    e.stopPropagation();
    navigate(`/profile/${username}`);
  };

  return (
    <div className="text-sm ">
      {threads.payload.map((thread: any) => {
        return (
          <div key={thread.id} className="border-gray-700 border-b">
            <div
              className="flex gap-3 cursor-pointer p-2"
              onClick={() => handleThreadClick(thread.id!)}
            >
              <div className="flex gap-3 p-3">
                <div>
                  <Avatar>
                    <AvatarImage
                      src={thread.user?.profile?.avatar}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {thread.user?.profile?.fullname?.[0] || "U"}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex gap-3">
                    <span className="font-bold">
                      {thread.user?.profile?.fullname}
                    </span>
                    <span
                      className="text-gray-500 text-xs cursor-pointer hover:text-green-500"
                      onClick={(e) =>
                        handleUsernameClick(
                          e,
                          thread.user?.profile?.username || ""
                        )
                      }
                    >
                      @{thread.user?.username} ·{" "}
                      {formatDateFromNow(thread.createdAt)}
                    </span>
                  </div>
                  <p>{thread.content}</p>
                  {thread.images && (
                    <img
                      src={thread.images}
                      alt="thread"
                      className="mt-2 w-90"
                    />
                  )}
                  <div className="flex text-gray-400 gap-4 items-center mt-2">
                    <button
                      onClick={(e) => handleLikeClick(e, thread.id!)}
                      disabled={likeMutation.isPending}
                      className={`flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer ${
                        thread.isLiked ? "text-red-500" : ""
                      }`}
                    >
                      {thread.isLiked ? (
                        <FaHeart className="text-red-500" />
                      ) : (
                        <FaRegHeart />
                      )}
                      <span>{thread.likeCount || 0}</span>
                    </button>

                    <div className="flex items-center gap-1 cursor-pointer">
                      <MdOutlineMessage />
                      <span>{thread.replyCount || 0} Replies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
