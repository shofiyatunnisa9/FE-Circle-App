import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearch } from "@/hooks/useSeacrh";
import { useState } from "react";
import { LuUserRoundSearch } from "react-icons/lu";
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
      {isLoading && <p>Loading....</p>}
      {isError && <p>failed to fetch users!!</p>}

      {results.length > 0 && (
        <ul className="mt-4 rounded-lg ">
          {results.map((user: any) => (
            <li
              key={user.id}
              className="flex rounded-2xl items-center gap-3 p-3"
            >
              <Avatar>
                <AvatarImage src={user?.avatar} />
                <AvatarFallback>{user?.fullname?.[0] || "U"}</AvatarFallback>
              </Avatar>

              <div>
                <p className="text-sm text-gray-200">{user.fullname}</p>
                <p className="text-sm font-semibold text-gray-700">
                  @{user.username}
                </p>
              </div>
            </li>
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
