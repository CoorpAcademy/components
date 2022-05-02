import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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

  const [displayCardStar, setDisplayCardStar] = useState(false);
  const [displayCardRank, setDisplayCardRank] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    const timerFirstStep = setTimeout(() => {
      setDisplayCardStar(true);
    }, 800);
    const timerCardRank = setTimeout(() => {
      setDisplayCardRank(true);
    }, 2000);

    const timer = setTimeout(() => {
      // const container = document.getElementById('container');
      container.current.scrollTo({
        left: 1000,
        behavior: 'smooth'
      });
    }, 2000);
    return () => clearTimeout(timerFirstStep, timerCardRank, timer);
  }, []);

  const wrapperStyleCardStar = classnames(
    displayCardStar ? style.cardStarTranslateY : null,
    displayCardRank ? style.cardStarTranslateX : style.cardStarTranslateY
  );
  const wrapperStyleCardRank = classnames(displayCardRank ? style.cardRank : style.hiddenCardRank);

  return (
    <div className={style.mainContainer} aria-label={ariaLabel}>
      <div className={style.containerCongrats}>
        <div className={style.title}>{title}</div>
        <div ref={container} className={style.containerCards}>
          {displayCardStar ? (
            <MoleculeReviewCardCongrats {...cardCongratsStar} className={wrapperStyleCardStar} />
          ) : (
            <div className={style.hiddenCardStar} />
          )}
          {displayCardRank ? (
            <MoleculeReviewCardCongrats {...cardCongratsRank} className={wrapperStyleCardRank} />
          ) : null}
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
