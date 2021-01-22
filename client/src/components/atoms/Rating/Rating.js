import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const Rating = (props) => {
  const { rating, numReviews } = props;
  return (
    <div>
      <stars>
        <i
          className={
            rating >= 1 ? <StarIcon /> : rating >= 0.5 ? <StarHalfIcon /> : <StarOutlineIcon />
          }
        />
      </stars>
      <stars>
        <i
          className={
            rating >= 2 ? <StarIcon /> : rating >= 1.5 ? <StarHalfIcon /> : <StarOutlineIcon />
          }
        />
      </stars>
      <stars>
        <i
          className={
            rating >= 3 ? <StarIcon /> : rating >= 2.5 ? <StarHalfIcon /> : <StarOutlineIcon />
          }
        />
      </stars>
      <stars>
        <i
          className={
            rating >= 4 ? <StarIcon /> : rating >= 3.5 ? <StarHalfIcon /> : <StarOutlineIcon />
          }
        />
      </stars>
      <stars>
        <i
          className={
            rating >= 5 ? <StarIcon /> : rating >= 4.5 ? <StarHalfIcon /> : <StarOutlineIcon />
          }
        />
      </stars>
      <stars>{numReviews} reviews</stars>
    </div>
  );
};
export default Rating;
