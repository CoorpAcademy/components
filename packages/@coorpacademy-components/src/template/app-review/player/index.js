import React from 'react';
import isNil from 'lodash/fp/isNil';
import ReviewBackground from '../../../atom/review-background';
import ReviewCongrats from '../../../organism/review-congrats';
import ReviewHeader from '../../../organism/review-header';
import StackedSlides from '../../../organism/review-stacked-slides';
import CMPopin from '../../../molecule/cm-popin';
import style from './style.css';
import {PlayerReviewPropTypes} from './prop-types';

const PlayerReview = ({header, stack, reviewBackgroundAriaLabel, congrats, quitPopin}) => {
  return (
    <div
      key="review-player-container"
      data-name="review-player-container"
      className={style.playerReviewContainer}
    >
      <div key="player-background-container" className={style.playerBackground}>
        <ReviewBackground aria-label={reviewBackgroundAriaLabel} />
      </div>
      <div key="review-header-wrapper" className={style.reviewHeaderContainer}>
        <ReviewHeader {...header} />
      </div>
      <StackedSlides {...stack} />
      {isNil(congrats) ? null : (
        <div className={style.congrats} data-name="congrats-container">
          <ReviewCongrats {...congrats} />
        </div>
      )}

      {isNil(quitPopin) ? null : (
        <div className={style.quitPopin} data-name="popin-container">
          <CMPopin {...quitPopin} />
        </div>
      )}
    </div>
  );
};

PlayerReview.propTypes = PlayerReviewPropTypes;

export default PlayerReview;
