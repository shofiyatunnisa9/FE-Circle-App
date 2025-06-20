import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

const posts = [
  {
    id: 1,
    imageAvatar:
      "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png",
    time: "4h",
    name: "✨ Shofiyatunnisa ✨",
    username: "shfytnnsa",
    content: "Well beauty is in the eye of the beholder",
    replies: 38,
    likes: 24,
  },
  {
    id: 2,
    imageAvatar:
      "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png",
    time: "12h",
    name: "✨ Shofiyatunnisa ✨",
    username: "shfytnnsa",
    content: "Good Coffeshop",
    replies: 99,
    likes: 71,

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2w8MUE77GIuGvN42EX9D6ZbVrCbKzD_fLg&s",
  },
  {
    id: 2,
    imageAvatar:
      "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png",
    time: "12h",
    name: "✨ Shofiyatunnisa ✨",
    username: "shfytnnsa",
    content:
      "Good Coffeshop🌼 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    replies: 99,
    likes: 71,

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2w8MUE77GIuGvN42EX9D6ZbVrCbKzD_fLg&s",
  },
];

export default function ProfileList() {
  return (
    <div className="text-sm">
      {posts.map((post) => (
        <div>
          <div className="flex gap-3 border-gray-700 border p-3 ">
            <div>
              <Avatar>
                <AvatarImage src={post.imageAvatar} />
                <AvatarFallback>Ava</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-2">
              <div className="flex gap-3">
                <span className="font-bold">{post.name}</span>
                <span className="text-gray-500 text-xs ">
                  @{post.username} · {post.time}
                </span>
              </div>
              <p>{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="thread"
                  className="rounded-md border border-gray-700 mt-2 w-90"
                />
              )}
              <div className="flex text-gray-400 gap-2 items-center ">
                <FaRegHeart /> {post.likes}
                <MdOutlineMessage /> {post.replies} Replies
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
