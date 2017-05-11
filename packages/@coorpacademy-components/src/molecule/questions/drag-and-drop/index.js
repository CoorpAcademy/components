import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import style from './style.css';

const DragAndDrop = (props, context) => {
  const {answers, selectedAnswers} = props;
  const {translate} = context;

  const selectedAnswersViews = map(answer => {
    const {onClick, title} = answer;
    return (
      <div className={style.selectedAnswer} onClick={onClick}>
        {title}
      </div>
    );
  }, selectedAnswers);

  const answersViews = map(answer => {
    const {onClick, title, selected} = answer;
    return (
      <div className={selected ? style.invisibleAnswer : style.answer} onClick={onClick}>
        {title}
      </div>
    );
  }, answers);

  const emptyView = selectedAnswers.length > 0
    ? null
    : <span>{translate('Select the correct option(s) below')}</span>;

  return (
    <div className={style.wrapper}>
      <div className={style.selectedAnswers}>
        {emptyView || selectedAnswersViews}
      </div>
      <div className={style.answers}>
        {answersViews}
      </div>
    </div>
  );
};

DragAndDrop.contextTypes = {
  translate: PropTypes.func
};

DragAndDrop.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      selected: PropTypes.bool,
      onClick: PropTypes.func
    })
  ),
  selectedAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      onClick: PropTypes.func
    })
  )
};

export default DragAndDrop;
