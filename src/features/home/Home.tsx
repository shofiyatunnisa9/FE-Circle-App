import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { LuImagePlus } from "react-icons/lu";

function Home({ onPost }: { onPost: (text: string) => void }) {
  const [text, setText] = useState("");
  const handleSubmit = () => {
    if (text.trim()) {
      onPost(text.trim());
      setText("");
    }
  };

  return (
    <div className="p-5 w-auto border-gray-700 border-y">
      <h1 className="font-bold text-2xl mb-3">Home </h1>
      <div className="flex justify-center items-center gap-3">
        <Avatar className="">
          <AvatarImage
            className="rounded-full size-10"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Input
          placeholder="What's Happening?!"
          className="border-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="image">
          <LuImagePlus size={35} className="text-green-500 cursor-pointer " />
        </label>
        <Input type="file" id="image" hidden />
        <Button
          onClick={handleSubmit}
          variant={"sho"}
          className="mt-1 bg-green-500 text-white px-3 py-1.5 w-20 rounded-3xl cursor-pointer"
        >
          Post
        </Button>
      </div>
    </div>
  );
}

export default Home;
