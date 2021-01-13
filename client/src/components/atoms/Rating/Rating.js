// import React from 'react';
// import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaStar, FaStarHalfAlt, FaRegStarHalf } from 'react-icons/fa';
//
// const stars = styled.div`
//   color: #f0c040;
//   margin: 0.1rem;
//   &:last-child {
//     color: #404040;
//   }
// `;
// const Rating = (props) => {
//   const { rating, numReviews } = props;
//   return (
//     <div>
//       <stars>
//         <i
//           className={
//             rating >= 1 ? <FaStar /> : rating >= 0.5 ? <FaStarHalfAlt /> : <FaRegStarHalf />
//           }
//         />
//       </stars>
//       <stars>
//         <i
//           className={
//             rating >= 2 ? (
//               <FontAwesomeIcon icon={FaStar} />
//             ) : rating >= 1.5 ? (
//               <FontAwesomeIcon icon={FaStarHalfAlt} />
//             ) : (
//               <FontAwesomeIcon icon={FaRegStarHalf} />
//             )
//           }
//         />
//       </stars>
//       <stars>
//         <i
//           className={
//             rating >= 3 ? (
//               <FontAwesomeIcon icon={FaStar} />
//             ) : rating >= 2.5 ? (
//               <FontAwesomeIcon icon={FaStarHalfAlt} />
//             ) : (
//               <FontAwesomeIcon icon={FaRegStarHalf} />
//             )
//           }
//         />
//       </stars>
//       <stars>
//         <i
//           className={
//             rating >= 4 ? (
//               <FontAwesomeIcon icon={FaStar} />
//             ) : rating >= 3.5 ? (
//               <FontAwesomeIcon icon={FaStarHalfAlt} />
//             ) : (
//               <FontAwesomeIcon icon={FaRegStarHalf} />
//             )
//           }
//         />
//       </stars>
//       <stars>
//         <i
//           className={
//             rating >= 5 ? (
//               <FontAwesomeIcon icon={FaStar} />
//             ) : rating >= 4.5 ? (
//               <FontAwesomeIcon icon={FaStarHalfAlt} />
//             ) : (
//               <FontAwesomeIcon icon={FaRegStarHalf} />
//             )
//           }
//         />
//       </stars>
//       <stars>{numReviews} reviews</stars>
//     </div>
//   );
// };
// export default Rating;
