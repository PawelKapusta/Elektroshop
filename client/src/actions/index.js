// import axios from 'axios';
// import { CREATE, DELETE, AUTH_SUCCESS } from '../constants/actionTypes';
//
// export const removeProduct = (id) => ({
//   type: DELETE,
//   payload: {
//     id,
//   },
// });
//
// export const addProduct = (productContent) => {
//   const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;
//
//   return {
//     type: CREATE,
//     payload: {
//       id: getId(),
//       ...productContent,
//     },
//   };
// };
//
// export const authenticate = (username, password) => (dispatch) => {
//   dispatch({ type: 'AUTHENTICATE_REQUEST' });
//   return axios
//     .post('["endpoint"]', {
//       username,
//       password,
//     })
//     .then((payload) => {
//       console.log(payload);
//       dispatch({ type: AUTH_SUCCESS, payload });
//     })
//     .catch((err) => {
//       console.log(err);
//       dispatch({ type: 'AUTHENTICATE_FAILURE' });
//     });
// };
