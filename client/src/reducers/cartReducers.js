import {
  CART_ADD_ITEM,
  CART_EMPTY,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants';

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      // eslint-disable-next-line
      const item = action.payload;
      // eslint-disable-next-line
      const product = state.cartItems.find((x) => x.product === item.product);

      if (product) {
        return {
          cartItems: state.cartItems.map((x) => (x.product === product.product ? item : x)),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };
    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    case CART_REMOVE_ITEM:
      return { cartItems: state.cartItems.filter((x) => x.product !== action.payload) };
    case CART_EMPTY:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
}

export { cartReducer };
