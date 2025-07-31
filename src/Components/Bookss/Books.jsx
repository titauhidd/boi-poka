import React, { useEffect, useState } from "react";
import Booksingle from "../Booksingle/Booksingle";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksdata.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h2>Books To Read</h2>
      <div className="grid grid-cols-3 gap-4">
        {/* <p>{books.length}</p> */}
        {books.map((bookdata) => {
          return (
            <Booksingle key={bookdata.bookId} book={bookdata}></Booksingle>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
