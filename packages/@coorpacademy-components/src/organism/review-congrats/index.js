import React from 'react';
import PropTypes from 'prop-types';
import AtomLottieWrapper from '../../atom/lottie-wrapper';
import ButtonLink from '../../atom/button-link';
import MoleculeReviewCardCongrats from '../../molecule/review-card-congrats';
import style from './style.css';

const ReviewCongrats = props => {
  const {
    'aria-label': ariaLabel,
    animationLottie,
    title,
    cardCongratsStar,
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

  return (
    <div>
      <div className={style.containerConfettis}>
        <AtomLottieWrapper {...animationLottie} />
      </div>
      <div className={style.mainContainer} aria-label={ariaLabel}>
        <div className={style.title}>{title}</div>
        <MoleculeReviewCardCongrats {...cardCongratsStar} />
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
  animationLottie: PropTypes.shape(AtomLottieWrapper.propTypes),
  title: PropTypes.string,
  cardCongratsStar: PropTypes.shape(MoleculeReviewCardCongrats.propTypes),
  buttonLabelRevise: PropTypes.string,
  buttonLabelReviseSkill: PropTypes.string,
  buttonAriaLabel: PropTypes.string,
  linkReviseSkill: PropTypes.string,
  linkRevise: PropTypes.string
};

export default ReviewCongrats;
