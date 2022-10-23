import { Product } from '@/types/entities';
import React from 'react';
export interface ProductDetailInterface {}

const ProductDetail: React.FC<{ product: Product | null }> = ({ product }) => {
  return (
    <div className="product-detail">
      <img src={product?.image} alt={product?.name} />

      <div className="flex justify-between items-center border-b-2 border-blue-500">
        <div className="info">
          <span className="text-lg font-semibold">
            {product?.name} |{' '}
            <span className="text-blue-500">${product?.price}</span>
          </span>
        </div>
      </div>

      <p className="font-normal text-gray-700 dark:text-gray-400 border-b-2 border-blue-500">
        {product?.description}
      </p>
    </div>
  );
};

export default ProductDetail;
