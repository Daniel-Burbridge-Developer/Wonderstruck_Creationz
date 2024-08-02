import React from 'react';
import { Link } from 'react-router-dom';
import categoriesData from './categoryData';

const Category = ({ match }) => {
  // match.params.category contains the category part of the URL
  const category = categoriesData.find(
    (c) => c.category === match.params.category,
  );

  if (!category) return <div>Category not found</div>;

  return (
    <div>
      <h1>{category.category}</h1>
      <ul>
        {category.subcategories.map((sub, index) => (
          <li key={index}>
            <Link to={`${match.url}/${sub.subcategory}`}>
              {sub.subcategory}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
