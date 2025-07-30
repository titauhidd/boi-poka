import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <h2>Boi Poka</h2>
      <section>
        <ul className="flex gap-14">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="listedbooks">Listed-Books</NavLink>
          </li>
          <li>
            <NavLink to="pagesread">Pages-Read</NavLink>
          </li>
        </ul>
      </section>
      <section>
        <button>Sign Up</button>
        <button>Log In</button>
      </section>
    </div>
  );
};

export default Navbar;
