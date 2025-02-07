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
    const checkboxId = `checkbox-drag-${key}`;
    return (
      <div
        className={classnames(selected ? style.invisibleAnswer : style.unselected, style.innerHTML)}
        data-name="answer"
        key={key}
        onClick={onClick}
      >
        <label htmlFor={checkboxId}>
          <input
            id={checkboxId}
            type="checkbox"
            value={title}
            title={title}
            aria-label={title}
            checked={selected}
            onChange={onClick}
            className={style.hiddenCheckbox}
          />
          {title}
        </label>
      </div>
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

  return selectedAnswersViews.length > 0 ? (
    <div className={style.selectedAnswers}>{selectedAnswersViews}</div>
  ) : (
    <div className={style.emptyAnswers}>
      <EmptyView help={help} />
    </div>
  );
};

SelectedAnswerSections.propTypes = {
  answers: AnswersPropTypes,
  help: EmptyView.propTypes.help,
  backgroundColor: PropTypes.string
};

const QcmDrag = ({answers, help, groupAriaLabel}, legacyContext) => {
  const skin = GetSkinFromContext(legacyContext);
  const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);

  return (
    <div className={style.wrapper} role="group" aria-label={groupAriaLabel}>
      <SelectedAnswerSections answers={answers} help={help} backgroundColor={primarySkinColor} />
      <div data-name="qcm-drag-answers" className={style.answers}>
        <Choices answers={answers} />
      </div>
    </div>
  );
};

QcmDrag.propTypes = {
  answers: AnswersPropTypes,
  help: SelectedAnswerSections.propTypes.help,
  groupAriaLabel: PropTypes.string
};

QcmDrag.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default QcmDrag;
