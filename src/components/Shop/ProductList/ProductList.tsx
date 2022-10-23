import { Product } from '@/types/entities';
import React, { useEffect, useState } from 'react';
import { selector, actionsCreators } from '@/features/products';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetail from './ProductDetail/ProductDetail';
export interface ProductListInterface {}

const ProductList: React.FC<ProductListInterface> = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useDispatch();

  const {
    products: { dataProducts },
  } = useSelector((state: any) => selector(state));

  const handleProduct = (product: Product) => {
    setProduct(product);
  };

  useEffect(() => {
    dispatch(actionsCreators.list());
  }, [dispatch]);

  return (
    <section className="container mx-auto px-3 mt-4">
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-3">
          <h3 className="border-b-2 py-4 text-primary border-primary text-2xl font-medium">
            Store
          </h3>

          <div className="grid grid-cols-3 gap-4 py-4">
            {dataProducts.map((product: Product) => (
              <div
                key={product.sku}
                className="cursor-pointer"
                onClick={() => handleProduct(product)}
              >
                <img
                  key={product.sku}
                  src={product.image}
                  alt={product.name}
                  className="py-2 px-7 border border-gray-400"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="border-b-2 border-primary py-4">
            <h3
              className={`text-2xl font-medium text-primary ${
                product ? 'visible' : 'invisible'
              }`}
            >
              Product
            </h3>
          </div>

          {product ? (
            <ProductDetail product={product} />
          ) : (
            <p className="font-normal text-gray-500 py-4">
              Please choose a product on the left
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
