import type { schemaThreadDTO } from "@/lib/schema/schemaThread";
import { api } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export function useThread() {
  const queryClient = useQueryClient();
  const {
    mutateAsync: mutateCreateThread,
    data: dataCreateThread,
    isPending,
    reset: resetMutation,
  } = useMutation({
    mutationKey: ["createThreads"],
    mutationFn: async (data: schemaThreadDTO) => {
      const formData = new FormData();
      formData.append("content", data.content);
      formData.append("images", data.images[0]);

      const res = await api.post("/post", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        const message = error.response?.data.message || "Unknow Error";
        toast.error(message);
      } else {
        console.error("Unexpected Error :", error);
      }
    },
    onSuccess: () => {
      toast.success("Thread Added");
      queryClient.invalidateQueries({ queryKey: ["threads"] });
    },
  });

  return { mutateCreateThread, dataCreateThread, isPending, resetMutation };
}
