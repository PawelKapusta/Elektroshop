// import { CREATE, DELETE, AUTH_SUCCESS } from '../constants/actionTypes';
//
// const rootReducer = (state = [], action) => {
//   switch (action.type) {
//     case AUTH_SUCCESS:
//       return {
//         ...state,
//         userID: action.payload.data._id,
//       };
//     case CREATE:
//       return {
//         ...state,
//         products: [...state, action.payload.product],
//       };
//     case DELETE:
//       return {
//         ...state,
//         products: [...state].filter((item) => item.id !== action.payload.id),
//       };
//     default:
//       return state;
//   }
// };
//
// export default rootReducer;
