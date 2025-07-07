import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export function useFollowers() {
  return useQuery({
    queryKey: ["followers"],
    queryFn: async () => {
      const response = await api.get("/followers");
      return response.data.followers;
    },
  });
}
