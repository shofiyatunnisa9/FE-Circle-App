import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { LuImagePlus } from "react-icons/lu";

function CreateDialog() {
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
        <div className="flex mb-5">
          <Avatar className="mt-1.5">
            <AvatarImage
              className="rounded-full size-8"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Textarea
            placeholder="What is happening?!"
            id="content"
            className="border-none"
          />
        </div>
        <DialogFooter className="border-t border-gray-500">
          <div className="flex gap-90 mt-5">
            <LuImagePlus className="text-green-500" size={30} />
            <Button
              type="submit"
              variant={"sho"}
              className="cursor-pointer bg-green-500 rounded-4xl text-gray-100"
            >
              Create
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateDialog;
