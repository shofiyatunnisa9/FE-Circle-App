import type {
  typeThreadPayload,
  typeThreadDetailResponse,
} from "@/lib/schema/schemaThread";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useGetThread = () => {
  return useQuery({
    queryKey: ["threads"],
    queryFn: async () => {
      const res = await api.get<typeThreadPayload>("/threads");
      return res.data;
    },
  });
};

export const useGetThreadById = (id: string) => {
  return useQuery({
    queryKey: ["thread", id],
    queryFn: async () => {
      if (!id) {
        throw new Error("Thread ID is required");
      }
      const res = await api.get<typeThreadDetailResponse>(`/threads/${id}`);
      return res.data.thread;
    },
  });
};
