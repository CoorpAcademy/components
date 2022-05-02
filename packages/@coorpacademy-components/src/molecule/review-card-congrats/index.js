import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
    className,
    reviewCardTitle,
    reviewCardValue,
    rankSuffix
  } = props;

  const [isAnimationVisible, setIsAnimationVisible] = useState('loading');
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationVisible('play');
      setIsAnimated(!isAnimated);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const wrapperClassName = classnames(
    className,
    style.cardContainer,
    cardType === 'card-star' ? style.cardStar : style.cardRank
  );

  return (
    <div className={wrapperClassName} aria-label={ariaLabel}>
      <div className={style.mainIcon}>
        <AtomLottieWrapper
          {...animationLottie}
          width={165}
          height={165}
          loop={false}
          animationControl={isAnimationVisible}
          autoplay={false}
        />
      </div>
      <div className={style.title}>{reviewCardTitle}</div>
      <div className={cardType === 'card-star' ? style.textContainerStar : style.textContainerRank}>
        {cardType === 'card-rank' ? (
          <RankIcon className={style.iconRank} width={40} height={40} />
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
          <StarIcon className={style.iconStar} width={53} height={53} />
        ) : (
          <div className={style.rankSuffix}>{rankSuffix}</div>
        )}
      </div>
    </div>
  );
};

ReviewCardCongrats.propTypes = {
  'aria-label': PropTypes.string,
  animationLottie: PropTypes.shape(AtomLottieWrapper.propTypes),
  cardType: PropTypes.string,
  className: PropTypes.string,
  reviewCardTitle: PropTypes.string,
  reviewCardValue: PropTypes.string,
  rankSuffix: PropTypes.string
};

export default ReviewCardCongrats;
