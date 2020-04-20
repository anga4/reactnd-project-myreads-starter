import React, { Component } from "react";
import SelectShelf from "./SelectShelf";

class SingleBook extends Component {
    render() {
        const { book, updateBookShelf } = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${
                                    book.imageLinks
                                        ? book.imageLinks.thumbnail
                                        : "https://raw.githubusercontent.com/artnerdnet/reactnd-project-myreads-starter/searchFeature/src/img/default-cover.png"
                                })`
                            }}
                        />
                        <div className="book-shelf-changer">
                            <SelectShelf book={book} updateBookShelf={updateBookShelf} />
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">
                        {book.authors &&
                            book.authors.map((author, i) => (
                                <div key={i}>
                                    <span>{author}</span>
                                    <br />
                                </div>
                            ))}
                    </div>
                </div>
            </li>
        );
    }
}

export default SingleBook;
