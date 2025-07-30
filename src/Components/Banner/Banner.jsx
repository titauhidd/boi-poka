import React from "react";
import bannerimg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex justify-between items-center gap-24 py-8 bg-amber-100 px-10">
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nulla
          a excepturi, sit ipsam id?
        </p>
        <div className="pt-4">
          <button className="px-6 py-3 bg-amber-500 ">Read Books</button>
        </div>
      </div>
      <div>
        <img className="rounded-xl" src={bannerimg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
