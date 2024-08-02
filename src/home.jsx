import React from 'react';
import './index.css';
import CategoryCard from './categoryCard';
import categoriesData from './categoryData';

function Home() {
  return (
    <>
      <div className="flex-grow"></div>
      <section className="flex flex-row justify-center p-4 align-bottom">
        {categoriesData.categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </section>
    </>
  );
}

export default Home;
