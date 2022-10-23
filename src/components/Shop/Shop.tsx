import React from 'react';
import ProductList from './ProductList/ProductList';
export interface ShopInterface {}

const Shop: React.FC<ShopInterface> = () => {
  return (
    <>
      <ProductList />
    </>
  );
};

export default Shop;
