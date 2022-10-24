import { Product } from '@/types/entities';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
export interface ProductDetailInterface {}

const ProductDetail: React.FC<{
  product: Product | null;
  addToCart: Function;
}> = ({ product, addToCart }) => {
  return (
    <div className="product-detail mt-4">
      <img src={product?.image} alt={product?.name} />

      <div className="flex justify-between items-center border-b border-primary mt-4 pb-2">
        <div className="info">
          <span className="text-lg font-semibold">
            {product?.name}
            <span className="text-primary"> • ${product?.price}</span>
          </span>
        </div>

        <div className="inline-flex rounded-md shadow-sm" role="group">
          <FontAwesomeIcon
            icon={faMinus}
            role="button"
            className="bg-gray-200 text-black py-2 px-4"
          />
          <FontAwesomeIcon
            icon={faPlus}
            role="button"
            className="bg-primary text-white py-2 px-4"
            onClick={() => addToCart(product?.sku)}
          />
        </div>
      </div>

      <p className="font-normal py-2 text-gray-700 dark:text-gray-400 border-b border-primary">
        {product?.description}
      </p>
    </div>
  );
};

export default ProductDetail;
