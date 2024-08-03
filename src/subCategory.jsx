import React from 'react';
import { Link } from 'react-router-dom';

const Subcategory = ({ match }) => {
  // Find the category first
  const category = categoriesData.find(
    (c) => c.category === match.params.category,
  );

  // Find the subcategory within the found category
  const subcategory = category?.subcategories.find(
    (sub) => sub.subcategory === match.params.subcategory,
  );

  if (!subcategory) return <div>Subcategory not found</div>;

  return (
    <div>
      <h1>{subcategory.subcategory}</h1>
      <ul>
        {subcategory.products.map((product, index) => (
          <li key={index}>
            <Link to={`${match.url}/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subcategory;
