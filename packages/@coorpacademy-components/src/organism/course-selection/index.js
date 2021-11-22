import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash/fp';
import Search from '../../atom/input-search';
import Card from '../../molecule/card';
import style from './style.css';

const buildResultView = (courses, coursesSelectionAriaLabel, emptyMessages) => {
  if (isEmpty(courses)) {
    return (
      <div className={style.errorSection}>
        <span className={style.firstErrorMessage}>{emptyMessages.firstMessage}</span>
        <span className={style.secondErrorMessage}>{emptyMessages.secondMessage}</span>
      </div>
    );
  }

  const items = courses.map((card, index) => {
    return (
      <li className={style.cards} key={`card-${index}`}>
        <Card {...card} />
      </li>
    );
  });

  return <ul aria-label={coursesSelectionAriaLabel}>{items}</ul>;
};

const CourseSelection = props => {
  const {
    search,
    courses,
    emptyMessages,
    'courses-selection-aria-label': coursesSelectionAriaLabel
  } = props;

  const resultView = buildResultView(courses, coursesSelectionAriaLabel, emptyMessages);

  return (
    <div className={style.container}>
      <div className={style.search}>
        <Search {...search} theme="coorpmanager" />
      </div>
      <div className={style.cardsContainer}>{resultView}</div>
    </div>
  );
};

CourseSelection.propTypes = {
  search: PropTypes.shape(Search.PropTypes),
  courses: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)),
  'courses-selection-aria-label': PropTypes.string,
  emptyMessages: PropTypes.shape({
    firstMessage: PropTypes.string,
    secondMessage: PropTypes.string
  })
};

export default CourseSelection;
