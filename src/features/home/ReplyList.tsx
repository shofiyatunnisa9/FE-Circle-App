import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useReplyList } from "@/hooks/useReply";
import { formatDateFromNow } from "@/utils/formatDate";
import { useNavigate } from "react-router-dom";

interface ReplyProps {
  threadId: string;
}

function ReplyList({ threadId }: ReplyProps) {
  const navigate = useNavigate();
  const { data, isLoading, error } = useReplyList(threadId);
  if (isLoading)
    return (
      <p className="text-gray-500 text-sm text-center">Loading replies...</p>
    );

  if (error)
    return (
      <p className="text-sm text-gray-500 text-center">
        Gagal memuat replies..
      </p>
    );

  const replies = data?.replies || [];

  const handleUsernameClick = (e: React.MouseEvent, username: string) => {
    e.stopPropagation();
    navigate(`/profile/${username}`);
  };
  return (
    <div className="text-sm p-5 space-y-2   ">
      {replies.map((reply: any) => (
        <div
          key={reply.id}
          className="flex gap-3 cursor-pointer rounded-lg p-2 "
        >
          <div>
            <Avatar>
              <AvatarImage
                src={reply?.user?.profile?.avatar}
                className="object-cover"
              />
              <AvatarFallback>
                {reply?.user?.profile?.fullname?.[0] || "U"}
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <div className="flex gap-3">
              <span className="font-bold">
                {reply?.user?.profile?.fullname}
              </span>
              <span
                className="text-gray-500 text-xs cursor-pointer hover:text-green-500"
                onClick={(e) =>
                  handleUsernameClick(e, reply?.user?.username || "")
                }
              >
                @{reply?.user?.username} ·
              </span>
              <span className="text-gray-500 text-xs ">
                {formatDateFromNow(reply.createdAt)}
              </span>
            </div>
            <p>{reply?.content}</p>

            {reply?.images && (
              <img
                src={reply.images}
                alt="thread"
                className="mt-2 max-h-70 object-cover"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReplyList;
