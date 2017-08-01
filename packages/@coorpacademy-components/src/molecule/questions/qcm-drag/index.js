import React from 'react';
import PropTypes from 'prop-types';
import pipe from 'lodash/fp/pipe';
import filter from 'lodash/fp/filter';
import orderBy from 'lodash/fp/orderBy';
import Provider from '../../../atom/provider';
import style from './style.css';

const QcmDrag = (props, context) => {
  const {answers} = props;
  const {translate} = context;

  const selectedAnswers = pipe(filter('selected'), orderBy('order', 'asc'))(answers);

  const selectedAnswersViews = selectedAnswers.map((answer, key) => {
    const {onClick, title} = answer;
    return (
      <div className={style.selectedAnswer} onClick={onClick} key={key}>
        {title}
      </div>
    );
  });

  const answersViews = answers.map((answer, key) => {
    const {onClick, title, selected} = answer;
    return (
      <div className={selected ? style.invisibleAnswer : style.answer} onClick={onClick} key={key}>
        {title}
      </div>
    );
  });

  const emptyView = <span>{translate('Select the correct option(s) below')}</span>;

  const SelectionBox = () =>
    <div className={selectedAnswersViews.length > 0 ? style.selectedAnswers : style.emptyAnswers}>
      {selectedAnswersViews.length > 0 ? selectedAnswersViews : emptyView}
    </div>;

  return (
    <div>
      <SelectionBox />
      <div className={style.answers}>
        {answersViews}
      </div>
    </div>
  );
};

QcmDrag.contextTypes = {
  translate: Provider.childContextTypes.translate
};

QcmDrag.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func,
      order: PropTypes.number,
      selected: PropTypes.bool,
      title: PropTypes.string
    })
  )
};

export default QcmDrag;
