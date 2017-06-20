import React from 'react';
// import PropTypes from 'prop-types'; //TODO once prototyping over
import Link from '../../atom/link/index';
import Select from '../../atom/select/index';
import style from './style.css';

const FilterItem = props => {
  return (
    <li>
      <span>{props.title}</span>
      <Select
        title={props.title}
        onChange={props.handleOnChange}
        theme="header"
        options={props.options}
      />
    </li>
  );
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

const Sidebar = props => {
  return (
    <div className={style.text}>
      <div className={style.navigation}>
        <ul>
          {props.items.map((item, index) => {
            if (item.type === 'select')
              return (
                <FilterItem
                  key={index}
                  title={item.title}
                  options={item.options}
                  handleOnChange={item.onChange}
                />
              );
            else if (item.type === 'link')
              return (
                <SelectItem
                  key={index}
                  title={item.title}
                  handleOnClick={item.onclick}
                  href={item.href}
                />
              );
            return <hr key={index} />;
          })}
        </ul>
      </div>
      <div className={style.info}>
        <InfoItem title="Date lancement" info="30 fev" />
      </div>
    </div>
  );
};
Sidebar.propTypes = {};

export default Sidebar;
