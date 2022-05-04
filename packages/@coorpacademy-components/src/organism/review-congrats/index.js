import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../../atom/button-link';
import MoleculeReviewCardCongrats from '../../molecule/review-card-congrats';
import style from './style.css';

const ReviewCongrats = props => {
  const {
    'aria-label': ariaLabel,
    title,
    cardCongratsStar,
    cardCongratsRank,
    buttonLabelRevise,
    buttonLabelReviseSkill,
    buttonAriaLabel,
    linkReviseSkill,
    linkRevise
  } = props;

  const buttonReviseSkillProps = {
    type: 'tertiary',
    'aria-label': buttonAriaLabel,
    label: buttonLabelReviseSkill,
    'data-name': 'button-revise',
    onClick: () => linkReviseSkill
  };
  const buttonReviseProps = {
    type: 'primary',
    'aria-label': buttonAriaLabel,
    label: buttonLabelRevise,
    'data-name': 'button-revise',
    onClick: () => linkRevise
  };

  const container = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      container.current.scrollTo({
        left: 1000,
        behavior: 'smooth'
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={style.mainContainer} aria-label={ariaLabel}>
      <div className={style.containerCongrats}>
        <div className={style.title}>{title}</div>
        <div className={style.test} />
        <div ref={container} className={style.containerCards}>
          <MoleculeReviewCardCongrats {...cardCongratsStar} className={style.cardStar} />
          <MoleculeReviewCardCongrats
            {...cardCongratsRank}
            timerAnimation={1800}
            className={style.cardRank}
          />
        </div>
        <div className={style.buttonContainer}>
          <ButtonLink {...buttonReviseSkillProps} className={style.buttonRevise} />
          <ButtonLink {...buttonReviseProps} className={style.buttonRevise} />
        </div>
      </div>
    </div>
  );
};

ReviewCongrats.propTypes = {
  'aria-label': PropTypes.string,
  title: PropTypes.string,
  cardCongratsStar: PropTypes.shape(MoleculeReviewCardCongrats.propTypes),
  cardCongratsRank: PropTypes.shape(MoleculeReviewCardCongrats.propTypes),
  buttonLabelRevise: PropTypes.string,
  buttonLabelReviseSkill: PropTypes.string,
  buttonAriaLabel: PropTypes.string,
  linkReviseSkill: PropTypes.string,
  linkRevise: PropTypes.string
};

export default ReviewCongrats;
