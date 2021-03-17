import React from "react";
import { Lottie } from "@crello/react-lottie"
import { Link } from "react-router-dom";
import Product from "../components/Product";

import ecommerce from "../lottie-json/9704-ecommerce.json";
import companyBg from "../assets/images/olena-sergienko-W2BI02QOncg-unsplash.jpg";

const LandingPage = () => {
  return (
    <>
      <section id="hero" className="grid grid-cols-1 lg:grid-cols-5 gap-2 mx-auto mb-16 w-4/5 lg:w-3/4 ">
        <div className="col-span-1 lg:col-span-3 flex flex-col justify-center">
          <h1 className="text-6xl lg:text-7xl	font-sans	font-extrabold">Laptops. Evolved</h1>
          <h4 className="text-lg font-semibold text-gray-500 mt-8">This should be the subtitle. Lorem ipsum doler sit amet.</h4>
          <Link to="/products" className="w-fitContent mx-auto lg:m-0">
            <button className="tracking-widest font-bold capitalize cursor-pointer text-gray-900 rounded-3xl bg-teal-300 my-4 mt-16 py-3 px-10 shadow-md">
              See all products
            </button>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2 w-3/4 lg:w-full mx-auto">
          <Lottie 
            config={{animationData: ecommerce, loop: true}}
            speed={1}
          />
        </div>
      </section>
      <section id="products" className="mb-16 mx-auto w-4/5 ">
        <h1 className="text-4xl font-sans	font-extrabold mx-0 md:mx-6 lg:mx-12">Our bestsellers</h1>
        <div className="mx-auto w-full flex flex-row flex-wrap justify-start">
          <Product hiddenDetails/>
          <Product hiddenDetails/>
          <Product hiddenDetails/>
        </div>
      </section>
      <section id="hero" className="grid grid-cols-1 lg:grid-cols-5 gap-2 mx-auto mb-16 w-4/5 lg:w-3/4 ">
        <div className="col-span-1 lg:col-span-3 flex flex-col justify-center">
          <h1 className="text-6xl lg:text-7xl	font-sans	font-extrabold">Our company</h1>
          <h4 className="text-lg font-semibold text-gray-500 mt-8 mr-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra varius ex viverra ultricies. Aliquam sit amet sem at est dictum ornare. Donec bibendum venenatis sagittis. Aliquam sit amet erat arcu. Nam bibendum enim non ligula rutrum, sit amet tempus est pharetra. Quisque sed nisl a diam mollis elementum ut ac purus. Curabitur imperdiet faucibus iaculis. In vestibulum enim sed felis mollis semper. Nullam mollis a libero sollicitudin efficitur. Vivamus sodales vehicula sapien, quis blandit tortor aliquam vitae.
          </h4>
          <Link to="/contact" className="w-fitContent mx-auto lg:m-0">
            <button className="tracking-widest font-bold capitalize cursor-pointer text-gray-900 rounded-3xl bg-teal-300 my-4 mt-16 py-3 px-10 shadow-md">
              Contact us
            </button>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2 w-3/4 lg:w-full mx-auto">
          <img src={companyBg} className="w-full" alt="company" />
        </div>
      </section>
    </>
  );
}

export default LandingPage;