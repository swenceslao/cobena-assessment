import React, { useState } from "react";
import Maps from "../components/Maps";

const ContactPage = () => {
  const [ inputData, setInputData ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputData({ 
      ...inputData,  
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="w-full bg-gray-100 py-10">
      <div className="mx-auto text-center w-3/4">
        <h1 className="text-4xl font-sans	font-extrabold mx-0 md:mx-6 lg:mx-12 mb-10">Contact Us</h1>
      </div>
      <div className="w-3/4 mx-auto">
        <form>
          {/* https://tailwindcomponents.com/component/form-grid */}
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
                  First Name
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded-xl py-3 px-4 mb-3" id="grid-first-name" onChange={handleChange} name="firstName" type="text" placeholder="Juan"/>
                <p className="text-red text-xs italic">Please fill out this field.</p>
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Last Name
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-xl py-3 px-4" id="grid-last-name" onChange={handleChange} name="lastName" type="text" placeholder="Doe"/>
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-email">
                  Email Address
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-xl py-3 px-4 mb-3" id="grid-email" onChange={handleChange} name="email" type="email" placeholder="email@domain.com"/>
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-mobile">
                  Mobile Number
                </label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-xl py-3 px-4 mb-3" id="grid-mobile" onChange={handleChange} name="number" type="number" placeholder="09123456789"/>
              </div>
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-message">
                  Your message
                </label>
                <textarea className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-xl py-3 px-4 mb-3 h-72" onChange={handleChange} name="message" id="grid-message" />
                <p className="text-grey-dark text-xs italic">What would you like to say?</p>
              </div>
            </div>
            <Maps/>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;