import React, {PropTypes} from 'react';
import fill from 'lodash/fp/fill';
import pipe from 'lodash/fp/pipe';
import Star from '../../atom/star';
import style from './style.css';

const StarRating = props => {
  const {rating = 0, total = 5} = props;

  const popularity = pipe(
    fill(0, total, false),
    fill(0, rating, true)
  )(new Array(total));

  const Stars = popularity.map((popular, index) => (
    <Star
      popular={popular}
      key={index}
    />
  ));

  return (
    <div className={style.starRating}>
      {Stars}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number,
  total: PropTypes.number
};

export default StarRating;
