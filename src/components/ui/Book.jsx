import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Price from "../ui/Price";
import Ratings from "../ui/Ratings";
import Placeholder from "../../assets/book-1.jpeg";

const Book = ({ book }) => {
  const [img, setImg] = useState();

  // When we switch routes dont set image to unmounted component
  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      if (mountedRef.current) {
        setImg(book.url);
      }
    };
    image.onerror = () => {
      if (mountedRef.current) {
        setImg(Placeholder);
      }
    };
    image.src = book.url;
    return () => {
      mountedRef.current = false;
    };
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
