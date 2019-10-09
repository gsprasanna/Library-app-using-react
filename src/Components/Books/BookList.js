import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const BookList = ({
  id,
  title,
  author,
  totalBooks,
  year,
  availability,
  image,
  book,
  handleClick
}) => {
  debugger;
  return (
    <li className="book-list-item" id={id}>
      <img className="thumbnail" src={image} alt={"loading"} />
      <h4>{title}</h4>
      <p>author by : {author}</p>
      <p>year : {year}</p>
      <p>availability : {availability}</p>
      <p>
        In Stock : <strong>{totalBooks}</strong>
      </p>

      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faPlus} size="5x">
          Add to bag
        </FontAwesomeIcon>
      </button>
    </li>
  );
};

export default BookList;
