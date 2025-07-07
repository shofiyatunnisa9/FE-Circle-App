import { api } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useFollow() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (followingId: string) => {
      const response = await api.post("/toggle", { followingId });
      return response.data;
    },

    onSuccess: (data, followingId) => {
      // Refresh data di semua halaman yang relevan
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      queryClient.invalidateQueries({ queryKey: ["following"] });
      queryClient.invalidateQueries({ queryKey: ["followers"] });
      queryClient.invalidateQueries({ queryKey: ["suggest"] });
      console.log("Follow queries invalidated");
    },

    onError: (error) => {
      console.error("Gagal melakukan follow/unfollow:", error);
    },
  });
}

// Hook untuk follow dengan mutation key spesifik per user
export function useFollowUser(userId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["follow", userId],
    mutationFn: async () => {
      const response = await api.post("/follow/toggle", {
        followingId: userId,
      });
      return response.data;
    },

    onSuccess: (data) => {
      // Refresh data di semua halaman yang relevan
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      queryClient.invalidateQueries({ queryKey: ["following"] });
      queryClient.invalidateQueries({ queryKey: ["followers"] });
      queryClient.invalidateQueries({ queryKey: ["suggest"] });
      console.log("Follow queries invalidated");
    },

    onError: (error) => {
      console.error("Gagal melakukan follow/unfollow:", error);
    },
  });
}
