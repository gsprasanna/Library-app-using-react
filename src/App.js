import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import routes from "./routes/routes";
import Books from "./Pages/Books/Books";
import BookSearch from "./Components/Books/BookSearch";
import Cart from "./Components/Cart/Cart";

class App extends Component {
  state = {};
  componentDidMount() {
    const { history, location } = this.props;
    if (location.pathname === "/") {
      history.push(routes.books);
    }
  }

  render() {
    const { cart } = this.state;
    return (
      <div className="App">
        <h1>Smart Library Booking System</h1>
        <Route path={routes.books} component={Books} />
      </div>
    );
  }
}

export default withRouter(App);
