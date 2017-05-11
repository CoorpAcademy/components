import React from 'react';
import PropTypes from 'prop-types';
import filter from 'lodash/fp/filter';
import map from 'lodash/fp/map';
import style from './style.css';

const DragAndDrop = (props, context) => {
  const {answers} = props;

  const selectedAnswers = filter({selected: true}, answers);

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

  return (
    <div className={style.wrapper}>
      <div className={style.selectedAnswers}>
        {selectedAnswersViews}
      </div>
      <div className={style.answers}>
        {answersViews}
      </div>
    </div>
  );
};

DragAndDrop.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      selected: PropTypes.bool,
      onClick: PropTypes.func
    })
  )
};

export default DragAndDrop;
