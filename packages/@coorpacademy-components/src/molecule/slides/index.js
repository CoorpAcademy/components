import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import Cta from '../../atom/cta';
import DragAndDrop from '../questions/drag-and-drop';
import Qcm from '../questions/qcm';
import style from './style.css';

const Slides = (props, context) => {
  const {progression, question, cta, help, answer} = props;
  const {skin, translate} = context;

  const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);

  const progressionWidth = progression.current / progression.total * 100;
  const helpView = help ? <div className={style.helpView}>{help}</div> : null;

  const answerView = answer
    ? (answerProps => {
        switch (answerProps.type) {
          case 'draganddrop':
            return <DragAndDrop {...answerProps} />;
          case 'qcm':
            return <Qcm {...answerProps} />;
          default:
            return null;
        }
      })(answer)
    : null;

  return (
    <div className={style.wrapper}>
      <div className={style.progressionWrapper}>
        <div
          className={style.progressionBar}
          style={{
            backgroundColor: primarySkinColor,
            width: `${progressionWidth}%`
          }}
        />
      </div>
      <div className={style.progressionCount}>
        <span style={{color: primarySkinColor}}>{progression.current}</span>
        /{progression.total}
      </div>
      <div className={style.guideWrapper}>
        {translate('Need some help?')}
      </div>
      <div className={style.question}>
        {question}
      </div>
      {helpView}
      <div className={style.answerWrapper}>
        {answerView}
      </div>
      <div className={style.ctaWrapper}>
        <Cta {...cta} />
      </div>
    </div>
  );
};

Slides.contextTypes = {
  translate: PropTypes.func,
  skin: PropTypes.object
};

Slides.propTypes = {
  progression: PropTypes.shape({
    current: PropTypes.number.required,
    total: PropTypes.number.required
  }),
  question: PropTypes.string.required,
  help: PropTypes.string,
  answer: {
    type: PropTypes.oneOf(['draganddrop', 'qcm']).required
  },
  cta: PropTypes.object.required
};

export default Slides;
