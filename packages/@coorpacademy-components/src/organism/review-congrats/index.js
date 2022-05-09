import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
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
    <div className={style.containerCongrats} aria-label={ariaLabel} data-name={dataName}>
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
  );
};

ReviewCongrats.propTypes = {
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string,
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
