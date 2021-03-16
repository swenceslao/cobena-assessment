import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <span className="font-mono uppercase text-3xl tracking-widest text-black">
        THELAPTOP
      </span>
      <span className="mx-1 font-mono font-bold uppercase text-3xl tracking-widest text-teal-300">
        COMPANY
      </span>
    </Link>
  );
}

export default Logo;