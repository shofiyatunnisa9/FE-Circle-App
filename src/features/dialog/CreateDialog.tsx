import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useThread } from "@/hooks/useThread";
import { schemaThread, type schemaThreadDTO } from "@/lib/schema/schemaThread";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { LuImagePlus } from "react-icons/lu";
import { useCurrentUser } from "@/hooks/useAuth";

function CreateDialog() {
  const queryClient = useQueryClient();
  const { mutateCreateThread, isPending } = useThread();
  const { profile } = useCurrentUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: formReset,
    setValue,
  } = useForm<schemaThreadDTO>({
    mode: "onChange",
    resolver: zodResolver(schemaThread),
  });

  // Handler untuk file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setValue("images", [e.target.files[0]]);
    }
  };

  const handlePost = (data: schemaThreadDTO) => {
    mutateCreateThread(data, {
      onSuccess: () => {
        formReset();
        queryClient.invalidateQueries({ queryKey: ["threads"] });
      },
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"sho"}
          className="items-center basis-128 bg-green-500 m-5 p-3 w-50 rounded-3xl cursor-pointer"
        >
          Create Post
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-950 border-0 text-gray-400">
        <DialogTitle> Create Post</DialogTitle>
        <form onSubmit={handleSubmit(handlePost)}>
          <div className="flex mb-5">
            <Avatar className="mt-1.5">
              <AvatarImage
                className="rounded-full size-8"
                src={profile?.avatar || "https://github.com/shadcn.png"}
              />
              <AvatarFallback>{profile?.fullname?.[0] || "U"}</AvatarFallback>
            </Avatar>

            <Input
              placeholder="What is happening?!"
              type="text"
              id="content"
              className="border-none"
              {...register("content")}
            />
            {errors.content && (
              <p className="text-red-600">{errors.content.message}</p>
            )}
          </div>
          <DialogFooter className="border-t border-gray-500">
            <div className="flex gap-90 mt-5">
              <label htmlFor="image">
                <LuImagePlus
                  size={30}
                  className="text-green-500 cursor-pointer "
                />
              </label>
              <Input
                type="file"
                id="image"
                hidden
                accept="image/*"
                onChange={handleFileChange}
              />
              <Button
                type="submit"
                variant={"sho"}
                className="cursor-pointer bg-green-500 rounded-4xl text-gray-100"
                disabled={isPending}
              >
                {isPending ? "Loading..." : "Post"}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateDialog;
