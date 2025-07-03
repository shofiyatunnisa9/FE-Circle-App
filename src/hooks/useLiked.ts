import { api } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLiked() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (threadId: string) => {
      const res = await api.post("/like", { threadId });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["thread"] });
    },
  });
}
