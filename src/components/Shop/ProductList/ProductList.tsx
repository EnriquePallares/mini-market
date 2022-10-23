import { Product } from '@/types/entities';
import React, { useEffect } from 'react';
import { selector, actionsCreators } from '@/features/products';
import { useDispatch, useSelector } from 'react-redux';
export interface ProductListInterface {}

const ProductList: React.FC<ProductListInterface> = () => {
  const dispatch = useDispatch();
  const {
    products: { dataProducts },
  } = useSelector((state: any) => selector(state));

  useEffect(() => {
    dispatch(actionsCreators.list());
  }, [dispatch]);

  return (
    <section className="container mx-auto px-3 mt-4 rounded bg-slate-100">
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-3">
          <h3 className="border-b-2 py-7 border-blue-700 text-4xl font-medium">
            Catálogo de productos
          </h3>

          <div className="grid grid-cols-3 gap-4 py-4">
            {dataProducts.map((product: Product) => (
              <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img
                  key={product.sku}
                  src={product.image}
                  alt={product.name}
                  className="rounded-lg h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="border-b-2 py-7 border-blue-700 text-4xl font-medium">
            Dynamic Title
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
