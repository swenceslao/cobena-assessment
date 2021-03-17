import React from "react";
import Product from "../components/Product";

import laptops from "../products.json";

const ProductPage = () => {
  return (
    <section id="products" className="w-full bg-gray-100 py-10">
      <div className="mx-auto w-3/4">
        <h1 className="text-4xl font-sans	font-extrabold mx-0 md:mx-6 lg:mx-12 mb-10">All laptops</h1>
        <div className="mx-auto w-full flex flex-row flex-wrap justify-start">
          {laptops.map((laptop, index) => (
            <Product key={index} laptop={laptop} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductPage;