import React from 'react';
import PropTypes from 'prop-types';
import pipe from 'lodash/fp/pipe';
import filter from 'lodash/fp/filter';
import orderBy from 'lodash/fp/orderBy';
import Provider from '../../../atom/provider';
import style from './style.css';

const AnswersPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    onClick: PropTypes.func,
    order: PropTypes.number,
    selected: PropTypes.bool,
    title: PropTypes.string
  })
);

const EmptyView = (props, {translate}) =>
  <span className={style.emptySpan}>
    {translate('Select the correct option(s) below')}
  </span>;

EmptyView.contextTypes = {
  translate: Provider.childContextTypes.translate
};

const Choices = ({answers}) => {
  const answersViews = answers.map((answer, key) => {
    const {onClick, title, selected} = answer;
    return (
      <div className={selected ? style.invisibleAnswer : style.answer} onClick={onClick} key={key}>
        {title}
      </div>
    );
  });

  return (
    <div className={style.qcmDrag}>
      {answersViews}
    </div>
  );
};

Choices.propTypes = {
  answers: AnswersPropTypes
};

const SelectionBox = ({answers}) => {
  const selectedAnswers = pipe(filter('selected'), orderBy('order', 'asc'))(answers);

  const selectedAnswersViews = selectedAnswers.map((answer, key) => {
    const {onClick, title} = answer;
    return (
      <div className={style.selectedAnswer} onClick={onClick} key={key}>
        {title}
      </div>
    );
  });

  if (selectedAnswersViews.length > 0) {
    return (
      <div className={style.selectedAnswers}>
        {selectedAnswersViews}
      </div>
    );
  } else {
    return (
      <div className={style.emptyAnswers}>
        <EmptyView />
      </div>
    );
  }
};

SelectionBox.propTypes = {
  answers: AnswersPropTypes
};

const QcmDrag = ({answers}, context) =>
  <div className={style.qcmDrag}>
    <SelectionBox answers={answers} />
    <div className={style.answers}>
      <Choices answers={answers} />
    </div>
  </div>;

QcmDrag.contextTypes = {
  translate: Provider.childContextTypes.translate
};

QcmDrag.propTypes = {
  answers: AnswersPropTypes
};

export default QcmDrag;
