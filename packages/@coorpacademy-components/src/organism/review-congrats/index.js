import React, {useEffect, useRef} from 'react';
import LottieWrapper from '../../atom/lottie-wrapper';
import ButtonLink from '../../atom/button-link';
import ReviewCardCongrats from '../../molecule/review-card-congrats';
import style from './style.css';
import propTypes from './prop-types';

export const setScroll = container => () => {
  container.current?.scrollTo &&
    container.current.scrollTo({
      left: 1000,
      behavior: 'smooth'
    });
};

const ReviewCongrats = props => {
  const {
    'aria-label': ariaLabel,
    'data-name': dataName,
    animationLottie,
    title,
    cardCongratsStar,
    cardCongratsRank,
    buttonRevising,
    buttonRevisingSkill
  } = props;

  const container = useRef(null);

  useEffect(() => {
    const timer = setTimeout(setScroll(container), 2000);
    return () => timer && clearTimeout(timer);
  }, []);

  return (
    <div
      className={style.mainContainer}
      aria-label={ariaLabel}
      data-name={dataName}
      data-testid="congrats"
    >
      <LottieWrapper
        /** confetti animation */
        {...animationLottie}
        loop={false}
        animationControl={'play'}
        autoplay
        data-name="lottie-wrapper"
        className={style.lottie}
        backupImageClassName={style.ie11Backup}
      />
      <div className={style.containerCongrats}>
        <div className={style.title}>{title}</div>
        <div ref={container} className={style.containerCards}>
          {cardCongratsRank ? (
            <>
              <ReviewCardCongrats {...cardCongratsStar} className={style.cardStar} />
              <ReviewCardCongrats
                {...cardCongratsRank}
                timerAnimation={1800}
                className={style.cardRank}
              />
            </>
          ) : (
            <ReviewCardCongrats {...cardCongratsStar} className={style.cardStarNoRank} />
          )}
        </div>
        <div className={style.buttonContainer}>
          {buttonRevising ? (
            <ButtonLink
              {...buttonRevising}
              className={style.buttonRevise}
              data-testid="revise-skill-link"
            />
          ) : null}
          {buttonRevisingSkill ? (
            <ButtonLink
              {...buttonRevisingSkill}
              className={style.buttonRevise}
              data-testid="revise-another-skill-link"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

ReviewCongrats.propTypes = propTypes;

export default ReviewCongrats;
