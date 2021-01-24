import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const Rating = (props) => {
  const { rating, numReviews } = props;
  return (
    <div>
      <stars>
        <i>
          {rating >= 1 ? (
            <StarIcon style={{ color: '#DAA520' }} />
          ) : rating >= 0.5 ? (
            <StarHalfIcon style={{ color: '#DAA520' }} />
          ) : (
            <StarOutlineIcon style={{ color: '#DAA520' }} />
          )}
        </i>
      </stars>
      <stars>
        <i>
          {rating >= 2 ? (
            <StarIcon style={{ color: '#DAA520' }} />
          ) : rating >= 1.5 ? (
            <StarHalfIcon style={{ color: '#DAA520' }} />
          ) : (
            <StarOutlineIcon style={{ color: '#DAA520' }} />
          )}
        </i>
      </stars>
      <stars>
        <i>
          {rating >= 3 ? (
            <StarIcon style={{ color: '#DAA520' }} />
          ) : rating >= 2.5 ? (
            <StarHalfIcon style={{ color: '#DAA520' }} />
          ) : (
            <StarOutlineIcon style={{ color: '#DAA520' }} />
          )}
        </i>
      </stars>
      <stars>
        <i>
          {rating >= 4 ? (
            <StarIcon style={{ color: '#DAA520' }} />
          ) : rating >= 3.5 ? (
            <StarHalfIcon style={{ color: '#DAA520' }} />
          ) : (
            <StarOutlineIcon style={{ color: '#DAA520' }} />
          )}
        </i>
      </stars>
      <stars>
        <i>
          {rating >= 5 ? (
            <StarIcon style={{ color: '#DAA520' }} />
          ) : rating >= 4.5 ? (
            <StarHalfIcon style={{ color: '#DAA520' }} />
          ) : (
            <StarOutlineIcon style={{ color: '#DAA520' }} />
          )}
        </i>
      </stars>
      <stars> {numReviews} review/s</stars>
    </div>
  );
};
export default Rating;
