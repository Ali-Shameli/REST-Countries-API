import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex h-14 w-full max-w-md items-center gap-4 rounded-md px-6 shadow-md bg-(--elements)">
      <Search size={18} />

      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
};

export default SearchBar;