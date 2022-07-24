import React from "react";

function SearchBar({ sortBy, setSortBy, filterBy, setFilterBy }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy === "alphabetically"}
          onChange={() => setSortBy("alphabetically")}
        />
        Alphabetically
      </label>
      <label>
        <input
          value="Price"
          name="sort"
          checked={sortBy === "price"}
          onChange={() => setSortBy("price")}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select
          onChange={(event) => {
            console.log({ event });
            setFilterBy(event.target.value);
          }}
          value={filterBy}
        >
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
