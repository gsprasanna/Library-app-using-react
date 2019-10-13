import React, { Component, Fragment } from "react";
import LoadingIndicator from "../../Components/LoadingIndicator/LoadingIndicator";
//import data from "../../data/bookdetails";
import BookList from "../../Components/Books/BookList";
import BookSearch from "../../Components/Books/BookSearch";
import CartIcon from "../../Components/Cart/CartIcon";

class Books extends Component {
  state = {};

  SearchBook = e => {
    debugger;
    this.props.handleSearch(e);
  };

  handleSubmit = e => {
    debugger;
    e.preventDefault();
  };

  render() {
    const {
      bookList,
      cart,
      handleRemoveFromCart,
      handleAddToCart,
      handleSearch,
      availableDate
    } = this.props;
    debugger;
    return (
      <Fragment>
        <BookSearch
          className="container"
          searchType="search"
          placeholderText="Search for Books"
          onChange={this.SearchBook}
          btnType="submit"
          onClick={this.handleSubmit}
        />
        <h3>List of Books</h3>

        {bookList.length ? (
          <div className="container box">
            {bookList.map((book, bookIndex) => {
              return (
                <BookList
                  id={book.id}
                  index={bookIndex}
                  title={book.title}
                  totalBooks={book.noOfBooks}
                  author={book.author}
                  year={book.yearOfPublication}
                  availability={book.availability}
                  image={book.image}
                  book={book}
                  cart={cart}
                  handleAddToCart={handleAddToCart}
                  handleRemoveFromCart={handleRemoveFromCart}
                  availableDate={availableDate}
                />
              );
            })}
          </div>
        ) : bookList.length == 0 ? (
          <p>{"No books available in the given name"}</p>
        ) : (
          <LoadingIndicator />
        )}
      </Fragment>
    );
  }
}

export default Books;
