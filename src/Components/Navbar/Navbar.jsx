import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <h2>Boi Poka</h2>
      <section>
        <ul className="flex gap-14"> 
          <li>Home</li>
          <li>Listed Books</li>
          <li>Pages To Read</li>
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
