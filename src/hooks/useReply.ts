import { api } from "@/utils/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { toast } from "sonner";

type ReplyTypeRequest = {
  content: string;
  images?: File;
  threadId: string;
};

export function useReply() {
  const queryClient = useQueryClient();
  const {
    mutateAsync: repliesMutate,
    isPending,
    reset: resetMutation,
  } = useMutation({
    mutationKey: ["reply"],
    mutationFn: async (payload: ReplyTypeRequest) => {
      const formData = new FormData();
      formData.append("content", payload.content);
      formData.append("threadId", payload.threadId);
      if (payload.images) {
        formData.append("images", payload.images);
      }
      const res = await api.post("/reply", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        const message = error.response?.data.message || "Something Error";
        toast.error(message);
      } else {
        console.error("Error :", error);
      }
    },
    onSuccess: () => {
      toast.success("Reply Added");
      queryClient.invalidateQueries({ queryKey: ["replies"] });
    },
  });

  return { repliesMutate, isPending, resetMutation };
}

export function useReplyList(threadId: string) {
  return useQuery({
    queryKey: ["replies", threadId],
    queryFn: async () => {
      const res = await api.get(`reply/${threadId}`);
      return res.data;
    },
    enabled: !!threadId,
  });
}
