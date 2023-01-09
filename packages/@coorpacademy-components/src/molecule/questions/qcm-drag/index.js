import React from 'react';
import PropTypes from 'prop-types';
import {pipe, filter, orderBy, getOr} from 'lodash/fp';
import classnames from 'classnames';
import Provider, {GetSkinFromContext} from '../../../atom/provider';
import {getShadowBoxColorFromPrimary} from '../../../util/get-shadow-box-color-from-primary';
import style from './style.css';

const AnswersPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    onClick: PropTypes.func,
    order: PropTypes.number,
    selected: PropTypes.bool,
    title: PropTypes.string,
    help: PropTypes.string
  })
);

const EmptyView = ({help}) => <span className={style.emptySpan}>{help}</span>;

EmptyView.propTypes = {
  help: PropTypes.string
};

const Choices = ({answers}) => {
  const answersViews = answers.map((answer, key) => {
    const {onClick, title, selected} = answer;
    return (
      <div
        className={classnames(selected ? style.invisibleAnswer : style.unselected, style.innerHTML)}
        data-name="answer"
        onClick={onClick}
        key={key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: title}}
      />
    );
  });

  return <div className={style.choices}>{answersViews}</div>;
};

Choices.propTypes = {
  answers: AnswersPropTypes
};

const SelectedAnswerSections = ({answers, help, backgroundColor}) => {
  const selectedAnswers = pipe(filter('selected'), orderBy('order', 'asc'))(answers);
  const selectedAnswersViews = selectedAnswers.map((answer, key) => {
    const {onClick, title} = answer;
    return (
      <div
        data-selected="true"
        onClick={onClick}
        key={key}
        data-name="selectedAnswer"
        className={style.selected}
        style={{
          boxShadow: `0px 4px 16px ${getShadowBoxColorFromPrimary(backgroundColor)}`
        }}
      >
        <div
          data-name="answerBackground"
          style={{
            backgroundColor
          }}
          className={style.background}
        />
        <div className={style.content}>
          <span
            data-name="answerContent"
            className={classnames(style.selectedAnswerText, style.innerHTML)}
            title={title}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: title}}
          />
        </div>
      </div>
    );
  });

  if (selectedAnswersViews.length > 0) {
    return <div className={style.selectedAnswers}>{selectedAnswersViews}</div>;
  } else {
    return (
      <div className={style.emptyAnswers}>
        <EmptyView help={help} />
      </div>
    );
  }
};

SelectedAnswerSections.propTypes = {
  answers: AnswersPropTypes,
  help: EmptyView.propTypes.help,
  backgroundColor: PropTypes.string
};

const QcmDrag = ({answers, help}, legacyContext) => {
  const skin = GetSkinFromContext(legacyContext);
  const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);

  return (
    <div className={style.wrapper} role="group">
      <SelectedAnswerSections answers={answers} help={help} backgroundColor={primarySkinColor} />
      <div data-name="qcm-drag-answers" className={style.answers}>
        <Choices answers={answers} />
      </div>
    </div>
  );
};

QcmDrag.propTypes = {
  answers: AnswersPropTypes,
  help: SelectedAnswerSections.propTypes.help
};

QcmDrag.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default QcmDrag;
