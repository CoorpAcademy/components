import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Life from '../../../../atom/life';
import style from './style.css';

const CorrectionPart = props => {
  const {fail = false, lives, wrongAnswer, title, subtitle} = props;

  return (
    <section>
      <div className={style.titlesWrapper}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {fail && wrongAnswer ? <p className={style.wrongAnswer}>{wrongAnswer}</p> : null}
      </div>
      <div className={style.lifeWrapper}>
        <Life fail={fail} count={lives} />
      </div>
    </section>
  );
};

const NextQuestionPart = props => {
  const {title, onClick} = props;

  return (
    <section>
      <button onClick={onClick}>
        <label>{title}</label>
        <span className={style.nextIcon} />
      </button>
    </section>
  );
};

const PopinHeader = props => {
  const {fail = false, title, subtitle, lives, wrongAnswer, cta} = props;
  const className = classnames([style.header, fail && style.fail]);
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
