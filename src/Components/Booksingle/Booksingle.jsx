import React from "react";
import { Link } from "react-router-dom";

const Booksingle = ({ book }) => {
  const { bookName, author, image, tags, bookId } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="bg-amber-500">
        <div className=" bg-amber-200">
          <img className="h-[100px] mx-auto" src={image} alt={bookName} />
        </div>
        <div className="flex items-center gap-4 py-4">
          {tags.map((tagd) => {
            return (
              <button className="px-6 py-3 bg-amber-400 text-amber-900">
                {tagd}
              </button>
            );
          })}
        </div>
        <p>{bookName}</p>
        <p>{author}</p>
      </div>
    </Link>
  );
};

export default Booksingle;
