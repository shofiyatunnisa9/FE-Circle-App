import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForgot } from "@/hooks/useAuth";
import { type forgotSchemaDTO, schemaForgot } from "@/lib/schema/schemaAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function Forgot() {
  const { mutate, isPending } = useForgot();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<forgotSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(schemaForgot),
  });

  const submit = (data: forgotSchemaDTO) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="grid w-screen h-screen gap-3 p-40 place-content-center">
        <h1 className="text-5xl text-green-400 font-bold ">circle</h1>
        <p className="text-white">Forget password</p>
        <Input
          className="w-sm"
          type="email"
          id="email"
          placeholder="Email/Username"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-res-500 text-sm">{errors.email.message}</p>
        )}
        <Button
          type="submit"
          className=" bg-green-400 cursor-pointer"
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Send Intruction"}
        </Button>
      </div>
    </form>
  );
}

export default Forgot;
