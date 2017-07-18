import React from 'react';
import PropTypes from 'prop-types';
import pipe from 'lodash/fp/pipe';
import filter from 'lodash/fp/filter';
import orderBy from 'lodash/fp/orderBy';
import Provider from '../../../atom/provider';
import style from './style.css';

const Picker = (props, context) => {
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

  return (
    <div>
      <div className={selectedAnswersViews ? style.selectedAnswers : style.emptyAnswers}>
        {selectedAnswersViews || emptyView}
      </div>
      <div className={style.answers}>
        {answersViews}
      </div>
    </div>
  );
};

Picker.contextTypes = {
  translate: Provider.childContextTypes.translate
};

Picker.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func,
      order: PropTypes.number,
      selected: PropTypes.bool,
      title: PropTypes.string
    })
  )
};

export default Picker;
