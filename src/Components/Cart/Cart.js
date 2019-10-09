import React, { Component } from "react";
import { faCartPlus, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cart }) => {
  debugger;
  return (
    <div className="Nav">
      <div className="Nav-item Nav-cart">
        <FontAwesomeIcon icon={faShoppingBag} size="3x"></FontAwesomeIcon>
        {cart.length > 0 ? <span>cart.length</span> : ""}
      </div>
    </div>
  );
};

export default Cart;
