import React, {useEffect, useState} from 'react';
import classnames from 'classnames';
import {pipe, round, parseInt as _parseInt, multiply} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyStar as StarIcon,
  NovaSolidVoteRewardsRewardsBadge5 as RankIcon
} from '@coorpacademy/nova-icons';
import LottieWrapper from '../../atom/lottie-wrapper';
import Animation, {EASE_OUT_CUBIC} from '../../hoc/animation';
import AnimationScheduler from '../../hoc/animation-scheduler';
import style from './style.css';
import propTypes from './prop-types';

export const setAnimations = (setIsAnimationVisible, setIsAnimated) => () => {
  setIsAnimationVisible('play');
  setIsAnimated(true);
};

const ReviewCardCongrats = props => {
  const {
    'aria-label': ariaLabel,
    'data-name': dataName,
    animationLottie,
    cardType,
    iconAriaLabel,
    className,
    reviewCardTitle,
    reviewCardValue,
    rankSuffix,
    timerAnimation
  } = props;

  const [isAnimationVisible, setIsAnimationVisible] = useState('loading');
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    let timer;
    // istanbul ignore else
    if (!isAnimationVisible || !isAnimated) {
      timer = setTimeout(setAnimations(setIsAnimationVisible, setIsAnimated), timerAnimation);
    }
    return () => timer && clearTimeout(timer);
  }, [timerAnimation, isAnimated, isAnimationVisible]);

  const wrapperClassName = classnames(
    className,
    style.cardContainer,
    cardType === 'card-star' ? style.cardStar : style.cardRank
  );

  return (
    <div className={wrapperClassName} aria-label={ariaLabel} data-name={dataName}>
      <div className={style.mainIcon}>
        <LottieWrapper
          {...animationLottie}
          loop={false}
          animationControl={isAnimationVisible}
          autoplay={false}
          data-name="lottie-wrapper"
          className={style.wrapperLottie}
          backupImageClassName={style.ie11Backup}
        />
      </div>
      <div className={style.title}>{reviewCardTitle}</div>
      <div className={cardType === 'card-star' ? style.textContainerStar : style.textContainerRank}>
        {cardType === 'card-rank' ? (
          <RankIcon className={style.iconRank} width={40} height={40} aria-label={iconAriaLabel} />
        ) : null}
        <AnimationScheduler animated={isAnimated}>
          <div>
            <span className={cardType === 'card-star' ? style.textStar : style.textRank}>
              <Animation name="counter" bezier={EASE_OUT_CUBIC} duration={2000}>
                {progress => pipe(_parseInt(10), multiply(progress), round)(reviewCardValue)}
              </Animation>
            </span>
          </div>
        </AnimationScheduler>
        {cardType === 'card-star' ? (
          <StarIcon className={style.iconStar} width={53} height={53} aria-label={iconAriaLabel} />
        ) : (
          <div className={style.rankSuffix}>{rankSuffix}</div>
        )}
      </div>
    </div>
  );
};

ReviewCardCongrats.propTypes = propTypes;

export default ReviewCardCongrats;
