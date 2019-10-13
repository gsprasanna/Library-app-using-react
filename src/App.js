import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import routes from "./routes/routes";
import Books from "./Pages/Books/Books";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import CartIcon from "./Components/Cart/CartIcon";
import fetchData, { updateBooks } from "./Services/fetchData";

import { GET_BOOKS, POST_BOOKS, GET_USERS } from "./Constants/ServerUrl";
import Cart from "./Pages/Cart.js/Cart";

class App extends Component {
  state = {
    bookList: [],
    setBookList: [],
    cart: [],
    isOpen: false,
    users: [],
    bookNextAvailability: ""
  };
  // componentDidMount() {
  //   debugger;
  //   const { history, location } = this.props;
  //   if (location.pathname === "/") {
  //     history.push(routes.books);
  //   }
  // }

  componentDidMount() {
    debugger;
    this.loadPostData();
    this.loadUsersData();
    const { history, location } = this.props;
    if (location.pathname === "/") {
      history.push(routes.books);
    }
  }

  loadUsersData = async () => {
    try {
      const users = await fetchData(GET_USERS, "GET");
      console.log(users);
      this.setState({ users });
    } catch (e) {
      console.error(e);
    }
  };

  loadPostData = async () => {
    try {
      const bookList = await fetchData(GET_BOOKS, "GET");
      console.log(bookList);
      this.setState({ bookList, setBookList: bookList });
    } catch (e) {
      console.error(e);
    }
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
        const searchedItem = e.target.value;

        return (
          item.title.toLowerCase().includes(searchedItem.toLowerCase()) ||
          item.author.toLowerCase().includes(searchedItem.toLowerCase()) ||
          item.genre.toLowerCase().includes(searchedItem.toLowerCase()) ||
          item.yearOfPublication.toString().includes(searchedItem.toString())
        );
      });
    } else {
      newBookList = this.state.setBookList;
    }
    this.setState({
      bookList: newBookList
    });
    debugger;
  };

  handleAddToCart = book => {
    debugger;
    const { cart } = this.state;
    const cartItem = cart.find(x => x.id === book.id);
    cart.length < 3
      ? !cartItem && book.noOfBooks > 0
        ? (book.noOfBooks = book.noOfBooks - 1) &&
          this.setState({ cart: [...this.state.cart, book] })
        : (book.noOfBooks = "Stock not available")
      : alert("you reached the maximum number of books added to the cart!");
    debugger;
  };

  handleRemoveFromCart = book => {
    debugger;
    const { cart } = this.state;
    const filteredCart = cart.filter(x => x.id !== book.id);
    book.noOfBooks = ++book.noOfBooks;
    this.setState({
      cart: filteredCart
    });
    debugger;
  };

  handleCheckOut = books => {
    const { bookList } = this.state;
    debugger;
    let filteredBooks = [];
    for (let book in books) {
      debugger;
      filteredBooks = bookList.filter(x =>
        x.id === books[book].id ? (x.availability = "no") : x.availability
      );
    }

    let todayDate = new Date();
    let numberOfDaysToAdd = 5;
    todayDate.setDate(todayDate.getDate() + numberOfDaysToAdd);
    let dd = todayDate.getDate();
    let mm = todayDate.getMonth();
    let y = todayDate.getFullYear();

    let predictedAvailaibility = dd + "/" + mm + "/" + y;
    debugger;
    this.setState({
      bookList: filteredBooks,
      cart: [],
      bookNextAvailability: predictedAvailaibility
    });
    debugger;

    // const requestBody = {
    //   books: books
    // };
    // try {
    //   const bookList = await updateBooks(POST_BOOKS, "POST", requestBody);
    //   console.log(bookList);
    //   this.setState({ bookList, setBookList: bookList });
    // } catch (e) {
    //   console.error(e);
    // }
  };

  render() {
    const { cart, bookList, isOpen, bookNextAvailability } = this.state;
    debugger;
    return (
      <div className="App">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Smart Library</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to={routes.cart}></NavLink>
              </NavItem>
              <NavItem>
                <CartIcon
                  cart={cart}
                  handleRemoveFromCart={this.handleRemoveFromCart}
                >
                  Cart
                </CartIcon>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Route
          path={routes.cart}
          render={() => (
            <Cart
              cart={cart}
              handleRemoveFromCart={this.handleRemoveFromCart}
              handleCheckOut={this.handleCheckOut}
            />
          )}
        />
        <Route
          path={routes.books}
          render={() => (
            <Books
              bookList={bookList}
              cart={cart}
              handleAddToCart={this.handleAddToCart}
              handleRemoveFromCart={this.handleRemoveFromCart}
              handleSearch={this.handleSearch}
              availableDate={bookNextAvailability}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
