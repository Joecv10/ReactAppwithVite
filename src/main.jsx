import React from "react";
import ReactDOM from "react-dom/client";
import FilterableProductTable from "./containers/FilterableProductTable.jsx";
import SearchBar from "./components/SearchBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterableProductTable />
  </React.StrictMode>
);
