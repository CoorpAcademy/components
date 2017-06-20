import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const FilterItem = props => {
  return (
    <li>
      {props.text}
    </li>
  );
};

const SelectItem = props => {
  return (
    <li>
      {props.text}
    </li>
  );
};

const AnalyticsSidebar = props => {
  return (
    <div className={style.text}>
      <div className={style.navigation}>
        <ul>
          <FilterItem text="Target" />
          <FilterItem text="Population" />
          <SelectItem text="Engagament" />
          <SelectItem text="Per User" />
          <SelectItem text="Per Module" />
          <SelectItem text="Exports" />
        </ul>
      </div>
      <div className={style.info}>
        TO BE DONE
      </div>
    </div>
  );
};
AnalyticsSidebar.propTypes = {
  text: PropTypes.string.isRequired
};

export default AnalyticsSidebar;
