import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="mx-2 w-full max-w-sm overflow-hidden rounded-lg bg-gray-400 bg-white bg-opacity-75 shadow-lg">
      <div className="relative">
        <img
          src={product.image_url}
          alt={product.name}
          className="h-64 w-full object-cover"
        />
        <div className="text-primary-foreground absolute right-4 top-4 rounded-full bg-pink-500 px-3 py-1 text-xs font-medium">
          New
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
        <p className="text-muted-foreground mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price}</span>
          <button className="rounded bg-blue-500 px-2 py-1 text-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
