import type { typeThread, typeThreadPayload } from "@/lib/schema/schemaThread";
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
