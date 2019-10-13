import React from "react";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import routes from "../../routes/routes";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  formControl: {
    margin: theme.spacing(3)
  },
  row: {
    display: "flex",
    justifyContent: "center"
  },
  margin: {
    margin: theme.spacing(2)
  }
}));

const CartIcon = ({ cart, handleRemoveFromCart }) => {
  debugger;
  const classes = useStyles();
  return (
    <Link to={{ pathname: "/cart" }}>
      <Badge
        color={cart.length > 0 ? "secondary" : "primary"}
        max={10}
        badgeContent={cart.length}
        showZero
        className={classes.margin}
      >
        <FontAwesomeIcon icon={faShoppingBag} size="3x"></FontAwesomeIcon>
      </Badge>
    </Link>
  );
};

CartIcon.propTypes = {
  cart: PropTypes.array.isRequired
};

export default CartIcon;
