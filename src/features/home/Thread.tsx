import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetThread } from "@/hooks/useGetThread";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

function Thread() {
  const { data, isLoading, error } = useGetThread();
  if (isLoading) return <h1>loading....</h1>;
  if (error) return <h1>ada error</h1>;
  if (!data) return <h1>tidak ada data</h1>;
  console.log(data.payload);

  return (
    <div className="text-sm border-gray-700 border-b p-5 space-y-2 ">
      {data?.payload?.map((thread) => (
        <div className="flex gap-3">
          <div>
            <Avatar>
              <AvatarImage src={thread?.image} />
              <AvatarFallback>Ava</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <div className="flex gap-3">
              <span className="font-bold">{thread?.username}</span>
              <span className="text-gray-500 text-xs ">
                @{thread?.username} ·
                {new Date(thread.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p>{thread?.content}</p>

            {thread?.images && (
              <img
                src={thread.images}
                alt="thread"
                className="rounded-lg border border-gray-700 mt-2 max-h-70 object-cover"
              />
            )}
            <div className="flex text-gray-400 gap-2 items-center">
              <FaRegHeart /> {}
              <MdOutlineMessage /> {} Replies
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Thread;
