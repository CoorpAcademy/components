import React, {useMemo} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import maxBy from 'lodash/fp/maxBy';
import Provider from '../../../atom/provider';
import {useWebContext} from '../../../atom/web-context';
import {getShadowBoxColorFromPrimary} from '../../../util/get-shadow-box-color-from-primary';
import style from './style.css';

const QCM = (props, legacyContext) => {
  const {answers} = props;
  const longestAnswer = maxBy(({title}) => title.length, answers);
  const context = useWebContext();
  const skin = getOr(legacyContext.skin, 'skin', context);
  const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);

  const answersViews = useMemo(
    () =>
      answers.map((answer, key) => {
        const {onClick, title, selected, 'aria-label': ariaLabel} = answer;
        const longAnswerClass = longestAnswer.title === title ? style.longestAnswer : style.answer;
        const selectedAnswerClass = selected ? style.selectedAnswer : style.unselectedAnswer;

        return (
          <div
            data-name="answer"
            aria-label={ariaLabel || title}
            className={classnames(longAnswerClass, style.innerHTML, selectedAnswerClass)}
            onClick={onClick}
            style={{
              ...(selected && {
                boxShadow: `0 4px 16px ${getShadowBoxColorFromPrimary(primarySkinColor)}`
              })
            }}
            data-selected={selected}
            key={key}
          >
            <div
              data-name="answer-background"
              style={{backgroundColor: selected ? primarySkinColor : '#F4F4F5' /* cm_grey_75 */}}
              className={style.background}
            />
            <span
              data-name="answer-label"
              className={style.answerText}
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
