import React, { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksdata.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h2>Books To Read</h2>
      <div>
        <p>{books.length}</p>
      </div>
    </div>
  );
};

export default Books;
