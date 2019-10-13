import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";

const BookSearch = ({
  searchType,
  placeholderText,
  onChange,
  btnType,
  onClick
}) => {
  console.log();
  return (
    <div className="container">
      <input
        className="form-control"
        type={searchType}
        placeholder={placeholderText}
        aria-label="Search"
        onChange={onChange}
      />
    </div>
  );
};

export default BookSearch;
