import axios from 'axios';

export const removeProduct = (id) => ({
  type: 'REMOVE_PRODUCT',
  payload: {
    id,
  },
});

export const addProduct = (productContent) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;

  return {
    type: 'ADD_PRODUCT',
    payload: {
      id: getId(),
      ...productContent,
    },
  };
};

export const authenticate = (username, password) => (dispatch) => {
  dispatch({ type: 'AUTHENTICATE_REQUEST' });
  return axios
    .post('', {
      username,
      password,
    })
    .then((payload) => {
      console.log(payload);
      dispatch({ type: 'AUTHENTICATE_SUCCESS', payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: 'AUTHENTICATE_FAILURE' });
    });
};
