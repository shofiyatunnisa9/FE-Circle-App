import { api } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLiked() {
  const queryClient = useQueryClient();

  return useMutation({
    // Fungsi untuk mengirim request like ke backend
    mutationFn: async (threadId: string) => {
      const response = await api.post("/like", { threadId });
      return response.data;
    },

    // Setelah berhasil, refresh data thread
    onSuccess: () => {
      // Refresh data thread di semua halaman
      queryClient.invalidateQueries({ queryKey: ["threads"] });
      queryClient.invalidateQueries({ queryKey: ["thread"] });
      queryClient.invalidateQueries({ queryKey: ["user-threads"] });
    },

    // Jika gagal, tampilkan error
    onError: (error) => {
      console.error("Gagal melakukan like:", error);
    },
  });
}
