import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import '../css/cart.css';

function CartPage(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const productId = Number(props.match.params.id.replaceAll('+', ''));
  console.log(productId);
  const qty = props.location.search ? Number(props.location.search.slice(-2)[1]) : 1;
  const dispatch = useDispatch();

  const removeFromCartHandler = (productID) => {
    dispatch(removeFromCart(productID));
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);
  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <li>
                <div className="cart-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    Qty:
                    <select
                      value={item.qty}
                      onChange={(e) => dispatch(addToCart(item.product, e.target.value))}
                    >
                      {[...Array(item.quantity).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="cart-price">{item.price} zł</div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="cart-action">
        <h3>
          Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items ) :
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
          {'  '} zł
        </h3>
        <button type="button" disabled={cartItems.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
