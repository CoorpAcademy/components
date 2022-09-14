import React, {useEffect, useRef} from 'react';
import AtomLottieWrapper from '../../atom/lottie-wrapper';
import ButtonLink from '../../atom/button-link';
import MoleculeReviewCardCongrats from '../../molecule/review-card-congrats';
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
    <div className={style.mainContainer} aria-label={ariaLabel} data-name={dataName}>
      <AtomLottieWrapper
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
              <MoleculeReviewCardCongrats {...cardCongratsStar} className={style.cardStar} />
              <MoleculeReviewCardCongrats
                {...cardCongratsRank}
                timerAnimation={1800}
                className={style.cardRank}
              />
            </>
          ) : (
            <MoleculeReviewCardCongrats {...cardCongratsStar} className={style.cardStarNoRank} />
          )}
        </div>
        <div className={style.buttonContainer}>
          <ButtonLink
            {...buttonRevising}
            className={style.buttonRevise}
            data-name="revise-skill-link"
          />
          <ButtonLink {...buttonRevisingSkill} className={style.buttonRevise} />
        </div>
      </div>
    </div>
  );
};

ReviewCongrats.propTypes = propTypes;

export default ReviewCongrats;
