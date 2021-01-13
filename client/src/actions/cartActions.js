import Axios from 'axios';
import Cookie from 'js-cookie';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get(`http://localhost:3001/getAllProducts/${productId}`);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data[0].id,
        name: data[0].name,
        image: data[0].image,
        price: data[0].price,
        quantity: data[0].quantity,
        qty,
      },
    });
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set('cartItems', JSON.stringify(cartItems));
  } catch (error) {
    console.log(error);
  }
};
const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  const {
    cart: { cartItems },
  } = getState();
  Cookie.set('cartItems', JSON.stringify(cartItems));
};
// const saveShipping = (data) => (dispatch) => {
//   dispatch({ type: CART_SAVE_SHIPPING, payload: data });
// };
// const savePayment = (data) => (dispatch) => {
//   dispatch({ type: CART_SAVE_PAYMENT, payload: data });
// };
export { addToCart, removeFromCart };
