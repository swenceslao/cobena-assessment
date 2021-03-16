import React, { useState } from "react";
import { Lottie } from '@crello/react-lottie'
import { Link } from "react-router-dom";

import ecommerce from "../lottie-json/9704-ecommerce.json";
import ecommerce_items from "../lottie-json/29372-ecommerce-items-loading-animation.json";
import checkmark from "../lottie-json/checkmark.json";

const LandingPage = () => {
  const [ ram, setRam ] = useState(16);
  const selectedCheckbox = "flex flex-row items-center text-xs font-bold uppercase cursor-pointer rounded-md border border-teal-700 text-teal-600 bg-teal-50 my-3 py-2 px-6 h-10 shadow-md";
  const unselectedCheckbox = "block text-xs font-bold uppercase cursor-pointer rounded-md border border-gray-500 text-gray-800 bg-gray-50 my-3 py-2 px-6 h-10 shadow-md";

  // w-9 h-9 flex items-center justify-center rounded-md text-black 

  const handleRamSelect = (e) => {
    e.preventDefault();
    setRam(Number(e.target.value));
    console.log(e.target.value);
  }

  return (
    <>
      <section id="hero" className="grid grid-cols-1 lg:grid-cols-5 gap-2 mx-auto mb-16 w-4/5 lg:w-3/4 ">
        <div className="col-span-1 lg:col-span-3 flex flex-col justify-center">
          <h1 className="text-6xl lg:text-7xl	font-sans	font-extrabold">Laptops. Evolved</h1>
          <h4 className="text-lg font-semibold text-gray-500 mt-8">This should be the subtitle. Lorem ipsum doler sit amet.</h4>
          <Link to="/products" className="w-fitContent mx-auto lg:m-0">
            <button className="tracking-widest font-bold uppercase cursor-pointer text-gray-900 rounded-3xl bg-teal-300 my-4 mt-16 py-3 px-10 shadow-md">
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
      <section id="products" className="mb-16">
      <div className="w-fitContent border border-gray-300 rounded-md flex flex-row items-center justify-start mx-auto px-8 py-10">
        <Lottie config={{animationData: ecommerce, loop: true}} className="object-cover rounded-lg" />
        <form className="pl-6">
          <div className="flex flex-wrap items-baseline">
            <h1 className="w-full flex-none font-semibold mb-2.5">
              Gigabite Aorous GTX
            </h1>
            <div className="text-4xl leading-7 font-bold text-purple-600">
              &#8369;39,599
            </div>
            <div className="text-sm font-medium text-gray-400 ml-3">
              In stock
            </div>
          </div>
          <div className="mt-6">
            <ul>
              <li className="text-sm">Intel Core i5-10210U</li>
              <li className="text-sm">GTX 1650 TI 4GB GDDR5X</li>
              <li className="text-sm">15.6" 1080p FHD IPS display</li>
              <li className="text-sm">2 USB 3.1 Gen 2 ports</li>
              <li className="text-sm">RJ45 Ethernet port</li>
              <li className="text-sm">HDMI 1.4</li>
            </ul>
          </div>
          <div className="mt-6">
            <div className="uppercase font-bold text-gray-500 text-xs">SELECT RAM</div>
            <div className="flex items-baseline mb-4">
            <div className="space-x-2 flex text-sm font-medium">
              <label>
                <input className="hidden" name="ram" type="radio" value={8} checked={ram === 8} onChange={() => setRam(8)} />
                <button className={ram === 8 ? selectedCheckbox : unselectedCheckbox} value={8} onClick={handleRamSelect}>
                  { ram === 8 && <Lottie 
                                  config={{
                                    animationData: checkmark, 
                                    loop: false
                                  }} 
                                  speed="2"
                                  width="30px"
                                  height="30px"
                                /> 
                  }
                  <span className="ml-1">8 GB</span>
                </button>
              </label>
              <label>
                <input className="hidden" name="ram" type="radio" value={16}  checked={ram === 16} onChange={() => setRam(16)} />
                <button className={ram === 16 ? selectedCheckbox : unselectedCheckbox} value={16} onClick={handleRamSelect}>
                  { ram === 16 && <Lottie 
                                  config={{
                                    animationData: checkmark, 
                                    loop: false
                                  }} 
                                  speed="2"
                                  width="30px"
                                  height="30px"
                                /> 
                  }
                  <span className="ml-1">16 GB</span>
                </button>
              </label>
            </div>
          </div>
          </div>
          <div className="flex space-x-3 mb-4 text-sm font-semibold">
            <div className="flex-auto flex space-x-3">
              <button className="w-1/2 flex items-center justify-center rounded-full bg-purple-700 text-white" type="submit">Buy now</button>
              <button className="w-1/2 flex items-center justify-center rounded-full bg-purple-50 text-purple-700" type="button">Add to bag</button>
            </div>
            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-purple-50 text-purple-700" type="button" aria-label="like">
              <svg width="20" height="20" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Free shipping on all orders &#8369;50,000 and above.
          </p>
        </form>
      </div>
      </section>
    </>
  );
}

export default LandingPage;