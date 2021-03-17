import React, { useState } from "react";
import { Lottie } from "@crello/react-lottie"

import checkmark from "../lottie-json/checkmark.json";

const Product = ({ hiddenDetails = false, laptop }) => {
  const { name, sku, price, availability, imageUrl, specs: {processor, gpu, display, usb, lan, out} } = laptop
  const [ ram, setRam ] = useState(16);
  const [ storage, setStorage ] = useState(512);
  const selectedCheckbox = "flex flex-row items-center text-xs font-bold uppercase cursor-pointer rounded-md border border-teal-700 text-teal-600 bg-teal-50 my-3 py-2 px-4 h-10 shadow-md";
  const unselectedCheckbox = "block text-xs font-bold uppercase cursor-pointer rounded-md border border-gray-500 text-gray-800 bg-gray-50 my-3 py-2 px-6 h-10 shadow-md";

  const handleRamSelect = (e) => {
    e.preventDefault();
    setRam(Number(e.target.value));
    console.log(e.target.value);
  }
  const handleStorageSelect = (e) => {
    e.preventDefault();
    setStorage(Number(e.target.value));
    console.log(e.target.value);
  }

  return (
    <>
      <div className="flex-grow border border-gray-300 rounded-md flex flex-row items-center justify-evenly px-8 py-10 m-2 bg-transparent hover:bg-white transform hover:scale-105 transition duration-100 ease-in-out" id={sku}>
        <img src={imageUrl} className="w-32 lg:w-48 xl:w-96 pr-3" alt="laptop" />
        <form className="pl-3">
          <div>
            <h1 className="w-full flex-none font-semibold mb-2.5">
              {name}
            </h1>
            <div className="flex flex-wrap flex-row items-baseline">
              <div className="text-4xl leading-7 font-bold text-purple-600">
                &#8369;{price}
              </div>
              <div className="text-sm font-medium capitalize text-gray-400 ml-3">
                {availability}
              </div>
            </div>
          </div>
          { !hiddenDetails && <>
            <div className="mt-6">
              <ul>
                <li className="text-sm">{processor}</li>
                <li className="text-sm">{gpu}</li>
                <li className="text-sm">{display}</li>
                <li className="text-sm">{usb}</li>
                <li className="text-sm">{lan}</li>
                <li className="text-sm">{out}</li>
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
            <div className="mt-6">
              <div className="uppercase font-bold text-gray-500 text-xs">SELECT STORAGE</div>
              <div className="flex items-baseline mb-4">
                <div className="space-x-2 flex text-sm font-medium">
                  <label>
                    <input className="hidden" name="storage" type="radio" value={256} checked={storage === 256} onChange={() => setStorage(256)} />
                    <button className={storage === 256 ? selectedCheckbox : unselectedCheckbox} value={256} onClick={handleStorageSelect}>
                      { storage === 256 && <Lottie 
                                      config={{
                                        animationData: checkmark, 
                                        loop: false
                                      }} 
                                      speed="2"
                                      width="30px"
                                      height="30px"
                                    /> 
                      }
                      <span className="ml-1">256 GB</span>
                    </button>
                  </label>
                  <label>
                    <input className="hidden" name="storage" type="radio" value={512}  checked={storage === 512} onChange={() => setStorage(512)} />
                    <button className={storage === 512 ? selectedCheckbox : unselectedCheckbox} value={512} onClick={handleStorageSelect}>
                      { storage === 512 && <Lottie 
                                      config={{
                                        animationData: checkmark, 
                                        loop: false
                                      }} 
                                      speed="2"
                                      width="30px"
                                      height="30px"
                                    /> 
                      }
                      <span className="ml-1">512 GB</span>
                    </button>
                  </label>
                </div>
              </div>
            </div>
            <div className="text-left mb-4">
              <button className="w-52 bg-teal-300 text-gray-900 rounded-3xl py-2 font-semibold shadow-md cursor-pointer" type="submit">Buy now</button>
            </div>
            <p className="text-sm w-52 text-gray-500">
              Free shipping on all orders &#8369;30,000 and above.
            </p>
          </> }
        </form>
      </div>
    </>
  );
}

export default Product;