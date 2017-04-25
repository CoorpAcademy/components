import React from 'react';
import PropTypes from 'prop-types';
import fill from 'lodash/fp/fill';
import pipe from 'lodash/fp/pipe';
import map from 'lodash/fp/map';
import Star from '../../atom/star';
import style from './style.css';

const StarRating = props => {
  const {rating = 0, total = 5} = props;

  const popularity = pipe(
    fill(0, total, false),
    fill(0, rating, true)
  )(new Array(total));

  const Stars = map.convert({cap: false})((popular, index) => (
    <Star
      popular={popular}
      key={index}
    />
  ), popularity);

  return (
    <div>
      {Stars}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number,
  total: PropTypes.number
};

export default StarRating;
