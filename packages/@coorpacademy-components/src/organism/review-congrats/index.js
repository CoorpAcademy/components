import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import AtomLottieWrapper from '../../atom/lottie-wrapper';
import ButtonLink from '../../atom/button-link';
import MoleculeReviewCardCongrats from '../../molecule/review-card-congrats';
import style from './style.css';

export const setScroll = container => () => {
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
      <div className={style.containerCongrats}>
        <div className={style.title}>{title}</div>
        <div ref={container} className={style.containerCards}>
          <MoleculeReviewCardCongrats {...cardCongratsStar} className={style.cardStar} />
          <MoleculeReviewCardCongrats
            {...cardCongratsRank}
            timerAnimation={1800}
            className={style.cardRank}
          />
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
      <AtomLottieWrapper
        {...animationLottie}
        loop={false}
        animationControl={'play'}
        autoplay
        data-name="lottie-wrapper"
        className={style.lottie}
        backupImageClassName={style.ie11Backup}
        rendererSettings={{animationClassName: style.test}}
      />
    </div>
  );
};

ReviewCongrats.propTypes = {
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string,
  animationLottie: PropTypes.shape(AtomLottieWrapper.propTypes),
  title: PropTypes.string,
  cardCongratsStar: PropTypes.shape(MoleculeReviewCardCongrats.propTypes),
  cardCongratsRank: PropTypes.shape(MoleculeReviewCardCongrats.propTypes),
  buttonRevising: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
  }),
  buttonRevisingSkill: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
  })
};

export default ReviewCongrats;
