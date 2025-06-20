import { Input } from "@/components/ui/input";
import { LuUserRoundSearch } from "react-icons/lu";
function Search() {
  return (
    <div className="p-5">
      <div className="flex justify-center items-center gap-2">
        <LuUserRoundSearch size={20} />
        <Input
          placeholder="Search your friend"
          className="bg-gray-600 border-gray-500 rounded-full"
        />
      </div>
    </div>
  );
}
export default Search;
