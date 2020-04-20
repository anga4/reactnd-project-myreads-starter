# MyReads Project

This is a react app that classifies books in three shelves named "Currently Reading", "Want to Read" and "Read" respectively. The app allows you for books and gives you the possibility to classify books in a chosen shelve.

# App Structure

The MyReads App has two pages:

- The MainPage which displays three shelves and a list of books corresponding books associated to that shelve and
- The SearchPage from which you can search for a book an add to a shelve. 

## How to install & Run

To get started:

* Clone the repository in your local machine with `git clone https://github.com/anga4/reactnd-project-myreads-starter.git`
* cd into the directory and install dependencies with the command `npm install`
* Run the app with `npm start`

## Backend Server

This project depends on a Backend server provided by Udacity. The file [`BooksAPI.js`](src/BooksAPI.js) contains the methods used to perform the operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
