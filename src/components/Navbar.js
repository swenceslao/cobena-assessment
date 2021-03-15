import React from "react";
import "../app.css";
import Logo from "./Logo";
import Popup from "reactjs-popup";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav id="navigation" className="mx-auto w-4/5 lg:w-3/4 py-8 flex flex-row justify-between items-center">
      <Logo/>
      <div className="hidden md:block">
        <NavLinks display="inline" />
      </div>
      <div className="block md:hidden cursor-pointer m-4">
        <Popup 
          trigger={HamburgerMenu}
          closeOnDocumentClick
        >
          {close => (
            <NavLinks display="block" ref={close} />
          )}
          
        </Popup>
      </div>
    </nav>
  );
}

export default Navbar;

const HamburgerMenu = () => {
  return (
    <svg viewBox="0 0 100 80" width="20" height="20">
      <rect width="100" height="14" rx="8"></rect>
      <rect y="30" width="100" height="14" rx="8"></rect>
      <rect y="60" width="100" height="14" rx="8"></rect>
    </svg>
  );
}