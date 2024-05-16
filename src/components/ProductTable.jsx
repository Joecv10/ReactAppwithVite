import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRows from "./ProductRow";

const ProdcutTable = ({ products, filterText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRows product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <div className="mt-6 w-96 relative h-56">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              Name
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              Price
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ProdcutTable;
