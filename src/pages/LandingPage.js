import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

import ecommerce from "../lottie-json/9704-ecommerce.json";
import ecommerce_items from "../lottie-json/29372-ecommerce-items-loading-animation.json";

const LandingPage = () => {
  return (
    <section id="hero" className="grid grid-cols-1 lg:grid-cols-5 gap-2 mx-auto w-4/5 lg:w-3/4 ">
      <div className="col-span-1 lg:col-span-3 flex flex-col justify-center">
        <h1 className="text-6xl lg:text-7xl	font-sans	font-extrabold">Sell anything, anytime</h1>
        <h4 className="text-lg font-semibold text-gray-500 mt-8">This should be the subtitle. Lorem ipsum doler sit amet.</h4>
        <Link to="/products" className="w-fitContent mx-auto lg:m-0">
          <button className="tracking-widest font-bold uppercase cursor-pointer text-gray-900 rounded-3xl bg-teal-300 my-4 mt-16 py-3 px-10 shadow-md">
            See all products
          </button>
        </Link>
      </div>
      <div className="col-span-1 lg:col-span-2 w-3/4 lg:w-full mx-auto">
        <Lottie animationData={ecommerce} loop={true} />
      </div>
    </section>
  );
}

export default LandingPage;