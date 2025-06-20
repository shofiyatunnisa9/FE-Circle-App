import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function EditDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="items-center bg-transparent   rounded-3xl cursor-pointer mt-6"
        >
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-800 border-0 text-white">
        <h1>Edit Profile</h1>
        <div className="w-full h-20 rounded-lg bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 mb-[-60px] "></div>
        <div className="flex justify-between  items-center mt-2 px-4">
          <div className="flex gap-25">
            <label htmlFor="image">
              <Avatar className="size-15">
                <AvatarImage
                  className="border-gray-800 border-4 rounded-full"
                  src="https://github.com/shadcn.png"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </label>
            <Input type="file" id="image" hidden />
          </div>
        </div>

        <Input placeholder="Nama" className="border-gray-500 border-2" />
        <Input placeholder="Username" className="border-gray-500 border-2" />
        <Textarea
          placeholder="Bio"
          id="content"
          className="border-gray-500 border-2"
        />

        <DialogFooter className="border-t border-gray-500">
          <div className="flex gap-90 mt-5">
            <Button
              type="submit"
              variant={"sho"}
              className="cursor-pointer bg-green-500 rounded-4xl text-gray-100"
            >
              Save
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default EditDialog;
