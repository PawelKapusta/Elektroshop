import Axios from 'axios';
import Cookie from 'js-cookie';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get(`http://localhost:5000/api/products/${productId}`);
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
// const saveShipping = (data) => (dispatch) => {
//   dispatch({ type: CART_SAVE_SHIPPING, payload: data });
// };
// const savePayment = (data) => (dispatch) => {
//   dispatch({ type: CART_SAVE_PAYMENT, payload: data });
// };
export { addToCart, removeFromCart };
