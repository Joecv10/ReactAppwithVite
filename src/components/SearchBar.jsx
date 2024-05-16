import React from "react";

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="search..."
          value={filterText}
          onChange={onFilterTextChange}
        />
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={onInStockOnlyChange}
          />
          {""}
          Only show products in stock
        </label>
      </form>
    </>
  );
};

export default SearchBar;
