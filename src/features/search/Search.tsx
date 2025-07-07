import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useSearch } from "@/hooks/useSeacrh";
import { useState } from "react";
import { LuUserRoundSearch } from "react-icons/lu";
import { FollowButton } from "../follow/FollowButton";
function Search() {
  const [query, setQuery] = useState("");
  const { data: results = [], isLoading, isError } = useSearch(query);
  return (
    <>
      <div className="p-1 m-3 bg-gray-600 rounded-full border-gray-500 ">
        <div className="flex justify-center items-center gap-2">
          <LuUserRoundSearch size={20} className="ml-3" />
          <Input
            placeholder="Search your friend "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-none"
          />
        </div>
      </div>
      {isLoading && <p className="text-center text-gray-500">Loading....</p>}
      {isError && <p>failed to fetch users!!</p>}

      {results.length > 0 && (
        <ul className="mt-4 rounded-lg ">
          {results.map((user: any) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-4 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    className="rounded-full size-10"
                    src={user.avatar}
                  />
                  <AvatarFallback>{user.fullname?.[0] || "U"}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-bold text-white">
                    {user.fullname}
                  </p>
                  <p className="text-xs text-gray-400">@{user.username}</p>
                </div>
              </div>
              <FollowButton
                userId={user.id}
                initiallyFollowed={user.isFollowed}
              />
            </div>
          ))}
        </ul>
      )}

      {!isLoading && !isError && query.length >= 2 && results.length === 0 && (
        <p className="mt-3 text-sm text-gray-500 text-center">
          No users found.
        </p>
      )}
    </>
  );
}
export default Search;
