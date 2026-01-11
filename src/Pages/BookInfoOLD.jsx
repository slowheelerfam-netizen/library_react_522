import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BookInfo = ({ books = [] }) => {
  const { id } = useParams();
  const bookId = Number(id);
  const selectedBook = books.find((b) => b.id === bookId);

  if (!selectedBook) {
    return (
      <div id="books__body">
        <main id="books__main">
          <div className="books__container">
            <div className="row">
              <p>Book not found.</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const displayPrice = selectedBook.salePrice ?? selectedBook.originalPrice;

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container container__book--selected">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__selected--link">Back to Books</Link>
              <h2 className="book__selected--title--top">{selectedBook.title}</h2>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={selectedBook.url}
                  alt={selectedBook.title}
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <p className="link__breadcrumbs">Books / {selectedBook.title}</p>
                <h2 className="book__selected--title">{selectedBook.title}</h2>
                <div className="book__ratings">
                  {new Array(Math.floor(selectedBook.rating)).fill(0).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  {!Number.isInteger(selectedBook.rating) && <span>☆</span>}
                </div>
                <div className="book__price">${displayPrice.toFixed(2)}</div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    No summary available for this book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default BookInfo;
