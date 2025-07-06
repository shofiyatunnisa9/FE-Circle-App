import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Forgot() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/forgot", {
        email,
      });
      setMessage("Reset link sent! Check your email");
      console.log("Token : ", res.data.token);
    } catch (error) {
      setMessage("Failed to send reset link");
    }
  };

  return (
    <div className="grid w-screen h-screen gap-3 p-40 place-content-center">
      <h1 className="text-5xl text-green-400 font-bold ">circle</h1>
      <p className="text-white">Forget password</p>
      <Input
        className="w-sm"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email/Username"
      />
      <Button onClick={handleSend} className="basis-128 bg-green-400">
        Send Intruction
      </Button>
      {message && <p className="text-sm text-gray-500">{message}</p>}
      <div>
        <p className="text-white text-left">
          Already an account ?
          <Link className="text-green-400" to={"/reset/:token"}>
            Reset
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Forgot;
