import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export function useSearch(query: string) {
  return useQuery({
    queryKey: ["search", query],
    queryFn: async () => {
      const res = await api.get(`/search?q=${query}`);
      return res.data.data;
    },
    enabled: query.length > 2,
    staleTime: 1000 * 60, //cache 1 menit
  });
}
