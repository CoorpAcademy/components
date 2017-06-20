import React from 'react';
// import PropTypes from 'prop-types'; //TODO once prototyping over
import Link from '../../atom/link/index';
import Select from '../../atom/select/index';
import style from './style.css';

const FilterItem = props => {
  return (
    <li className={style.selectItem}>
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
    <li className={props.selected ? `${style.linkItem} ${style.selectLinkItem}` : style.linkItem}>
      <Link href={props.href} onClick={props.handleOnClick}>
        {props.title}
      </Link>
    </li>
  );
};

const InfoItem = props => {
  return (
    <ul className={style.infoItem}>
      <li className={style.infoItemTitle}>
        {props.title}
      </li>
      <li className={style.infoItemContent}>
        {props.info}
      </li>
    </ul>
  );
};

const Sidebar = props => {
  const sections = Array.isArray(props.items[0]) ? props.items : [props.items];
  return (
    <div className={style.sidebar}>
      {sections.map((sidebarSection, idx) => (
        <div className={style.sidebar_part} key={idx}>
          <ul className={style.itemList}>
            {sidebarSection.map((item, index) => {
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
                    handleOnClick={item.onClick}
                    href={item.href}
                    selected={item.selected || false}
                  />
                );
              else if (item.type === 'info')
                return <InfoItem key={index} title={item.title} info={item.value} />;
              return null;
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};
Sidebar.propTypes = {};

export default Sidebar;
