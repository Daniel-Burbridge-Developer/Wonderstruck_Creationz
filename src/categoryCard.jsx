import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = (props) => {
  return (
    <div className="bg-background mx-2 w-full max-w-sm overflow-hidden rounded-lg bg-gray-400 bg-opacity-75 shadow-lg">
      <div className="relative">
        <Link to={`/${props.category.name}`} prefetch={false}>
          <img
            src={props.category.logo_url}
            alt={props.category.name}
            width={500}
            height={400}
            className="h-64 w-full object-cover"
          />
          <div className="text-primary-foreground absolute right-4 top-4 rounded-full bg-pink-500 px-3 py-1 text-xs font-medium">
            New
          </div>
        </Link>
      </div>
      <div className="p-6">
        <Link to={`/cups`} prefetch={false}>
          <h3 className="mb-2 text-xl font-bold">{props.category.name}</h3>
        </Link>
        <p className="text-muted-foreground mb-4">
          {props.category.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">Explore</span>
          <button size="sm">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
