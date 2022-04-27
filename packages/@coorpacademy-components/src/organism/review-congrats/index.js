import React, {useEffect, useState} from 'react';
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

  useEffect(() => {
    const timerCardStar = setTimeout(() => {
      setDisplayCardStar(true);
    }, 100);
    const timerCardRank = setTimeout(() => {
      setDisplayCardRank(true);
    }, 2000);

    return () => clearTimeout(timerCardStar, timerCardRank);
  }, []);

  const wrapperStyleCardStar = classnames(
    displayCardStar ? style.cardStar : style.hiddenCardStar,
    displayCardRank ? style.cardStarTranslateX : style.cardStar
  );
  const wrapperStyleCardRank = classnames(displayCardRank ? style.cardRank : style.hiddenCardRank);

  return (
    <div className={style.containerCongrats} aria-label={ariaLabel}>
      <div className={style.title}>{title}</div>
      <div className={style.containerCards}>
        <MoleculeReviewCardCongrats {...cardCongratsStar} className={wrapperStyleCardStar} />
        <MoleculeReviewCardCongrats {...cardCongratsRank} className={wrapperStyleCardRank} />
      </div>
      <div className={style.buttonContainer}>
        <ButtonLink {...buttonReviseSkillProps} className={style.buttonRevise} />
        <ButtonLink {...buttonReviseProps} className={style.buttonRevise} />
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
