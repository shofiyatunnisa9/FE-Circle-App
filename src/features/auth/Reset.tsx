import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Reset() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    try {
      await axios.post(`http://localhost:3000/api/reset/${token}`, {
        newPassword,
        confirmPass: confirmPassword,
      });
      setMessage("Password successfully updated.");
    } catch (err) {
      setMessage("Failed to reset password.");
    }
  };
  return (
    <div className="grid w-screen h-screen gap-3 p-40 place-content-center">
      <h1 className="text-5xl text-green-400 ">circle</h1>
      <p className="text-white">Reset password</p>
      <Input
        className="w-sm"
        type="password"
        id="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="New Password"
      />
      <Input
        className="w-sm"
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm New Password"
      />
      <Button onClick={handleReset} className="basis-128 bg-green-400">
        Create New Password
      </Button>
      {message && <p className="text-sm text-gray-500">{message}</p>}
    </div>
  );
}

export default Reset;
