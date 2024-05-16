import React from "react";

//Have to implement the json API mockup
const ProductCategoryRow = ({ category }) => {
  return (
    <>
      <tr>
        <th>{category}</th>
      </tr>
    </>
  );
};

export default ProductCategoryRow;
