import React from "react";
import { Link } from "react-router-dom";
import SingleBook from "./SingleBook";

function MainPage({ books, updateBookShelf }) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books &&
                                    books
                                        .filter((book) => book.shelf === "currentlyReading")
                                        .map((book) => <SingleBook key={book.id} book={book} updateBookShelf={updateBookShelf} />)}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books &&
                                    books
                                        .filter((book) => book.shelf === "wantToRead")
                                        .map((book) => <SingleBook key={book.id} book={book} updateBookShelf={updateBookShelf} />)}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books &&
                                    books
                                        .filter((book) => book.shelf === "read")
                                        .map((book) => <SingleBook key={book.id} book={book} updateBookShelf={updateBookShelf} />)}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <Link className="open-search" to="/search">
                Add a book
            </Link>
        </div>
    );
}

export default MainPage;
