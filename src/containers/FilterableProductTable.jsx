import { useState } from "react";
import productRows from "../components/productRow";

function FilterableProductTable() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is the container</h1>
      <productRows />
    </>
  );
}

export default FilterableProductTable;
