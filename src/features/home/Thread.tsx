import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetThread } from "@/hooks/useGetThread";
import { useLiked } from "@/hooks/useLiked";
import { formatDateFromNow } from "@/utils/formatDate";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Thread() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetThread();
  const likeMutation = useLiked();

  if (isLoading)
    return <h1 className="text-sm items-center text-gray-600">loading....</h1>;
  if (error)
    return <h1 className="text-sm items-center text-gray-600">Error</h1>;
  if (!data)
    return (
      <h1 className="text-sm items-center text-gray-600">Tidak ada data</h1>
    );

  const handleLikeClick = (e: React.MouseEvent, threadId: string) => {
    e.stopPropagation();
    likeMutation.mutate(threadId);
  };

  const handleThreadClick = (threadId: string) => {
    navigate(`/threads/${threadId}`);
  };

  return (
    <div>
      {data?.payload?.map((thread) => {
        return (
          <div key={thread.id} className="text-sm p-2 border-gray-700 border-b">
            <div
              className="flex gap-3 cursor-pointer p-2"
              onClick={() => handleThreadClick(thread.id!)}
            >
              <div>
                <Avatar>
                  <AvatarImage src={thread?.avatar} />
                  <AvatarFallback>
                    {thread?.fullname?.[0] || "U"}
                  </AvatarFallback>
                </Avatar>
              </div>

              <div className="flex-1">
                <div className="flex gap-3">
                  <span className="font-bold">{thread?.fullname}</span>
                  <span className="text-gray-500 text-xs">
                    @{thread?.username} ·
                  </span>
                  <span className="text-gray-500 text-xs">
                    {formatDateFromNow(thread.createdAt)}
                  </span>
                </div>

                <p>{thread?.content}</p>

                {thread?.images && (
                  <img
                    src={thread.images}
                    alt="thread"
                    className="mt-2 max-h-70 object-cover"
                  />
                )}

                <div className="flex text-gray-400 gap-4 items-center mt-2 cursor-pointer">
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

                  <div className="flex items-center gap-1">
                    <MdOutlineMessage />
                    <span>{thread.replyCount || 0} Replies</span>
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

export default Thread;
