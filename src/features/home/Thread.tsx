import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

interface ThreadProps {
  imageProfile?: string;
  nama: string;
  username: string;
  time: string;
  content: string;
  likes: number;
  replies: number;
  image?: string;
}
function Thread(data: ThreadProps) {
  const { imageProfile, nama, username, time, content, likes, replies, image } =
    data;
  return (
    <div className="text-sm border-gray-700 border-b p-5 space-y-2 ">
      <div className="flex gap-3">
        <div>
          <Avatar>
            <AvatarImage src={imageProfile} />
            <AvatarFallback>Ava</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="flex gap-3">
            <span className="font-bold">{nama}</span>
            <span className="text-gray-500 text-xs ">
              @{username} · {time}
            </span>
          </div>
          <p>{content}</p>
          {image && (
            <img
              src={image}
              alt="thread"
              className="rounded-lg border border-gray-700 mt-2 max-h-70 object-cover"
            />
          )}
          <div className="flex text-gray-400 gap-2 items-center">
            <FaRegHeart /> {likes}
            <MdOutlineMessage /> {replies} Replies
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thread;
