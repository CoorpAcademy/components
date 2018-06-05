import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import classnames from 'classnames';
import Select from '../../atom/select';
import InputSwitch from '../../atom/input-switch';
import RadioGroup from '../../atom/radio-group';
import RangeSlider from '../../atom/range';
import style from './filters-wapper.css';

const FiltersWapper = (props, context) => {
  const {filters, className} = props;

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
            <RadioGroup className={style.radioGroup} {...filter} />
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
      case 'switch':
        return (
          <div data-name="choice" data-filter-type={fieldName} className={style.choice} key={idx}>
            <p className={style.title}>{filter.title}</p>
            <div className={style.toggle}>
              <InputSwitch {...filter.display} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const filtersList = map.convert({cap: false})(buildFilter, filters);
  const emptyFilters = isEmpty(filters);
  return (
    <div className={classnames(className, emptyFilters ? style.wrapperNone : style.wrapper)}>
      {filtersList}
    </div>
  );
};

FiltersWapper.propTypes = {
  className: PropTypes.string,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['select', 'range', 'radio', 'switch']).isRequired,
      fieldName: PropTypes.string.isRequired
    })
  )
};
export default FiltersWapper;
