import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export function useSuggest() {
  return useQuery({
    queryKey: ["suggest"],
    queryFn: async () => {
      const res = await api.get("/suggest");
      return res.data.suggestUsers ?? [];
    },
  });
}
