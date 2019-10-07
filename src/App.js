import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import routes from "./routes/routes";
import Books from "./Pages/Books/Books";

class App extends Component {
  componentDidMount() {
    const { history, location } = this.props;
    if (location.pathname === "/") {
      history.push(routes.books);
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Smart Library Booking System</h1>
        <Route path={routes.books} component={Books} />
      </div>
    );
  }
}

export default withRouter(App);
