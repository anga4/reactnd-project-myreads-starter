import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";

class BooksApp extends React.Component {
    state = {
        books: null
    };

    updateBookShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            book.shelf = shelf;
            BooksAPI.getAll().then((books) => {
                this.setState({ books: books });
            });
        });
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                books
            }));
        });
    }

    render() {
        const { books } = this.state;
        return (
            <div className="app">
                <Route exact path="/" render={() => <MainPage books={books} updateBookShelf={this.updateBookShelf} />} />
                <Route exact path="/search" render={() => <SearchPage books={books} updateBookShelf={this.updateBookShelf} />} />
            </div>
        );
    }
}

export default BooksApp;
