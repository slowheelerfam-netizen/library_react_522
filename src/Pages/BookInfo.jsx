import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import Price from '../components/Price';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BookInfo = ({ books }) => {
  // const { id } = useParams();
  // const bookId = Number(id);
  // const selectedBook = books.find((b) => b.id === bookId);

  // if (!selectedBook) {
    return (
      <div id="books__body">
        <main id="books__main">
          <div className="books__container">
            <div className="row">
              <div className="book__selected--top">
                <Link to="/books" className="book__link">
                  <FontAwesomeIcon icon="arrow-left" />
                </Link>               
                <Link to="/books" className="book__link">
                  <h2 className="book__selected--title--top">Books</h2>  
                </Link>          
              </div>
              <div className="book__selected">
                <figure className="book__selected--figure">
                  <img src="https://covers.openlibrary.org/b/id/8091016-S.jpg"
                  alt=""
                  className="=book__selected--img"
                  />
                </figure>
                <div className="book__selected--descriptiopn">
                  <h2 className="book__selected--title">The Book Title</h2>
                  <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price originalPrice={50}" salePrice={20} />                     
                  </div>
                  <div className="book__summary">
                    <div className="book__summary--title">
                      Summary
                      </div>
                      <p className="book__summary--para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        In voluptatibus eum cupiditate inventore ipsum a, alias eius 
                        ipsam quia soluta hic quod quasi iusto suscipit pariatur 
                        quisquam sequi tempore ab.
                      </p>
                      <p className="book__summary--para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        In voluptatibus eum cupiditate inventore ipsum a, alias eius 
                        ipsam quia soluta hic quod quasi iusto suscipit pariatur 
                        quisquam sequi tempore ab.
                      </p>
                    </div>
                  <button className="btn">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }