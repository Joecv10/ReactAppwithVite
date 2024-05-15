import { useState } from "react";
import ProductRows from "../components/ProductRow";

function FilterableProductTable() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is the container</h1>
      <ProductRows />
    </>
  );
}

export default FilterableProductTable;
