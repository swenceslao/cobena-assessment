import React from "react";
import { NavLink  } from "react-router-dom";

const NavLinks = React.forwardRef((props, ref) => {
  const { display } = props;
  return (
    <>
      <ul className={ display === "inline" ? "inline" : "block" }>
        {
          display === "inline" ? 
            <>
              <li className="inline-block ml-8">
                <NavLink to="/">Home</NavLink >
              </li>
              <li className="inline-block ml-8">
                <NavLink to="/products">Products</NavLink >
              </li>
              <li className="inline-block ml-8">
                <NavLink to="/contact">Contact</NavLink >
              </li>
            </>
          :
            <>
              <li className="block my-2 mr-16" onClick={ref}>
                <NavLink to="/">Home</NavLink >
              </li>
              <li className="block my-2 mr-16" onClick={ref}>
                <NavLink to="/products">Products</NavLink >
              </li>
              <li className="block my-2 mr-16" onClick={ref}>
                <NavLink to="/contact">Contact</NavLink >
              </li>
            </>
        }
       
      </ul>
    </>
  );
})

export default NavLinks;