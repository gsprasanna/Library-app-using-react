import React, { Component } from "react";
import CartComponent from "../../Components/Cart/CartComponent";

class Cart extends Component {
  state = {
    cart: [],
    modal: true,
    backdrop: "static",
    keyboard: false
  };
  componentDidMount() {
    this.setState({
      cart: this.props.cart
    });
  }
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  // handleRemoveFromCart = book => {
  //   debugger;
  //   const { cart } = this.state;
  //   const filteredCart = cart.filter(x => x.id !== book.id);
  //   book.noOfBooks = ++book.noOfBooks;
  //   this.setState({
  //     cart: filteredCart
  //   });
  //   debugger;
  // };
  backToBookPage = () => {
    debugger;
    let path = "/book";
    // this.props.history.push(path);
  };

  render() {
    debugger;
    const { modal, backdrop, keyboard } = this.state;
    return (
      <CartComponent
        cart={this.props.cart}
        modal={modal}
        toggle={this.toggle}
        keyboard={keyboard}
        handleRemoveFromCart={this.props.handleRemoveFromCart}
        backToBookPage={this.backToBookPage}
        backdrop={backdrop}
        handleCheckOut={this.props.handleCheckOut}
      />
    );
  }
}

export default Cart;
