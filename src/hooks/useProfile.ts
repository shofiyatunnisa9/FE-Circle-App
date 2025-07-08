import { api } from "@/utils/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FaLeaf } from "react-icons/fa";
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

export function useProfileUser(username: string) {
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profile", username],
    queryFn: async () => {
      const token = localStorage.getItem("acces-token");
      if (!token) {
        throw new Error("Please Login !");
      }
      const response = await api.get(`/profile/${username}`);
      return response.data.profileUser;
    },
    retry: false,
    refetchOnWindowFocus: false,
    enabled: !!username,
  });
  return { profile, isLoading, error: error?.message };
}

export function useThreadProfileUser(username: string) {
  const {
    data: threads,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user-threads", username],
    queryFn: async () => {
      const token = localStorage.getItem("acces-token");
      if (!token) {
        throw new Error("Please Login !");
      }
      const response = await api.get(`/profile/${username}/threads`);
      return response.data;
    },
    retry: false,
    refetchOnWindowFocus: false,
    enabled: !!username,
  });
  return { threads, isLoading, error: error?.message };
}

export function useMediaProfileByUsername(username: string) {
  const {
    data: mediaProfile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["media", username],
    queryFn: async () => {
      const token = localStorage.getItem("acces-token");
      if (!token) {
        throw new Error("Please login again!!");
      }
      const response = await api.get(`/profile/${username}/media`);
      if (response.data.mediaProfile) {
        return response.data.mediaProfile;
      }
      return response.data;
    },
    retry: false,
    refetchOnWindowFocus: false,
    enabled: !!username,
  });

  return { mediaProfile, isLoading, error };
}
