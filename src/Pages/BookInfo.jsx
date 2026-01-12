import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const BookInfo = ({ books = [], addItemToCart, cart = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              <button
                className="btn"
                onClick={() => {
                  const exists = cart.some((item) => Number(item.id) === Number(selectedBook.id));
                  if (!exists && addItemToCart) {
                    addItemToCart(selectedBook);
                  }
                  navigate('/books');
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
export default BookInfo;
