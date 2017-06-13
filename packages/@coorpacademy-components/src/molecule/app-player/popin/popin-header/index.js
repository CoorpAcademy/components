import React from 'react';
import PropTypes from 'prop-types';
import Life from '../../../../atom/life';
import style from './style.css';

const WrongAnswer = ({text}) => <p className={style.wrongAnswer}>{text}</p>;

const CorrectionPart = props => {
  const {fail = false, lives, wrongAnswer, title, subtitle} = props;
  const className = fail ? style.correctionSectionFail : style.correctionSectionDefault;

  return (
    <div className={className}>
      <div className={style.titlesWrapper}>
        <h1 className={style.title}>{title}</h1>
        <h2 className={style.subtitle}>{subtitle}</h2>
        {fail && wrongAnswer ? <WrongAnswer text={wrongAnswer} /> : null}
      </div>
      <div className={style.lifeWrapper}>
        <Life fail={fail} count={lives} className={style.life} />
      </div>
    </div>
  );
};

const NextQuestionPart = props => {
  const {title, onClick} = props;

  return (
    <div className={style.nextSection}>
      <button className={style.nextButton} onClick={onClick}>
        <label className={style.nextButtonLabel}>{title}</label>
        <span className={style.nextButtonIcon} />
      </button>
    </div>
  );
};

const PopinHeader = props => {
  const {fail = false, title, subtitle, lives, wrongAnswer, cta} = props;
  const handleOnClick = cta.onClick;

  return (
    <div className={style.header}>
      <CorrectionPart
        title={title}
        subtitle={subtitle}
        lives={lives}
        fail={fail}
        wrongAnswer={wrongAnswer}
      />
      <NextQuestionPart title={cta.title} onClick={handleOnClick} />
    </div>
  );
};

PopinHeader.propTypes = {
  fail: PropTypes.bool,
  lives: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  wrongAnswer: PropTypes.string,
  cta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
  })
};

export default PopinHeader;
