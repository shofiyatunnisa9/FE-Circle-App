import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useReset } from "@/hooks/useAuth";
import { schemaReset, type resetSchemaDTO } from "@/lib/schema/schemaAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

function Reset() {
  const { mutate, isPending } = useReset();
  const { token } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<resetSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(schemaReset),
  });

  const submit = (data: resetSchemaDTO) => {
    if (!token) {
      return;
    }
    mutate({ token, data });
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="grid w-screen h-screen gap-3 p-40 place-content-center">
        <h1 className="text-5xl text-green-400 font-bold">circle</h1>
        <p className="text-white">Reset password</p>
        <Input
          className="w-sm"
          type="password"
          id="newPassword"
          placeholder="New Password"
          {...register("newPassword")}
        />
        {errors.newPassword && (
          <p className="text-rose-500 text-sm">{errors.newPassword.message}</p>
        )}
        <Input
          className="w-sm"
          type="password"
          id="confirmPassword"
          placeholder="Confirm New Password"
          {...register("confirmPass")}
        />
        {errors.confirmPass && (
          <p className="text-rose-500 text-sm">{errors.confirmPass.message}</p>
        )}

        <Button
          type="submit"
          className=" bg-green-400 cursor-pointer"
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Create New Password"}
        </Button>
      </div>
    </form>
  );
}

export default Reset;
