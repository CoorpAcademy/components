import React from 'react';
import PropTypes from 'prop-types';
import size from 'lodash/fp/size';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import classnames from 'classnames';
import Select from '../../atom/select';
import RadioGroup from '../../atom/radio-group';
import RangeSlider from '../../atom/range';
import style from './filters-wapper.css';

const FiltersWapper = (props, context) => {
  const {thematic, timer, types, courses, authors, filters, className} = props;

  const buildFilter = (filter, idx) => {
    const {type, fieldName} = filter;
    switch (type) {
      case 'select':
        return (
          <div data-name="choice" data-filter-type={fieldName} className={style.choice} key={idx}>
            <Select {...filter} />
          </div>
        );
      case 'radio':
        return (
          <div data-name="choice" data-filter-type={fieldName} className={style.choice} key={idx}>
            <p className={style.title}>{filter.title}</p>
            <RadioGroup {...filter} />
          </div>
        );
      case 'range':
        return (
          <div
            data-name="choice"
            data-filter-type={fieldName}
            className={style.timerWrapper}
            key={idx}
          >
            <label>
              <span className={style.title}>{filter.title}</span>
              <p className={style.timerSubtitle}>{filter.subtitle}</p>
              <RangeSlider {...filter} />
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  const filtersList = map.convert({cap: false})(buildFilter, filters);
  let index = size(filters);
  const coursesView = courses
    ? buildFilter({type: 'select', fieldName: 'Cursus', ...courses}, index++)
    : null;

  const thematicView = thematic
    ? buildFilter({type: 'select', fieldName: 'Collection', ...thematic}, index++)
    : null;

  const timerView = timer
    ? buildFilter({type: 'range', fieldName: 'Time', ...timer}, index++)
    : null;

  const radioView = types
    ? buildFilter({type: 'radio', fieldName: 'ContentFilter', ...types}, index++)
    : null;

  const authorsView = authors
    ? buildFilter({type: 'select', fieldName: 'Author', ...authors}, index++)
    : null;

  const emptyFilters =
    thematic === undefined &&
    timer === undefined &&
    types === undefined &&
    courses === undefined &&
    authors === undefined &&
    isEmpty(filters);

  return (
    <div className={classnames(className, emptyFilters ? style.wrapperNone : style.wrapper)}>
      {thematicView}
      {radioView}
      {coursesView}
      {timerView}
      {authorsView}
      {filtersList}
    </div>
  );
};

FiltersWapper.propTypes = {
  className: PropTypes.string,
  thematic: PropTypes.shape(Select.propTypes),
  timer: PropTypes.shape(RangeSlider.propTypes),
  types: PropTypes.shape(RadioGroup.propTypes),
  courses: PropTypes.shape(Select.propTypes),
  authors: PropTypes.shape(Select.propTypes),
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['select', 'range']).isRequired,
      fieldName: PropTypes.string.isRequired
    })
  )
};
export default FiltersWapper;
