import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export function useFollowing() {
  return useQuery({
    queryKey: ["following"],
    queryFn: async () => {
      const response = await api.get("/following");
      return response.data.following;
    },
  });
}
