import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../redux/slices/cartSlice";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-3 has-text-centered">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="has-text-centered">Your cart is empty.</p>
        ) : (
          <div className="box">
            {cart.map((item) => (
              <div key={item.id} className="columns is-vcentered mb-4">
                <div className="column is-one-third">
                  <h3 className="title is-5">{item.name}</h3>
                </div>

                <div className="column">
                  <span className="tag is-light is-medium">${item.price}</span>
                </div>

                <div className="column">
                  <div className="buttons has-addons">
                    <button
                      className="button is-small is-success"
                      onClick={() => dispatch(incrementQuantity(item))}
                    >
                      +
                    </button>
                    <span className="button is-static is-small">{item.quantity}</span>
                    <button
                      className="button is-small is-danger"
                      onClick={() => dispatch(decrementQuantity(item))}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                  </div>
                </div>

                <div className="column">
                  <button
                    className="button is-small is-outlined is-danger"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <hr />

            <div className="has-text-right">
              <h3 className="title is-4">
                Total: <span className="has-text-primary">${totalPrice ? totalPrice.toFixed(2) : "0.00"}</span>
              </h3>
              <button className="button is-primary is-fullwidth mt-3">Checkout (Coming Soon)</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShoppingCart;
