import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useReplyList } from "@/hooks/useReply";
import { formatDateFromNow } from "@/utils/formatDate";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

interface ReplyProps {
  threadId: string;
}

function ReplyList({ threadId }: ReplyProps) {
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
  return (
    <div className="text-sm p-5 space-y-2  border-gray-700 border-t">
      {replies.map((reply: any) => (
        <div
          key={reply.id}
          className="flex gap-3 cursor-pointer rounded-lg p-2 hover:bg-gray-800"
        >
          <div>
            <Avatar>
              <AvatarImage src={reply?.user?.profile?.avatar} />
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
              <span className="text-gray-500 text-xs ">
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
            <div className="flex text-gray-400 gap-2 items-center">
              <FaRegHeart /> {reply.likes || 0}
              <MdOutlineMessage /> {reply.replies || 0} Replies
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReplyList;
