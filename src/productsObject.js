import categories from './categoriesObject';

let products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100.0,
    category: categories[0].name,
    subCategories: categories[0].subCategories[0],
    stock: 10,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 104.0,
    category: categories[1].name,
    subCategories: categories[2].subCategories[1],
    stock: 8,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 3.0,
    category: categories[0].name,
    subCategories: categories[0].subCategories[0],
    stock: 84,
  },
];

export default products;
