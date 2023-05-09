import { useState } from "react";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        // Call API here
        console.log("Searching for:", searchQuery);

        setSearchQuery("");
    };

    return (
        <div className="flex items-center">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-1-md p-2"
                placeholder="Search for users..."
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white rounded-r-md p-2">
                Search
            </button>
        </div>
    );
};

export default SearchBar;