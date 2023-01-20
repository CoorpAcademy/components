import React from 'react';
import isNil from 'lodash/fp/isNil';
import classnames from 'classnames';
import ReviewBackground from '../../../atom/review-background';
import ReviewCongrats from '../../../organism/review-congrats';
import ReviewHeader from '../../../organism/review-header';
import StackedSlides from '../../../organism/review-stacked-slides';
import CMPopin from '../../../molecule/cm-popin';
import style from './style.css';
import propTypes from './prop-types';

const PlayerReview = ({header, stack, congrats, quitPopin}) => {
  return (
    <div
      key="review-player-container"
      data-name="review-player-container"
      className={style.playerReviewContainer}
    >
      <div key="player-background-container" className={style.playerBackground}>
        <ReviewBackground />
      </div>
      <div
        key="review-header-wrapper"
        className={classnames(
          style.reviewHeaderContainer,
          congrats && style.reviewHeaderContainerCongrats
        )}
      >
        <ReviewHeader {...header} />
      </div>
      <StackedSlides {...stack} />
      {isNil(congrats) ? null : (
        <div className={style.congrats} data-testid="congrats-container">
          <ReviewCongrats {...congrats} />
        </div>
      )}

      {isNil(quitPopin) ? null : (
        <div className={style.quitPopin} data-testid="quit-popin-container">
          <CMPopin {...quitPopin} />
        </div>
      )}
    </div>
  );
};

PlayerReview.propTypes = propTypes;

export default PlayerReview;
