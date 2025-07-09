import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useThread } from "@/hooks/useThread";
import { schemaThread, type schemaThreadDTO } from "@/lib/schema/schemaThread";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCurrentUser } from "@/hooks/useAuth";

import { useForm } from "react-hook-form";
import { LuImagePlus } from "react-icons/lu";

function Home() {
  const { mutateCreateThread, isPending } = useThread();
  const { profile } = useCurrentUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: formReset,
  } = useForm<schemaThreadDTO>({
    mode: "onChange",
    resolver: zodResolver(schemaThread),
  });

  const handlePost = (data: schemaThreadDTO) => {
    mutateCreateThread(data, {
      onSuccess: () => {
        formReset();
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(handlePost)}>
      <div className="p-5 w-auto border-gray-700 border-y">
        <h1 className="font-bold text-2xl mb-3">Home </h1>
        <div className="flex justify-center items-center gap-3">
          <img
            src={profile?.avatar || "https://github.com/shadcn.png"}
            className="rounded-full size-8"
          />

          <Input
            placeholder="What's Happening?!"
            className="border-none"
            type="text"
            {...register("content")}
          />
          {errors.content && (
            <p className="text-red-600">{errors.content.message}</p>
          )}
          <label htmlFor="image">
            <LuImagePlus size={35} className="text-green-500 cursor-pointer " />
          </label>
          <Input
            type="file"
            id="image"
            hidden
            accept="image/*"
            {...register("images")}
          />

          <Button
            type="submit"
            variant={"sho"}
            disabled={isPending}
            className="mt-1 bg-green-500 text-white px-3 py-1.5 w-20 rounded-3xl cursor-pointer"
          >
            {isPending ? "Loading..." : "Post"}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Home;
