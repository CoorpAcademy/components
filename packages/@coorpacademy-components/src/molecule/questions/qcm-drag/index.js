import React from 'react';
import PropTypes from 'prop-types';
import {pipe, filter, orderBy} from 'lodash/fp';
import classnames from 'classnames';
import Provider from '../../../atom/provider';
import {innerHTML} from '../../../atom/label/style.css';
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

EmptyView.contextTypes = {
  translate: Provider.childContextTypes.translate
};

EmptyView.propTypes = {
  help: PropTypes.string
};

const Choices = ({answers}) => {
  const answersViews = answers.map((answer, key) => {
    const {onClick, title, selected} = answer;
    return (
      <div
        className={classnames(selected ? style.invisibleAnswer : style.answer, innerHTML)}
        data-name="answer"
        onClick={onClick}
        key={key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: title}}
      />
    );
  });

  return <div className={style.qcmDrag}>{answersViews}</div>;
};

Choices.propTypes = {
  answers: AnswersPropTypes
};

const SelectionBox = ({answers, help}) => {
  const selectedAnswers = pipe(filter('selected'), orderBy('order', 'asc'))(answers);
  const selectedAnswersViews = selectedAnswers.map((answer, key) => {
    const {onClick, title} = answer;
    return (
      <div
        className={classnames(style.selectedAnswer, innerHTML)}
        data-selected="true"
        onClick={onClick}
        key={key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: title}}
      />
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

SelectionBox.propTypes = {
  answers: AnswersPropTypes,
  help: EmptyView.propTypes.help
};

const QcmDrag = ({answers, help}, context) => (
  <div className={style.qcmDrag}>
    <SelectionBox answers={answers} help={help} />
    <div data-name="qcm-drag-answers" className={style.answers}>
      <Choices answers={answers} />
    </div>
  </div>
);

QcmDrag.propTypes = {
  answers: AnswersPropTypes,
  help: SelectionBox.propTypes.help
};

export default QcmDrag;
