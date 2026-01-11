import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Price from "../ui/Price";
import Ratings from "../ui/Ratings";
import Placeholder from "../../assets/book-1.jpeg";

const Book = ({ book }) => {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setImg(book.url);
    };
    image.onerror = () => {
      setImg(Placeholder);
    };
    image.src = book.url;
  }, [book.url]);

  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          {!img ? (
            <div className="book__img--skeleton"></div>
          ) : (
            <img className="book__img" src={img} alt="" />
          )}
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Ratings rating={book.rating} />
      <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
    </div>
  );
};

export default Book;
