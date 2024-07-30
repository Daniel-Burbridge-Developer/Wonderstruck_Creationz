import React from 'react';
import './index.css';
import CategoryCard from './categoryCard';
import categories from './categoriesObject';

function Home() {
  return (
    <>
      <div className="flex-grow"></div>
      <section className="flex flex-row justify-center p-4 align-bottom">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </section>
    </>
  );
}

export default Home;
