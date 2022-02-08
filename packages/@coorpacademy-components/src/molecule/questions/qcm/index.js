import React, {useMemo} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import maxBy from 'lodash/fp/maxBy';
import {convert} from 'css-color-function';
import Provider from '../../../atom/provider';
import {innerHTML} from '../../../atom/label/style.css';
import style from './style.css';

const QCM = (props, context) => {
  const {answers} = props;
  const longestAnswer = maxBy(({title}) => title.length, answers);
  const {skin} = context;
  const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);

  const answersViews = useMemo(
    () =>
      answers.map((answer, key) => {
        const {onClick, title, selected, 'aria-label': ariaLabel} = answer;
        const longAnswerClass = longestAnswer.title === title ? style.longestAnswer : style.answer;
        const selectedAnswerClass = selected ? style.selectedAnswer : style.unselectedAnswer;

        // const hoverReplaceActions = selected
        //   ? {
        //       // can't access dynamic skin color on :hover, so an artificial
        //       // hover has to be made for selected answers
        //       onMouseEnter: () => dispatch([answerKey, true]),
        //       onMouseLeave: () => dispatch([answerKey, false])
        //     }
        //   : {};

        return (
          <div
            data-name="answer"
            aria-label={ariaLabel || title}
            className={classnames(longAnswerClass, innerHTML, selectedAnswerClass)}
            onClick={onClick}
            style={{
              boxShadow: selected
                ? `0 4px 16px ${convert(`color(${primarySkinColor} a(20%))`)}`
                : null
            }}
            data-selected={selected}
            key={key}
          >
            <div
              style={{backgroundColor: selected ? primarySkinColor : '#F4F4F5' /* cm_grey_75 */}}
              className={style.background}
            />
            <span
              className={style.answerText}
              style={{
                color: selected
                  ? primarySkinColor
                  : convert(`color(${primarySkinColor} lightness(15%))`)
              }}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{__html: title}}
            />
          </div>
        );
      }),
    [answers, longestAnswer, primarySkinColor]
  );

  return (
    <div data-name="qcm" className={style.wrapper}>
      {answersViews}
    </div>
  );
};

QCM.contextTypes = {
  skin: Provider.childContextTypes.skin
};

QCM.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      selected: PropTypes.bool,
      onClick: PropTypes.func,
      'aria-label': PropTypes.string
    })
  )
};

export default QCM;
