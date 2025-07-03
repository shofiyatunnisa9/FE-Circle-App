import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/useAuth";
import { schemaLogin, type loginSchemaDTO } from "@/lib/schema/schemaAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const { mutate } = useLogin();
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
      className="grid w-screen h-screen gap-3 p-40 place-content-center"
      onSubmit={handleSubmit(onSubmit)}
    >
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

      <Button className="basis-128 bg-green-400 cursor-pointer" type="submit">
        Login
      </Button>
      <div>
        <p className="text-white">
          Don't have an account yet ?
          <Link className="text-green-400 cursor-pointer" to={"/register"}>
            Register
          </Link>
        </p>
      </div>
      {/* <p>{isPending ? <span> Loading </span> : <span>Login</span>}</p> */}
    </form>
  );
}

export default Login;
