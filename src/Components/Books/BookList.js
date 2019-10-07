import React, { Component } from "react";

const BookList = ({
  id,
  title,
  author,
  totalBooks,
  year,
  availability,
  image
}) => {
  return (
    <li className="book-list-item" id={id}>
      <img className="thumbnail" src={image} alt={"loading"} />
      <h4>{title}</h4>
      <p>author by : {author}</p>
      <p>year : {year}</p>
      <p>availability : {availability}</p>
    </li>
  );
};

export default BookList;
