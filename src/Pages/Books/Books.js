import React, { Component, Fragment } from "react";
import LoadingIndicator from "../../Components/LoadingIndicator/LoadingIndicator";
//import data from "../../data/bookdetails";
import BookList from "../../Components/Books/BookList";
import fetchData from "../../Services/fetchData";
import { GET_BOOKS } from "../../Constants/ServerUrl";
import BookSearch from "../../Components/Books/BookSearch";
import Cart from "../../Components/Cart/Cart";

class Books extends Component {
  state = {
    bookList: [],
    setBookList: [],
    cart: []
  };

  componentDidMount() {
    this.loadPostData();
  }

  loadPostData = async () => {
    try {
      const bookList = await fetchData(GET_BOOKS, "GET");
      console.log(bookList);
      this.setState({ bookList, setBookList: bookList });
    } catch (e) {
      console.error(e);
    }
  };

  handleSearch = e => {
    debugger;
    console.log(e.target.value);
    let currentBookList = [...this.state.bookList];
    let newBookList = [];
    if (e.target.value !== "") {
      newBookList = currentBookList.filter(item => {
        debugger;
        const lc = item.title.toLowerCase();
        const searchedItem = e.target.value.toLowerCase();

        return lc.includes(searchedItem);
      });
    } else {
      newBookList = this.state.setBookList;
    }
    this.setState({
      bookList: newBookList
    });
    debugger;
  };

  handleSubmit = e => {
    debugger;
    e.preventDefault();
  };

  handleClick = book => {
    debugger;
    this.handleAddToCart(book);
  };

  handleAddToCart = book => {
    debugger;
    const cartItem = this.state.cart.find(x => x.id === book.id);
    !cartItem &&
      book.totalBooks > 0 &&
      this.setState({ cart: [...this.state.cart, book] });
    debugger;
  };

  render() {
    const { bookList, cart } = this.state;
    return (
      <Fragment>
        <Cart cart={cart} />
        <h3>List of Books</h3>
        <BookSearch
          searchType="search"
          placeholderText="Search for Books"
          onChange={this.handleSearch}
          btnType="submit"
          onClick={this.handleSubmit}
        />
        <ul className="book-list">
          {bookList.length ? (
            bookList.map((book, bookIndex) => {
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
                  handleClick={this.handleClick}
                />
              );
            })
          ) : bookList.length == 0 ? (
            <p className="App">No books available in the given name</p>
          ) : (
            <LoadingIndicator />
          )}
        </ul>
      </Fragment>
    );
  }
}

export default Books;
