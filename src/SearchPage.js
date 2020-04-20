import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SingleBook from "./SingleBook";

class SearchPage extends Component {
    state = {
        searchValue: "",
        books: []
    };

    handleChange = (searchValue) => {
        this.setState({ searchValue }, () => this.booksFromQuery());
    };

    booksFromQuery = () => {
        const { searchValue } = this.state;
        if (searchValue) {
            BooksAPI.search(searchValue).then((books) => {
                if (books.error) {
                    return this.setState({ books: books.items });
                }
                this.setState({ books });
            });
        } else {
            this.setState({ books: [], searchValue: "" });
        }
    };

    render() {
        const { searchValue, books } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={searchValue}
                            onChange={(e) => this.handleChange(e.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <span>{this.state.searchValue}</span>
                    <ol className="books-grid">
                        {books
                            .filter((result) => this.props.books.map((book) => (book.id === result.id ? (result.shelf = book.shelf) : "")))
                            .map((book) => (
                                <SingleBook key={book.id} book={book} updateBookShelf={this.props.updateBookShelf} />
                            ))}
                    </ol>
                </div>
            </div>
        );
    }
}
export default SearchPage;
