import React from 'react';
import { useParams } from 'react-router-dom';
import categoriesData from './categoryData';
import ProductCard from './ProductCard'; // Assuming you have a component to display individual products

const SubCategory = () => {
  let { category, subCategory } = useParams();
  const categoryData = categoriesData.categories.find(
    (cat) => cat.url.split('/').pop() === category,
  );

  if (!categoryData) return <h2>Category not found</h2>;

  const subCategoryData = categoryData.subCategories.find(
    (subCat) => subCat.url.split('/').pop() === subCategory,
  );

  if (!subCategoryData) return <h2>Subcategory not found</h2>;

  return (
    <>
      <div className="flex-grow items-center">
        <h1 className="my-8 text-center text-9xl font-bold text-black">
          {subCategoryData.name}
        </h1>
      </div>
      <section className="flex flex-row justify-center p-4 align-bottom">
        {subCategoryData.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export default SubCategory;
