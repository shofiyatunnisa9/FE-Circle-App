import type { loginSchemaDTO } from "@/lib/schema/schemaAuth";
import { api } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: loginSchemaDTO) => {
      const res = await api.post("/login", data);

      const token = res.data.token;
      return token;
    },
    onSuccess: (data) => {
      Cookie.set("acces-token", data);
      navigate("/");
      toast.success("Login Succes!!");
    },

    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || "Unknow Error";
        toast.error(message);
      } else {
        console.error("Unexpected Error :", error);
      }
    },
  });
  return { mutate, isPending };
}
