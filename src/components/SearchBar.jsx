import React from "react";

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <>
      <form className="relative flex items-centers justify-center">
        <input
          type="text"
          placeholder="search..."
          value={filterText}
          onChange={onFilterTextChange}
          className="border-0 focus:ring-0 focus:outline-0 w-[60%] bg-slate-600 rounded-l-lg pl-4 text-sm text-slate-200"
        />
        <button class="ring-4 ring-slate-600 ring-offset-[0.55rem] shadow-transparent ring-offset-slate-800 hover:ring-offset-rose-500  hover:bg-rose-500 bg-transparent rounded-[50%] active:scale-95 cursor-pointer">
          <h2 class="rounded-full border-4 border-rose-500 w-16 h-16  text-rose-500 text-2xl text-center justify-center flex items-center font-semibold hover:border-slate-600 hover:text-slate-600">
            GO
          </h2>
        </button>
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
