import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Life from '../../../../atom/life';
import style from './style.css';

const WrongAnswer = ({text}) => <p className={classnames(style.text, style.wrongAnswer)}>{text}</p>;

const CorrectionPart = props => {
  const {fail = false, lives, wrongAnswer, title, subtitle} = props;

  return (
    <div className={classnames(style.section, style.correction)}>
      <div className={classnames(style.wrapper, style.titles)}>
        <h1 className={classnames(style.text, style.title)}>{title}</h1>
        <h2 className={classnames(style.text, style.subtitle)}>{subtitle}</h2>
        {fail && wrongAnswer ? <WrongAnswer text={wrongAnswer} /> : null}
      </div>
      <div className={classnames(style.wrapper, style.life)}>
        <Life fail={fail} count={lives} className={style.component} />
      </div>
    </div>
  );
};

const NextQuestionPart = props => {
  const {title, onClick} = props;

  return (
    <div className={classnames(style.section, style.next)}>
      <button className={style.button} onClick={onClick}>
        <label className={classnames(style.clickable, style.label)}>{title}</label>
        <span className={classnames(style.clickable, style.icon, style.angleRight)} />
      </button>
    </div>
  );
};

const PopinHeader = props => {
  const {fail = false, title, subtitle, lives, wrongAnswer, cta} = props;
  const className = classnames(style.header, fail && style.fail);
  const handleOnClick = cta.onClick;

  return (
    <div className={className}>
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
