import { Product } from '@/types/entities';
import React, { useEffect, useState } from 'react';
import { selector, actionsCreators } from '@/features/products';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetail from './ProductDetail/ProductDetail';
export interface ProductListInterface {}

const ProductList: React.FC<ProductListInterface> = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useDispatch();

  const numberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
  });

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
    <section className="container mx-auto px-3 mt-4 rounded bg-white">
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-3">
          <h3 className="border-b-2 py-7 border-blue-700 text-4xl font-medium">
            Catálogo de productos
          </h3>

          <div className="grid grid-cols-3 gap-4 py-4 max-h-[85vh] overflow-y-auto">
            {dataProducts.map((product: Product) => (
              <div
                key={product.sku}
                className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md cursor-pointer dark:bg-gray-800 dark:border-gray-700"
                onClick={() => handleProduct(product)}
              >
                <img
                  key={product.sku}
                  src={product.image}
                  alt={product.name}
                  className="rounded-t-lg object-cover w-full h-72"
                />

                <div className="flex flex-col p-5">
                  <h5 className="text-2xl font-bold mb-10 tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                  </h5>

                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {numberFormat.format(product.price)}
                    </span>
                    <a
                      href="#"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Agregar al carrito
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="border-b-2 border-blue-700 py-7">
            <h3
              className={`text-4xl font-medium ${
                product ? 'visible' : 'invisible'
              }`}
            >
              Producto
            </h3>
          </div>

          {product ? (
            <ProductDetail product={product} />
          ) : (
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Por favor, escoge un producto
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
