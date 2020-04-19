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

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(
                () => ({
                    books
                }),
                console.log("Books", books)
            );
        });
    }

    render() {
        const { books } = this.state;
        return (
            <div className="app">
                <Route exact path="/" render={() => <MainPage books={books} />} />
                <Route exact path="/search" render={() => <SearchPage books={books} />} />
            </div>
        );
    }
}

export default BooksApp;
