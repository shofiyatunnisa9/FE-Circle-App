import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetThread } from "@/hooks/useGetThread";
import { formatDateFromNow } from "@/utils/formatDate";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Thread() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetThread();
  if (isLoading) return <h1>loading....</h1>;
  if (error) return <h1>ada error</h1>;
  if (!data) return <h1>tidak ada data</h1>;

  return (
    <div className="text-sm p-5 space-y-2  border-gray-700 border-t">
      {data?.payload?.map((thread) => (
        <div
          key={thread.id}
          className="flex gap-3 cursor-pointer rounded-lg p-2 hover:bg-gray-800"
          onClick={() => {
            if (!thread.id) {
              return;
            }
            navigate(`/threads/${thread.id}`);
          }}
        >
          <div>
            <Avatar>
              <AvatarImage src={thread?.avatar} />
              <AvatarFallback>{thread?.fullname?.[0] || "U"}</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <div className="flex gap-3">
              <span className="font-bold">{thread?.fullname}</span>
              <span className="text-gray-500 text-xs ">
                @{thread?.username} ·
              </span>
              <span className="text-gray-500 text-xs ">
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
            <div className="flex text-gray-400 gap-2 items-center">
              <FaRegHeart /> {thread.likes || 0}
              <MdOutlineMessage /> {thread.replies || 0} Replies
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Thread;
