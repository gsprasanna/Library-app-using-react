import React, { Component, Fragment } from "react";
import LoadingIndicator from "../../Components/LoadingIndicator/LoadingIndicator";
//import data from "../../data/bookdetails";
import BookList from "../../Components/Books/BookList";
import fetchData from "../../Services/fetchData";
import { GET_BOOKS } from "../../Constants/ServerUrl";

class Books extends Component {
  state = {
    bookList: []
  };

  componentDidMount() {
    this.loadPostData();
  }

  loadPostData = async () => {
    try {
      const bookList = await fetchData(GET_BOOKS, "GET");
      console.log(bookList);
      this.setState({ bookList });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { bookList } = this.state;
    return (
      <Fragment>
        <h3>List of Books</h3>
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
                />
              );
            })
          ) : (
            <LoadingIndicator />
          )}
        </ul>
      </Fragment>
    );
  }
}

export default Books;
