import React from 'react';
import PropTypes from 'prop-types';
import MoleculeReviewCardCongrats from '../../molecule/review-card-congrats';
import style from './style.css';

const ReviewCongrats = props => {
  const {'aria-label': ariaLabel, title, cardCongratsStar} = props;
  return (
    <div className={style.mainContainer} aria-label={ariaLabel}>
      <div className={style.title}>{title}</div>
      <MoleculeReviewCardCongrats {...cardCongratsStar} />
    </div>
  );
};

ReviewCongrats.propTypes = {
  'aria-label': PropTypes.string,
  title: PropTypes.string,
  cardCongratsStar: PropTypes.shape(MoleculeReviewCardCongrats.propTypes)
};

export default ReviewCongrats;
