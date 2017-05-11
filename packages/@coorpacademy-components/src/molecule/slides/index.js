import React from 'react';
import PropTypes from 'prop-types';
import Cta from '../../atom/cta';
import style from './style.css';

const Slides = (props, context) => {
  const {progression, question, cta} = props;

  const progressionWidth = progression.current / progression.total * 100;

  return (
    <div className={style.wrapper}>
      <div className={style.progressionWrapper}>
        <div
          className={style.progressionBar}
          style={{
            width: `${progressionWidth}%`
          }}
        />
      </div>
      <div className={style.progressionCount}>
        <span>{progression.current}</span>/{progression.total}
      </div>
      <div className={style.guideWrapper}>
        Need some help?
      </div>
      <div className={style.question}>
        {question}
      </div>
      <div className={style.ctaWrapper}>
        <Cta {...cta} />
      </div>
    </div>
  );
};

Slides.propTypes = {
  progression: PropTypes.shape({
    current: PropTypes.number.required,
    total: PropTypes.number.required
  }),
  question: PropTypes.string,
  cta: PropTypes.object.required
};

export default Slides;
