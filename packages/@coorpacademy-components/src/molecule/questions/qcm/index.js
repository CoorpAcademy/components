import React, {useMemo, useReducer} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import maxBy from 'lodash/fp/maxBy';
import set from 'lodash/fp/set';
import toString from 'lodash/fp/toString';
import {convert} from 'css-color-function';
import Provider from '../../../atom/provider';
import {innerHTML} from '../../../atom/label/style.css';
import style from './style.css';

const getAnswerStyle = (selected, isHovered, primarySkinColor) => ({
  color: selected ? primarySkinColor : convert(`color(${primarySkinColor} lightness(15%))`),
  ...(selected && {
    backgroundColor: isHovered
      ? convert(`color(${primarySkinColor} a(10%))`)
      : convert(`color(${primarySkinColor} a(5%))`),
    boxShadow: `0 4px 16px ${convert(`color(${primarySkinColor} a(20%))`)}`
  })
});

const QCM = (props, context) => {
  const {answers} = props;
  const longestAnswer = maxBy(({title}) => title.length, answers);
  const {skin} = context;
  const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);
  const initialState = useMemo(() => ({}), []);
  const [selectedHoveredAnswers, dispatch] = useReducer((state, action) => {
    const [key, result] = action;
    return set(key, result, state);
  }, initialState);

  const answersViews = useMemo(
    () =>
      answers.map((answer, key) => {
        const {onClick, title, selected, 'aria-label': ariaLabel} = answer;
        const answerKey = toString(key);
        const isHovered = get(answerKey, selectedHoveredAnswers);
        const answerStyle = getAnswerStyle(selected, isHovered, primarySkinColor);
        const longAnswerClass = longestAnswer.title === title ? style.longestAnswer : style.answer;
        const selectedAnswerClass = selected ? null : style.unselectedAnswer;

        const hoverReplaceActions = selected
          ? {
              // can't access dynamic skin color on :hover, so an artificial
              // hover has to be made for selected answers
              onMouseEnter: () => dispatch([answerKey, true]),
              onMouseLeave: () => dispatch([answerKey, false])
            }
          : {};

        return (
          <div
            {...hoverReplaceActions}
            data-name="answer"
            aria-label={ariaLabel || title}
            className={classnames(longAnswerClass, innerHTML, selectedAnswerClass)}
            onClick={onClick}
            style={answerStyle}
            data-selected={selected}
            key={key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: title}}
          />
        );
      }),
    [answers, longestAnswer, primarySkinColor, selectedHoveredAnswers]
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
