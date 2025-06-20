import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Reset() {
  return (
    <div className="grid w-screen h-screen gap-3 p-40 place-content-center">
      <h1 className="text-5xl text-green-400 ">circle</h1>
      <p className="text-white">Reset password</p>
      <Input
        className="w-sm"
        type="newPassword"
        id="newPassword"
        placeholder="New Password"
      />
      <Input
        className="w-sm"
        type="confirmPassword"
        id="confirmPassword"
        placeholder="Confirm New Password"
      />
      <Button className="basis-128 bg-green-400">Create New Password</Button>
    </div>
  );
}

export default Reset;
