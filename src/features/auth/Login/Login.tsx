import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/useAuth";
import { schemaLogin, type loginSchemaDTO } from "@/lib/schema/schemaAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const { mutate, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(schemaLogin),
  });

  const onSubmit = (data: loginSchemaDTO) => {
    mutate(data);
  };

  return (
    <form
      className="w-full min-h-screen flex items-center justify-center px-4 py-8 sm:px-8 sm:py-12 md:px-20 md:py-24"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full max-w-sm grid gap-3">
        <h1 className="text-5xl text-green-400 font-bold ">circle</h1>
        <p className="text-white">Login to Circle</p>
        <Input
          className="w-sm text-white"
          id="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        <Input
          className="w-sm text-white"
          type="password"
          id="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
        <div>
          <p className="text-white text-right text-sm">
            <Link to={"/forgot"}>Forgot Password </Link>
          </p>
        </div>

        <Button
          className="basis-128 bg-green-400 cursor-pointer"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Login"}
        </Button>
        <div>
          <p className="text-white">
            Don't have an account yet ?
            <Link className="text-green-400 cursor-pointer" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Login;
