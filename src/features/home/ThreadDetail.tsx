import { useGetThreadById } from "@/hooks/useGetThread";
import { useLiked } from "@/hooks/useLiked";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { LuImagePlus } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useAuth";
import { formatDateFromNow } from "@/utils/formatDate";
import { useForm } from "react-hook-form";
import { schemaReply, type schemaReplyDTO } from "@/lib/schema/schemaReply";
import { zodResolver } from "@hookform/resolvers/zod";
import { useReply } from "@/hooks/useReply";
import ReplyList from "./ReplyList";

function ThreadDetail() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset: formReset,
  } = useForm<schemaReplyDTO>({
    mode: "onChange",
    resolver: zodResolver(schemaReply),
  });
  const params = useParams();
  const navigate = useNavigate();
  const { profile } = useCurrentUser();
  const { repliesMutate, isPending } = useReply();
  const likeMutation = useLiked();

  useEffect(() => {
    if (!params.id || params.id === "undefined") {
      navigate("/");
    }
  }, [params.id, navigate]);

  if (!params.id || params.id === "undefined") {
    return <h1 className="text-center">Redirecting...</h1>;
  }

  const { data: thread, isLoading, error } = useGetThreadById(params.id!);

  if (isLoading) return <h1>loading....</h1>;
  if (error) return <h1>ada error: {error.message}</h1>;
  if (!thread) return <h1>Thread tidak ditemukan</h1>;

  type ReplyTypeRequest = {
    content: string;
    images?: File;
    threadId: string;
  };

  const submit = (data: schemaReplyDTO) => {
    const payload: ReplyTypeRequest = {
      ...data,
      threadId: params.id!,
    };
    repliesMutate(payload, {
      onSuccess: () => {
        formReset();
      },
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setValue("images", e.target.files[0]);
    }
  };

  const handleLikeClick = (e: React.MouseEvent, threadId: string) => {
    e.stopPropagation();
    likeMutation.mutate(threadId);
  };

  const handleUsernameClick = (e: React.MouseEvent, username: string) => {
    e.stopPropagation();
    navigate(`/profile/${username}`);
  };

  return (
    <>
      <div className="text-sm p-5 space-y-3  border-gray-700 border-b">
        <div className="flex items-center gap-4 pb-2">
          <FaArrowLeftLong
            className="cursor-pointer font-bold"
            onClick={() => navigate(-1)}
          />

          <h2 className="text-xl font-bold">Status</h2>
        </div>
        <div className="flex gap-5">
          <div>
            <img
              src={thread?.user?.profile?.avatar}
              className="rounded-full size-10 object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex gap-3">
              <span className="font-bold">
                {thread?.user?.profile?.fullname}
              </span>
              <span
                className="text-gray-500 text-xs cursor-pointer hover:text-green-500"
                onClick={(e) =>
                  handleUsernameClick(e, thread.user?.username || "")
                }
              >
                @{thread?.user?.username} ·
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
              <div className="flex items-center gap-1">
                <MdOutlineMessage />
                <span>{thread.replyCount || 0} Replies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="p-4 border-gray-700 border-b">
          <div className="flex gap-3 justify-center items-center">
            <img
              src={profile?.avatar || "https://github.com/shadcn.png"}
              className="rounded-full size-10"
            />

            <Input
              type="text"
              placeholder="Type Your Reply!!"
              {...register("content")}
            />
            {errors.content && (
              <p className="text-red-500">{errors.content.message}</p>
            )}

            <label htmlFor="image">
              <LuImagePlus
                size={35}
                className="text-green-500 cursor-pointer "
              />
            </label>
            <Input
              type="file"
              id="image"
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />

            <Button
              type="submit"
              variant={"sho"}
              className="mt-1 bg-green-500 text-white px-3 py-1.5 w-20 rounded-3xl cursor-pointer"
            >
              {isPending ? "Loading..." : "Reply"}
            </Button>
          </div>
        </div>
      </form>
      <ReplyList threadId={params.id} />
    </>
  );
}

export default ThreadDetail;
