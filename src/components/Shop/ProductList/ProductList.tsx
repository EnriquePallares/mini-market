import React from 'react';
export interface ProductListInterface {}

const ProductList: React.FC<ProductListInterface> = () => {
  return (
    <section className="container mx-auto py-4">
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-3">
          <h3 className="border-b-2 pb-1 border-cyan-500 text-2xl font-medium">Store</h3>
        </div>

        <div>
          <h3 className="border-b-2 pb-1 border-cyan-500 text-2xl font-medium">Dynamic Title</h3>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
