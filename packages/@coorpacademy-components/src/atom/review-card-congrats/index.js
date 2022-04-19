import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaCompositionCoorpacademyStar as StarIcon,
  NovaCompositionNavigationArrowTop
} from '@coorpacademy/nova-icons';
import style from './style.css';

const ReviewCardCongrats = props => {
  const {
    'aria-label': ariaLabel,
    reviewCardTitle,
    reviewCardValue,
    mainIconAriaLabel,
    cardType
  } = props;

  return (
    <div className={style.cardContainer} aria-label={ariaLabel}>
      <div className={style.mainIcon} aria-label={mainIconAriaLabel} />
      <div className={style.title}>{reviewCardTitle}</div>
      {cardType === 'card-star' ? (
        <div className={style.textContainer}>
          <div className={style.textStar}>{reviewCardValue}</div>
          <StarIcon className={style.icon} width={53} height={53} />
        </div>
      ) : (
        <div className={style.textContainer}>
          <NovaCompositionNavigationArrowTop className={style.icon} width={53} height={53} />
          <div className={style.textRating}>{reviewCardValue}</div>
        </div>
      )}
    </div>
  );
};

ReviewCardCongrats.propTypes = {
  'aria-label': PropTypes.string,
  reviewCardTitle: PropTypes.string,
  reviewCardValue: PropTypes.string,
  mainIconAriaLabel: PropTypes.string,
  cardType: PropTypes.string
};

export default ReviewCardCongrats;
