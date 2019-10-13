import React from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import { NavLink } from "react-router-dom";
import routes from "../../routes/routes";
import { Alert } from "reactstrap";

const CartComponent = ({
  cart,
  handleRemoveFromCart,
  backToBookPage,
  modal,
  toggle,
  backdrop,
  keyboard,
  handleCheckOut
}) => {
  debugger;
  return (
    <div>
      {cart.length ? (
        <Modal
          isOpen={modal}
          toggle={toggle}
          id={cart.id}
          backdrop={backdrop}
          size="lg"
          keyboard={keyboard}
        >
          <ModalBody>
            <table>
              <tr>
                <td></td>
                <td>
                  <strong>Book Title</strong>
                </td>
                <td>
                  <strong>Author</strong>
                </td>
                <td>
                  <strong>Published Year</strong>
                </td>
              </tr>
              {cart.map((cartIter, cartIndex) => {
                return (
                  <tr>
                    <td>
                      <img
                        className="thumbnail"
                        src={cartIter.image}
                        alt={"loading"}
                      />
                    </td>
                    <td>
                      <strong>{cartIter.title}</strong>
                    </td>
                    <td>
                      <p>{cartIter.author}</p>
                    </td>
                    <td>
                      <p>{cartIter.yearOfPublication}</p>
                    </td>
                    <td>
                      <Button
                        className="btn btn-danger"
                        onClick={handleRemoveFromCart.bind(
                          this,
                          cartIter,
                          cart
                        )}
                      >
                        <RemoveRoundedIcon />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </ModalBody>
          <ModalFooter>
            <NavLink to={routes.books}>
              <Button color="primary" onClick={handleCheckOut.bind(this, cart)}>
                Check out
              </Button>
            </NavLink>

            <NavLink to={routes.books}>
              <Button color="secondary">Cancel</Button>
            </NavLink>
          </ModalFooter>
          <ModalFooter>
            {cart.length == 3 ? (
              <Alert color="danger">
                You have added the maximum number of books to the cart!
              </Alert>
            ) : (
              <Alert color="primary">
                still you can add {3 - cart.length} books
              </Alert>
            )}
          </ModalFooter>
        </Modal>
      ) : (
        <Modal
          isOpen={modal}
          toggle={toggle}
          id={cart.id}
          backdrop={backdrop}
          keyboard={keyboard}
        >
          <ModalHeader>Hi Buddy!</ModalHeader>
          <ModalBody>Please Add the books to the cart!</ModalBody>
          <ModalFooter>
            <NavLink to={routes.books}>
              <Button color="secondary">Cancel</Button>
            </NavLink>
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
};

export default CartComponent;
