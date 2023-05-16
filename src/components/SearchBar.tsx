import { useState, useEffect } from "react";
import { api } from "~/utils/api";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState<any>(null);

    const handleSearch = async () => {
        const response = await fetch(`/api/search?query=${searchQuery}`);
        const data = await response.json();
        setResults(data);
        setSearchQuery("");
    };

    useEffect(() => {
        console.log("Found:", results);
    }, [results]);

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