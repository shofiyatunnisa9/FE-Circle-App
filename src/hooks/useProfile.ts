import { api } from "@/utils/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await api.patch("/profiles", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      toast.success("Profile updated successfully!");
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.message || "Failed to update profile";
      toast.error(message);
    },
  });
}

export function useMediaProfile() {
  const {
    data: mediaProfile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["media"],
    queryFn: async () => {
      const token = localStorage.getItem("acces-token");
      if (!token) {
        throw new Error("Please login again!!");
      }
      const response = await api.get("/media");

      if (response.data.mediaProfile) {
        return response.data.mediaProfile;
      }

      return response.data;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { mediaProfile, isLoading, error };
}
