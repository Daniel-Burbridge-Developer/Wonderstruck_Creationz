import React from 'react';
import { useParams } from 'react-router-dom';
import categoriesData from './categoryData';
import SubCategoryCard from './subCategoryCard';

const Category = () => {
  let { category } = useParams();
  const categoryData = categoriesData.categories.find(
    (cat) => cat.url.split('/').pop() === category,
  );

  if (!categoryData) return <h2>Category not found</h2>;

  return (
    <>
      <div className="flex-grow items-center">
        <h1 className="my-8 text-center text-9xl font-bold text-black">
          {categoryData.name}
        </h1>
      </div>
      <section className="flex flex-row justify-center p-4 align-bottom">
        {categoryData.subCategories.map((subCat) => (
          <SubCategoryCard key={subCat.id} subCategory={subCat} />
        ))}
      </section>
    </>
  );
};

export default Category;
