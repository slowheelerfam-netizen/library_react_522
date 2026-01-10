import React from 'react';
import Book from "../components/ui/Book";

const Books = () => {
    return (
        <div className="nooks__body">
            <main id="books__main">
                <section id="books__main">
                    <div className="books__coontainer">
                        <div className="row">
                            <div className="books__header">
                                <h2 className="section__title books__header--title">All Books</h2>
                                <select id="filter" defaultValue="DEFAULT">
                                    <option value="DEFAULT" disabled>Sort</option>
                                    <option value="LOW_TO_HIGH">Price, Low to High</option>
                                    <option value="HIGH_TO_LOW">Price, High to Low</option>
                                    <option value="RATING">RATING</option>
                                </select>
                            </div>
                            <div className="books">
                                {

                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
export default Books;
