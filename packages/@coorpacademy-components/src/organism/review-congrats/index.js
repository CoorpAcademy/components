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

  const [changeContainer, setChangeContainer] = useState(false);
  const [displayTitle, setDisplayTitle] = useState(false);
  const [displayButton, setDisplayButton] = useState(false);
  const [displayCardStar, setDisplayCardStar] = useState(false);
  const [displayCardRank, setDisplayCardRank] = useState(false);

  useEffect(() => {
    const timerFirstStep = setTimeout(() => {
      setChangeContainer(true);
      setDisplayTitle(true);
      setDisplayButton(true);
      setDisplayCardStar(true);
    }, 800);
    const timerCardRank = setTimeout(() => {
      setDisplayCardRank(true);
    }, 2000);
    return () => clearTimeout(timerFirstStep, timerCardRank);
  }, []);

  const wrapperStyleContainer = classnames(
    style.containerCongrats,
    changeContainer ? style.containerCongrats2 : style.containerCongrats
  );
  const wrapperStyleTitle = classnames(
    style.title,
    displayTitle ? style.titleAnimation : style.title
  );
  const wrapperStyleButton = classnames(
    style.buttonContainer,
    displayButton ? style.buttonAnimation : style.buttonContainer
  );
  const wrapperStyleCardStar = classnames(
    displayCardStar ? style.cardStarTranslateY : style.hiddenCardStar,
    displayCardRank ? style.cardStarTranslateX : style.cardStarTranslateY
  );
  const wrapperStyleCardRank = classnames(displayCardRank ? style.cardRank : style.hiddenCardRank);

  return (
    <div className={wrapperStyleContainer} aria-label={ariaLabel}>
      <div className={wrapperStyleTitle}>{title}</div>
      <div className={style.containerCards}>
        <MoleculeReviewCardCongrats {...cardCongratsStar} className={wrapperStyleCardStar} />
        {displayCardRank ? (
          <MoleculeReviewCardCongrats {...cardCongratsRank} className={wrapperStyleCardRank} />
        ) : null}
      </div>
      <div className={wrapperStyleButton}>
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
