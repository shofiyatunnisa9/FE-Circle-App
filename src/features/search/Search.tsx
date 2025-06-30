import { Input } from "@/components/ui/input";
import { LuUserRoundSearch } from "react-icons/lu";
function Search() {
  return (
    <div className="p-1 m-3 bg-gray-600 rounded-full border-gray-500 ">
      <div className="flex justify-center items-center gap-2">
        <LuUserRoundSearch size={20} className="ml-3" />
        <Input placeholder="Search your friend " className="border-none" />
      </div>
    </div>
  );
}
export default Search;
