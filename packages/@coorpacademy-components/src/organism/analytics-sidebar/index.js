import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atom/link/index';
import Select from '../../atom/select/index';
import style from './style.css';

const FilterItem = props => {
  return (
    <li>
      <span>{props.title}</span>
      <Select
        title={props.title}
        onChange={props.onChange}
        theme="header"
        options={props.options}
      />
    </li>
  );
  // see theme, onChange
};

const SelectItem = props => {
  return (
    <li>
      <Link href={props.href}>
        {props.title}
      </Link>
    </li>
  );
};

const InfoItem = props => {
  return (
    <dl>
      <dt>
        {props.title}
      </dt>
      <dd>
        {props.info}
      </dd>
    </dl>
  );
};

const AnalyticsSidebar = props => {
  return (
    <div className={style.text}>
      <div className={style.navigation}>
        <ul>
          <FilterItem title="Target" options={props.populationsAvailable} />
          <FilterItem title="Population" options={props.providersAvailable} />
          <SelectItem title="Engagament" href="/analytics/dashboard" />
          <SelectItem title="Per User" href="/analytics/users/activity" />
          <SelectItem title="Per Module" href="/analytics/modules/activity" />
          <SelectItem title="Exports" href="analytics/exports/global" />
        </ul>
      </div>
      <div className={style.info}>
        <InfoItem title="Date lancement" info="30 fev" />
      </div>
    </div>
  );
};
AnalyticsSidebar.propTypes = {
  text: PropTypes.string.isRequired
};

export default AnalyticsSidebar;
