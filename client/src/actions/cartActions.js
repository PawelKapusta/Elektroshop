import axios from 'axios';

import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants';

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/api/products/${productId}`);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data.id,
        name: data.name,
        image: data.image,
        price: data.price,
        quantity: data.quantity,
        qty,
      },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    console.log(error);
  }
};
const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
};
export { addToCart, removeFromCart };
