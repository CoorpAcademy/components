import React from 'react';
import PropTypes from 'prop-types';
import Life from '../../../../atom/life';
import style from './style.css';

const WrongAnswer = ({text}) => <p className={style.wrongAnswer}>{text}</p>;

const IconsPart = props => {
  const {lives, fail, stars, rank} = props;
  const livesIcon =
    lives !== undefined && <Life fail={fail} count={lives} className={style.life} />;
  const starsIcon = stars !== undefined && <p className={style.icon}>{stars}</p>;
  const rankIcon = rank !== undefined && <p className={style.icon}>{rank}</p>;

  return (
    <div className={style.lifeWrapper}>
      {livesIcon}
      {starsIcon}
      {rankIcon}
    </div>
  );
};
const CorrectionPart = props => {
  const {fail = false, wrongAnswer, title, subtitle} = props;
  const className = fail ? style.correctionSectionFail : style.correctionSectionDefault;

  return (
    <div className={className}>
      <div className={style.titlesWrapper}>
        <h1 className={style.title}>{title}</h1>
        <h2 className={style.subtitle}>{subtitle}</h2>
        {fail && wrongAnswer ? <WrongAnswer text={wrongAnswer} /> : null}
      </div>
      <IconsPart {...props} />
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
  const {fail = false, title, subtitle, lives, stars, rank, wrongAnswer, cta} = props;
  const handleOnClick = cta.onClick;

  return (
    <div className={style.header}>
      <CorrectionPart
        title={title}
        subtitle={subtitle}
        lives={lives}
        stars={stars}
        rank={rank}
        fail={fail}
        wrongAnswer={wrongAnswer}
      />
      <NextQuestionPart title={cta.title} onClick={handleOnClick} />
    </div>
  );
};

PopinHeader.propTypes = {
  fail: PropTypes.bool,
  lives: PropTypes.number,
  stars: PropTypes.string,
  rank: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  wrongAnswer: PropTypes.string,
  cta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
  })
};

export default PopinHeader;
