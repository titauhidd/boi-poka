import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addtoStoredReaddList } from "../../utilities/addtoDb";

const Bookdetail = () => {
  const { bookId } = useParams(); //-- aita diye ami je route e gesi sei route r param ta paisi
  // console.log(bookId);
  const data = useLoaderData();
  // console.log(data);
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  console.log(book, bookId);

  const { bookId: crbookId, image, review } = book;

 const handlemarkasRead = (id) => {
    addtoStoredReaddList(id);
  };

  return (
    <div className="py-6">
      <h2>Book Details</h2>
      <div className="py-6">
        <img className="w-40" src={image} alt="" />
      </div>
      <div className="pb-6">
        <p>{review}</p>
      </div>
      <div className="flex gap-4">
        <button 
        onClick={()=>handlemarkasRead(bookId)}
        className="px-6 py-3 bg-amber-400 text-amber-900">
          Mark As Read
        </button>
        <button className="px-6 py-3 bg-amber-400 text-amber-900">
          Wish-List
        </button>
      </div>
    </div>
  );
};

export default Bookdetail;
