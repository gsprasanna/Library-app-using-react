import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import AddIcon from "@material-ui/icons/Add";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import Badge from "react-bootstrap/Badge";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const BookList = ({
  id,
  title,
  author,
  totalBooks,
  year,
  availability,
  image,
  book,
  handleAddToCart,
  handleRemoveFromCart,
  cart,
  availableDate
}) => {
  debugger;
  return (
    <Card id={id} disabled={availability == "no"}>
      <CardImg src={image} alt={"loading"} />
      <CardBody>
        <h3>{title}</h3>
        <CardSubtitle>Author : {author}</CardSubtitle>
        <CardSubtitle>Year : {year}</CardSubtitle>
        <CardText>
          <strong>
            {availability == "yes" ? (
              <Badge pill variant="success" className="badge-size">
                {`Available`}
              </Badge>
            ) : (
              <Badge pill variant="danger">
                Unavailable
              </Badge>
            )}
            {availability == "no" ? (
              <Badge pill variant="danger" className="badge-size">
                {`Available on : ${availableDate}`}
              </Badge>
            ) : (
              ""
            )}
          </strong>
        </CardText>
        {/* <CardText>
          In Stock : <strong>{totalBooks}</strong>
        </CardText> */}

        {cart.find(x => x.id === id) ? (
          <button
            className="btn btn-danger"
            onClick={handleRemoveFromCart.bind(this, book)}
          >
            <RemoveRoundedIcon />
            Remove from cart
          </button>
        ) : (
          <button
            disabled={availability == "no"}
            className="btn btn-primary"
            onClick={handleAddToCart.bind(this, book)}
          >
            <AddIcon />
            Add to cart
          </button>
        )}
      </CardBody>
    </Card>
  );
};

export default BookList;
