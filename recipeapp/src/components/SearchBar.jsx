import React, { useState } from "react";

const SearchBar = ({searchRequest}) => {
    const [searchText, setSearchText] = useState("");

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        searchRequest({
            q: searchText
        })
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="searchbar-wrapper">
                    <div className="" style={{ marginRight: 5 }}>
                        <input
                            type="text"
                            autoComplete="off"
                            placeholder="Search Recipes"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="search-button">
                        <button type="submit" className="">
                            search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
