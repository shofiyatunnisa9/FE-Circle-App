import type { forgotSchemaDTO, loginSchemaDTO } from "@/lib/schema/schemaAuth";
import type { resetSchemaDTO } from "@/lib/schema/schemaAuth";
import { api } from "@/utils/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
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
      localStorage.setItem("acces-token", data);
      navigate("/");
      toast.success("Login Succes!!");
    },

    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data.message || "Please check your email or password";
        toast.error(message);
      } else {
        console.error("Unexpected Error :", error);
      }
    },
  });
  return { mutate, isPending };
}

export function useCurrentUser() {
  const {
    data: profile,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const token = localStorage.getItem("acces-token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await api.get("/profile");

      if (response.data.profile) {
        return response.data.profile;
      }

      return response.data;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { profile, loading, error: error?.message || null };
}

export function useUserThreads() {
  const {
    data: threads,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user-threads"],
    queryFn: async () => {
      const token = localStorage.getItem("acces-token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await api.get("/profile-home");
      return response.data;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { threads, isLoading, error: error?.message || null };
}

export function useReset() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({
      token,
      data,
    }: {
      token: string;
      data: resetSchemaDTO;
    }) => {
      const res = await api.patch(`/reset/${token}`, data);
      return res.data.message;
    },
    onSuccess: (data) => {
      toast.success(data);
      navigate("/login");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || error.message;

        toast.error(message);
      } else {
        console.error("Unexpected Error");
      }
    },
  });

  return {
    mutate,
    isPending,
  };
}

export function useForgot() {
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: forgotSchemaDTO) => {
      const res = await api.post("/forgot", data);
      return res.data.message;
    },
    onSuccess: () => {
      toast.success("Check your email for the link reset password");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data.message || error.message || "Error";
        toast.error(message);
      } else {
        console.error("Error:", error);
      }
    },
  });
  return { mutate, isPending };
}
