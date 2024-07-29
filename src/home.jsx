import React from 'react';
import './index.css';
import CategoryCard from './categoryCard';
import categories from './categories';

function Home() {
  return (
    <>
      <div className="flex-grow"></div>
      <section className="flex flex-row justify-center p-4 align-bottom">
        {categories.map((category) => (
          <CategoryCard key={category.id} name={category.name} />
        ))}
      </section>
    </>
  );
}

export default Home;
