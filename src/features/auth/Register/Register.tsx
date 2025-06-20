import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { schemaAuth, type authSchemaDTO } from "@/lib/schema/schemaAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/utils/api";
import { toast } from "sonner";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<authSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(schemaAuth),
  });
  const submit = async (data: authSchemaDTO) => {
    try {
      console.log(data);
      const res = await api.post("/register", data);
      toast.success("Register succes!");
      navigate("/login");
      return res.data;
    } catch (error: any) {
      const message = error.response?.data?.message || "Something went wrong!";
      toast.error(message);
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="grid w-screen h-screen gap-3 p-40 place-content-center">
        <h1 className="text-5xl text-green-400 font-bold ">circle</h1>
        <p className="text-white">Create account Circle</p>
        <p></p>
        <Input
          className="w-sm"
          id="username"
          placeholder="username"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-red-600">{errors.username.message}</p>
        )}
        <Input id="email" placeholder="Email" {...register("email")} />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        <Input
          type="password"
          id="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
        <Button className="basis-128 bg-green-400">Create</Button>
        <div>
          <p className="text-white text-left">
            Already have account ?
            <Link className="text-green-400" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Register;
