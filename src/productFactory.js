const CreateProduct = (name, price, stock, newFlag, saleFlag) => {
  let product = {
    name: name,
    price: price,
    stock: stock,
    newFlag: newFlag,
    saleFlag: saleFlag,
  };
  return product;
};
export default CreateProduct;
