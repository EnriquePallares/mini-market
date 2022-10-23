import { Product } from '@/types/entities';
import React from 'react';
export interface ProductDetailInterface {}

const ProductDetail: React.FC<{ product: Product | null }> = ({ product }) => {
  return (
    <div className="product-detail mt-4">
      <img src={product?.image} alt={product?.name} />

      <div className="flex justify-between items-center border-b border-primary mt-4">
        <div className="info">
          <span className="text-lg font-semibold">
            {product?.name}
            <span className="text-primary"> • ${product?.price}</span>
          </span>
        </div>
      </div>

      <p className="font-normal py-2 text-gray-700 dark:text-gray-400 border-b border-primary">
        {product?.description}
      </p>
    </div>
  );
};

export default ProductDetail;
