import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

function Forgot() {
  return (
    <div className="grid w-screen h-screen gap-3 p-40 place-content-center">
      <h1 className="text-5xl text-green-400 font-bold ">circle</h1>
      <p className="text-white">Forget password</p>
      <Input
        className="w-sm"
        type="email"
        id="email"
        placeholder="Email/Username"
      />
      <Button className="basis-128 bg-green-400">Send Intruction</Button>
      <div>
        <p className="text-white text-left">
          Already an account ?
          <Link className="text-green-400" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Forgot;
