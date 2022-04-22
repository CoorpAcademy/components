import React from 'react';
import PropTypes from 'prop-types';
import {pipe, round, parseInt as _parseInt, multiply} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyStar as StarIcon,
  NovaSolidVoteRewardsRewardsBadge5 as RankIcon
} from '@coorpacademy/nova-icons';
import AtomLottieWrapper from '../../atom/lottie-wrapper';
import Animation, {EASE_OUT_CUBIC} from '../../hoc/animation';
import AnimationScheduler from '../../hoc/animation-scheduler';
import style from './style.css';

const ReviewCardCongrats = props => {
  const {
    'aria-label': ariaLabel,
    animationLottie,
    cardType,
    reviewCardTitle,
    reviewCardValue,
    rankText
  } = props;

  return (
    <div className={style.cardContainer} aria-label={ariaLabel}>
      <div className={style.mainIcon}>
        <AtomLottieWrapper {...animationLottie} width={165} height={165} loop={false} />
      </div>
      <div className={style.title}>{reviewCardTitle}</div>
      {cardType === 'card-star' ? (
        <div className={style.textContainer}>
          <AnimationScheduler animated>
            <div className={style.centerContent}>
              <span className={style.textStar}>
                <Animation name="counter" bezier={EASE_OUT_CUBIC} duration={2000}>
                  {progress => pipe(_parseInt(10), multiply(progress), round)(reviewCardValue)}
                </Animation>
              </span>
            </div>
          </AnimationScheduler>
          <StarIcon className={style.iconStar} width={53} height={53} />
        </div>
      ) : (
        <div className={style.textContainer}>
          <RankIcon className={style.iconRank} width={33} />
          <AnimationScheduler animated>
            <div className={style.centerContent}>
              <span className={style.textRating}>
                <Animation name="counter" bezier={EASE_OUT_CUBIC} duration={2000}>
                  {progress => pipe(_parseInt(10), multiply(progress), round)(reviewCardValue)}
                </Animation>
              </span>
            </div>
          </AnimationScheduler>
          <div className={style.rankText}>{rankText}</div>
        </div>
      )}
    </div>
  );
};

ReviewCardCongrats.propTypes = {
  'aria-label': PropTypes.string,
  animationLottie: PropTypes.shape(AtomLottieWrapper.propTypes),
  cardType: PropTypes.string,
  reviewCardTitle: PropTypes.string,
  reviewCardValue: PropTypes.string,
  rankText: PropTypes.string
};

export default ReviewCardCongrats;
