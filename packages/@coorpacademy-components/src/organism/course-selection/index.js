import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash/fp';
import EmptySearchResult from '../../atom/empty-search-result';
import Search from '../../atom/input-search';
import SelectMultiple from '../../molecule/select-multiple';
import Card from '../../molecule/card';
import InputSwitch from '../../atom/input-switch';
import style from './style.css';

const buildResultView = (courses, coursesSelectionAriaLabel, emptyMessages) => {
  if (isEmpty(courses)) {
    return <EmptySearchResult {...emptyMessages} />;
  }

  const items = courses.map((card, index) => {
    return (
      <li className={style.cards} key={`card-${index}`} data-name={`course-${index}`}>
        <Card {...card} />
      </li>
    );
  });

  return <ul aria-label={coursesSelectionAriaLabel}>{items}</ul>;
};

const CourseSelection = props => {
  const {
    search,
    contentTypeFilter,
    courses,
    emptyMessages,
    'courses-selection-aria-label': coursesSelectionAriaLabel,
    switchButton
  } = props;

  const resultView = buildResultView(courses, coursesSelectionAriaLabel, emptyMessages);

  return (
    <div className={style.container}>
      <div className={style.filters}>
        <div className={style.search}>
          <Search {...search} theme="coorpmanager" />
        </div>
        <div className={style.contentFilter}>
          <SelectMultiple {...contentTypeFilter} />
        </div>
        <InputSwitch {...switchButton} />
      </div>
      <div className={style.cardsContainer}>{resultView}</div>
    </div>
  );
};

CourseSelection.propTypes = {
  search: PropTypes.shape(Search.PropTypes),
  contentTypeFilter: PropTypes.shape(SelectMultiple.PropTypes),
  courses: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)),
  'courses-selection-aria-label': PropTypes.string,
  emptyMessages: PropTypes.shape({
    firstMessage: PropTypes.string,
    secondMessage: PropTypes.string
  }),
  switchButton: PropTypes.shape(InputSwitch.PropTypes)
};

export default CourseSelection;
