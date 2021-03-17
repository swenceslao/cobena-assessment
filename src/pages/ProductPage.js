import React from "react";
import Product from "../components/Product";

const ProductPage = () => {
  return (
    <section id="hero" className="mx-auto w-3/4">
      <h1 className="text-4xl font-sans	font-extrabold mx-0 md:mx-6 lg:mx-12">All laptops</h1>
      <div className="mx-auto w-full flex flex-row flex-wrap justify-start">
        <Product/>
        <Product/>
        <Product/>
      </div>
    </section>
  );
}

export default ProductPage;